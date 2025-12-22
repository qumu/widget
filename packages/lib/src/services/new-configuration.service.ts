/* =========================
 * Schema DSL
 * ========================= */

type Rule = {
  type: 'string';
  required?: boolean;
  default?: string;
} | {
  type: 'number';
  required?: boolean;
  default?: number;
  min?: number;
  max?: number;
} | {
  type: 'boolean';
  required?: boolean;
  default?: boolean;
} | {
  type: 'enum';
  values: readonly string[];
  required?: boolean;
  default?: string;
} | {
  type: 'object';
  required?: boolean;
  default?: object;
  schema: Schema;
} | {
  required?: boolean;
  type: 'record';
} | {
  required?: boolean;
  type: 'function';
};

type Schema = Record<string, Rule>;

/* =========================
 * Type inference
 * ========================= */

type InferRule<R> = R extends { type: 'string' } ? string
  : R extends { type: 'number' } ? number
    : R extends { type: 'boolean' } ? boolean
      : R extends {
        type: 'enum';
        values: ReadonlyArray<infer V>;
      } ? V
        : R extends {
          type: 'object';
          schema: infer S;
        } ? InferSchema<S & Schema>
          : never;

type InferSchema<S extends Schema> = {
  [K in keyof S]:
  S[K] extends { required: true }
    ? InferRule<S[K]>
    : InferRule<S[K]> | undefined;
};

/* =========================
 * ConfigurationService (updated for multiple types)
 * ========================= */

export class ConfigurationService<S extends Schema> {
  constructor(private readonly schema: S) {}

  normalize(input: unknown): InferSchema<S> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.normalizeInternal(input, this.schema, '');
  }

  private normalizeInternal(
    input: unknown,
    schema: Schema,
    path: string,
  ): any {
    if (typeof input !== 'object' || input === null) {
      throw new Error('Configuration must be an object');
    }

    const src = input as Record<string, unknown>;
    const out: Record<string, unknown> = {};

    // Reject unknown keys
    for (const key of Object.keys(src)) {
      if (!(key in schema)) {
        throw new Error(`Unknown key: ${path}${key}`);
      }
    }

    for (const key of Object.keys(schema)) {
      const rule = schema[key];
      const value = src[key];
      const p = path ? `${path}${key}.` : `${key}.`;

      // Missing value
      if (value === undefined) {
        if ('default' in rule) {
          out[key]
            = rule.type === 'object'
              ? this.normalizeInternal(rule.default ?? {}, rule.schema, p)
              : rule.default;
          continue;
        }

        if (rule.required) {
          throw new Error(`Missing required key: ${path}${key}`);
        }

        continue;
      }

      if (rule.type === 'function') {
        if (typeof value !== 'function') {
          throw new Error(`${p}must be a function`);
        }

        out[key] = value;
        continue;
      }

      // Object
      if (rule.type === 'object') {
        if (typeof value !== 'object' || value === null) {
          throw new Error(`${p}must be an object`);
        }

        out[key] = this.normalizeInternal(value, rule.schema, p);
        continue;
      }

      // Record
      if (rule.type === 'record') {
        if (typeof value !== 'object' || value === null || Array.isArray(value)) {
          throw new Error(`${p}must be a record (plain object)`);
        }

        out[key] = value;
        continue;
      }

      // Enum
      if (rule.type === 'enum') {
        if (!rule.values.includes(value as string)) {
          throw new Error(`${p}must be one of ${rule.values.join(', ')}`);
        }

        out[key] = value;
        continue;
      }

      // Primitive(s)
      const allowedTypes = Array.isArray(rule.type) ? rule.type : [rule.type];
      const typeValid = allowedTypes.some((t) => {
        if (t === 'object' && value instanceof HTMLElement) {
          return true;
        } // selector support

        if (t === 'string' && typeof value === 'string') {
          return true;
        }

        if (t === 'number' && typeof value === 'number') {
          return true;
        }

        if (t === 'boolean' && typeof value === 'boolean') {
          return true;
        }

        return false;
      });

      if (!typeValid) {
        throw new Error(`${p}must be ${allowedTypes.join(' or ')}`);
      }

      // Number constraints
      if (typeof value === 'number' && rule.type === 'number') {
        if (rule.min !== undefined && value < rule.min) {
          throw new Error(`${p} < ${rule.min}`);
        }

        if (rule.max !== undefined && value > rule.max) {
          throw new Error(`${p} > ${rule.max}`);
        }
      }

      out[key] = value;
    }

    return out;
  }
}
