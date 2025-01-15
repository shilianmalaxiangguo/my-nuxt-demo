import { themeConfig } from './lib/theme-config'
import animate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './content/**/*.{md,yml,json,yaml,toml,xml}'
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--foreground)',
            '--tw-prose-headings': 'hsl(var(--primary))',
            '--tw-prose-links': 'var(--primary)',
            '--tw-prose-bold': 'var(--foreground)',
            '--tw-prose-counters': 'var(--foreground)',
            '--tw-prose-bullets': 'var(--foreground)',
            '--tw-prose-hr': 'var(--border)',
            '--tw-prose-quotes': 'var(--foreground)',
            '--tw-prose-quote-borders': 'var(--border)',
            '--tw-prose-captions': 'var(--muted-foreground)',
            '--tw-prose-code': 'var(--foreground)',
            '--tw-prose-pre-code': 'var(--foreground)',
            '--tw-prose-pre-bg': 'var(--card)',
            '--tw-prose-th-borders': 'var(--border)',
            '--tw-prose-td-borders': 'var(--border)',
            
            // 代码块样式
            'pre': {
              padding: '1rem',
              borderRadius: '0.5rem',
              border: '1px solid #e5e7eb',
              backgroundColor: '#fafafa',
              overflow: 'auto',
              'code': {
                backgroundColor: 'transparent',
                border: 'none',
                padding: '0',
                color: 'inherit',
                lineHeight: '1.75rem',
                fontFamily: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
                fontSize: '1em'
              }
            },
            
            // 行内代码样式
            'code': {
              backgroundColor: '#f5f5f5',
              color: '#24292e',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '1em',
              fontFamily: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
              lineHeight: '1.75rem',
              border: '1px solid #e5e7eb'
            },

            // 链接样式
            'a': {
              color: 'var(--primary)',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            },

            // 具体标题样式
            h1: {
              color: 'hsl(var(--primary))',
              fontWeight: '800'
            },
            h2: {
              color: 'hsl(var(--primary))',
              fontWeight: '700'
            },
            h3: {
              color: 'hsl(var(--primary))',
              fontWeight: '600'
            },
            h4: {
              color: 'hsl(var(--primary))',
              fontWeight: '600'
            },

            // 图片样式
            'img': {
              width: '100%',  // 图片宽度撑满
              height: 'auto', // 保持宽高比
              borderRadius: '0.5rem',  // 可选：圆角
              marginTop: '1.5rem',
              marginBottom: '1.5rem'
            },
            
            // 特殊类名的图片样式
            'img[wide]': {  // 支持 ![alt|wide](src) 语法
              width: '100%',
              maxWidth: '100%',
              height: 'auto'
            }
          }
        },
        
        // 暗色模式样式
        invert: {
          css: {
            'pre': {
              border: '1px solid hsl(var(--border))',
              backgroundColor: '#21252B',
              'code': {
                fontSize: '1em',
                lineHeight: '1.75rem',
                fontFamily: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
                backgroundColor: 'transparent',
                color: 'hsl(var(--card-foreground))'
              }
            },
            'code': {
              fontSize: '1em',
              lineHeight: '1.75rem',
              fontFamily: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
              backgroundColor: '#21252B',
              color: 'hsl(var(--foreground))',
              border: '1px solid hsl(var(--border))'
              
            },

            // 暗色模式下标题也使用主题色
            '--tw-prose-headings': 'hsl(var(--primary))',
            
            h1: {
              color: 'hsl(var(--primary))'
            },
            h2: {
              color: 'hsl(var(--primary))'
            },
            h3: {
              color: 'hsl(var(--primary))'
            },
            h4: {
              color: 'hsl(var(--primary))'
            },

            // 暗色模式下的图片样式（如果需要）
            'img': {
              opacity: '0.95'  // 可选：稍微降低暗色模式下的图片亮度
            }
          }
        }
      }
    },
  },
  plugins: [animate, require('@tailwindcss/typography')],
}