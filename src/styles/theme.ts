export type HeaderStyleVariant = 'Xl' | 'Lg' | 'Base' | 'Sm';
export type TextStyleVariant = 'textXl' | 'textBase' | 'textSm' | 'textXs';
export type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const theme = {
  colors: {
    primitives: {
      gray10: '#FFFFFF',
      gray30: '#CFCFCF',
      gray40: '#BFBFBF',
      gray50: '#737373',
      gray70: '#2D2D2D',
      gray80: '#131313',
      emerald20: '#B2DFD0',
      emerald30: '#80CAB1',
      emerald40: '#4FB494',
      emerald60: '#018762',
      emerald70: '#007756',
      emerald80: '#014C37',
      green70: '#298A46',
      orange10: '#FDF4E6',
      orange50: '#F1C580',
      red60: '#BC1C1C',
      blue50: '#4D8ACB'
    },
    semantic: {
      background: {
        primary: 'gray10',
        disabled: 'gray30',
        hover: 'emerald60',
        pressed: 'emerald80',
        success: 'green70',
        error: 'red60',
        warning: 'orange10',
        info: 'blue50',
      },
      text: {
        heading: 'gray80',
        body: 'gray70',
        default: 'emerald60',
        hover: 'emerald70',
        pressed: 'emerald80',
        disabled: 'gray40',
        error: 'red60',
        sucess: 'green70',
        info: 'blue50'
      },
      border: {
        focusOffset: 'gray10',
        default: 'gray80',
        disabled: 'gray30',
        hover: 'emerald50',
        success: 'green70',
        divider: 'emerald20',
        info: 'blue50', 
        warning: 'orange50', 
        error: 'red60', 
      },

      icon: {
        default: 'gray80',
        accent: 'emerald60',
        hover: 'emerald70',
        pressed: 'emerald80',
        disabled: 'gray40',
        success: 'green70',
        error: 'red60',
        info: 'blue50'
      },

      button: {
        primary: {
          default: {
            background: 'emerald60',
            textColor: 'gray10' 
          },
          hover: {
            background: 'emerald70',
            textColor: 'gray10'
          },
          pressed: {
            background: 'emerald80',
            textColor: 'gray10'
          },
          disabled: {
            background: 'gray40',
            textColor: 'gray50'
          },
          focus: {
            background: 'emerald60',
            textColor: 'gray10',
            border: 'emerald60',
            outline: 'blue50'
          }
        },
        secondary: {
          default: {
            background: 'gray10',
            textColor: 'emerald60',
            borderColor: 'emerald60' 
          },
          hover: {
            background: 'emerald20',
            textColor: 'emerald70',
            borderColor: 'emerald70'
          }, 
          pressed: {
            background: 'emerald30',
            textColor: 'emerald80',
            borderColor: 'emerald80'
          },
          disabled: {
            background: 'gray40',
            textColor: 'gray50'
          },
          focus: {
            background: 'gray10',
            textColor: 'emerald70',
            borderColor: 'emerald70',
            outline: 'blue50'
          }
        }
      }
    }
  },

  fonts: {
    main: 'Nunito, sans-serif',
    heading: 'Nunito, sans-serif'
  },

  borderRadius: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    circle: '50%',
    pill: '60px'
  },

  borderWidth: {
    borderWidthNone: '0px',
    borderWidthSm: '1px',
    borderWidthMd: '2px',
    borderWidthLg: '4px',
    borderWidthXl: '8px'
  },

  shadow: {
    shadowSm: '0 1px 3px rgba(100, 100, 100, 0.1)',
    shadowMd: '0 5px 10px rgba(100, 100, 100, 0.3)',
    shadowLg: '0 15px 25px rgba(100, 100, 100, 0.5)'
  },

  spacing: {
    xs4: '0.125rem', // 2px
    xs3: '0.25rem', // 4px
    xs2: '0.5rem', // 8px
    xs: '0.75rem', // 12px
    s: '1rem', // 16px
    m: '1.5rem', // 24px
    l: '2rem', // 32px
    xl: '2.5rem', // 40px
    xl2: '3rem', // 48px
    xl3: '3.5rem', // 56px 
    layoutL: '4rem', // 64px
    layoutXl: '6rem', // 96px
    layoutXl2: '8rem'
  },
  typography: {
    header: {
      Xl: {
        fontSize: '48px',
        fontWeight: 'bold',
        lineHeight: '120%'
      },
      Lg: {
        fontSize: '40px',
        fontWeight: 'bold',
        lineHeight: '120%'
      },
      Base: {
        fontSize: '32px',
        fontWeight: 'bold',
        lineHeight: '120%'
      },
      Sm: {
        fontSize: '24px',
        fontWeight: 'regular',
        lineHeight: '150%'
      }, 
    },
    text: {
      textXl: {
        fontSize: '18px',
        fontWeight: 'regular',
        lineHeight: '150%'
      },
      textBase: {
        fontSize: '16px',
        fontWeight: 'regular',
        lineHeight: '150%'
      },
      textSm: {
        fontSize: '14px',
        fontWeight: 'regular',
        lineHeight: '150%'
      }, 
      textXs: {
        fontSize: '12px',
        fontWeight: 'regular',
        lineHeight: '150%'
      }
    }

  }
} as const;

export type Theme = typeof theme;