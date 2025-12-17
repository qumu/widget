type RecursiveObject = {
  [key: string]: string | RecursiveObject;
};

export interface I18nOptions {
  fallbackLocale: string;
  interpolation: {
    prefix?: string;
    suffix?: string;
  };
  locale: string;
  messages: RecursiveObject;
}

export const defaultI18nOptions: I18nOptions = {
  fallbackLocale: 'en',
  interpolation: {
    prefix: '{{',
    suffix: '}}',
  },
  locale: 'en',
  messages: {},
};

export interface I18nStringOptions {
  [key: string]: string | number;
}

interface PluralRule {
  nplurals: number;

  plurals(n: number): number;
}

const DEFAULT_PLURAL_RULE: PluralRule = {
  nplurals: 2,
  plurals: (n: number) => Number(n !== 1),
};

const CUSTOM_PLURAL_RULES: Record<string, PluralRule> = {
  fr: {
    nplurals: 2,
    plurals: (n: number) => Number(n > 1),
  },
  ja: {
    nplurals: 1,
    plurals: () => 0,
  },
};

export class I18nService {
  private readonly options: I18nOptions;

  constructor(options: Partial<I18nOptions>) {
    this.options = {
      ...defaultI18nOptions,
      ...options,
    };
  }

  private static getValue(object: RecursiveObject, field: string): string {
    let obj = object;
    let fieldName = field;
    let index: number;

    while (obj && typeof obj === 'object' && fieldName && (index = fieldName.indexOf('.')) > 0) {
      obj = obj[fieldName.substring(0, index)] as RecursiveObject;
      fieldName = fieldName.substring(index + 1);
    }

    if (obj && fieldName && typeof obj === 'object') {
      return obj[fieldName] as string;
    }

    return '';
  }

  /**
   * Adds messages for a new locale
   *
   * @param locale the locale
   * @param messages the messages
   */
  addMessages(locale: string, messages: RecursiveObject): void {
    this.options.messages[locale] = messages;
  }

  /**
   * Returns the language without the locale
   */
  getLanguage(): string {
    return this.options.locale.split('-').shift()!;
  }

  /**
   * Returns the locale
   */
  getLocale(): string {
    return this.options.locale;
  }

  /**
   * Changes the defined locale
   *
   * @param locale the new locale to use
   */
  setLocale(locale: string): void {
    this.options.locale = locale;
  }

  /**
   * Returns the localised string for the provided key
   *
   * @param key the key to translate
   * @param options the options to replace the templated value
   * @param locale the locale, if we want a different one from the default one set in init()
   */
  t(key: string, options: I18nStringOptions = {}, locale?: string): string {
    const loc = locale || this.getLocale();
    const lang = loc.split('-').shift()!;
    const newKey = this.getKey(key, options, CUSTOM_PLURAL_RULES[lang] || DEFAULT_PLURAL_RULE);
    const template = this.getTemplate(newKey, loc);

    if (!template) {
      return key;
    }

    return this.interpolate(template, options, loc);
  }

  private getKey(key: string, options: I18nStringOptions, rule: PluralRule) {
    let field = key;

    if ('context' in options) {
      field += `_${options.context}`;
    }

    if ('count' in options) {
      const pluralIndex = rule.plurals(Math.abs(Number(options.count)));

      // if the locale does not allow for multiple plurals, or we need the 'singular' form
      // then we just need to use the `field`
      if (rule.nplurals === 1 || pluralIndex === 0) {
        // nothing to do here

        // There are only two types of plurals, so we want the `plural` form
      } else if (rule.nplurals === 2) {
        field += '_plural';

        // There are many types of plurals, and we want the correct one
        // for languages without plurals (like japanese), we want to get `${field}_0` as per the i18next v3 format
      } else {
        field += `_${pluralIndex}`;
      }

      return field;
    }

    return field;
  }

  private getLocaleAndLang(locale: string): string[] {
    return [
      locale,
      locale.split('-').shift()!,
    ];
  }

  private getTemplate(key: string, locale: string): string | null {
    const languages = new Set<string>([
      this.getLocaleAndLang(locale),
      this.getLocaleAndLang(this.options.fallbackLocale),
    ].flat());

    for (const lang of languages) {
      const messages = this.options.messages[lang] as RecursiveObject;
      const template = I18nService.getValue(messages, key);

      if (template) {
        return template;
      }
    }

    return null;
  }

  private interpolate(template: string, options: I18nStringOptions = {}, locale?: string) {
    // handle variable interpolation
    const interpolationPattern = new RegExp(`${this.options.interpolation.prefix}(\\w+)${this.options.interpolation.suffix}`, 'g');

    return template
      .replace(interpolationPattern, (_, subKey: string) => options[subKey] as string)
      .replace(/\$t\(([^)]+)\)/g, (_, newKey: string) => this.t(newKey, options, locale));
  }
}
