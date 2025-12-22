/* WidgetConfiguration.schema.ts */

export default {
  guid: {
    required: true,
    type: 'string',
  },

  host: {
    required: true,
    type: 'string',
  },

  locales: {
    type: 'record',
  },

  playerParameters: {
    default: {},
    schema: {
      captions: {
        type: 'string',
      },
      debug: {
        type: 'boolean',
      },
      loop: {
        type: 'boolean',
      },
      playerConfigurationGuid: {
        type: 'string',
      },
      pv: {
        type: 'enum',
        values: ['pipls', 'pipss', 'sbs'] as const,
      },
      quality: {
        type: 'enum',
        values: [
          'auto',
          'best',
          '1440p',
          '1080p',
          '720p',
          '480p',
          '240p',
        ] as const,
      },
      reporting: {
        type: 'boolean',
      },
      reportingId: {
        type: 'string',
      },
      showControlPanel: {
        type: 'boolean',
      },
      sidebar: {
        type: 'boolean',
      },
      speech: {
        type: 'string',
      },
      speechTerm: {
        type: 'string',
      },
      start: { type: 'number' },
      volume: {
        max: 100,
        min: 0,
        type: 'number',
      },
    },
    type: 'object',
  },
  selector: {
    required: true,
    type: ['string', 'object'], // HTMLElement handled at runtime
  },
  sortBy: {
    type: 'string',
  },
  sortOrder: {
    type: 'enum',
    values: ['ASCENDING', 'DESCENDING'] as const,
  },
  widgetOptions: {
    default: {},
    schema: {
      onIframeLoad: {
        required: false,
        type: 'function',
      },
      onThumbnailClick: {
        required: false,
        type: 'function',
      },
      playbackMode: {
        default: 'inline',
        type: 'enum',
        values: [
          'inline',
          'inline-autoload',
          'inline-autoplay',
          'modal',
        ] as const,
      },
      playIcon: {
        default: {},
        schema: {
          height: {
            default: 44,
            type: ['number', 'string'],
          },
          position: {
            default: 'center',
            type: 'enum',
            values: [
              'top-left',
              'top',
              'top-right',
              'left',
              'center',
              'right',
              'bottom-left',
              'bottom',
              'bottom-right',
            ] as const,
          },
          url: {
            type: 'string',
          },
          width: {
            default: 44,
            type: ['number', 'string'],
          },
        },
        type: 'object',
      },
    },
    type: 'object',
  },
} as const;
