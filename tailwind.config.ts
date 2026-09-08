import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ========== PenMerge Brand Colors (Source of Truth) ==========
        // Deep Green - Primary brand anchor color
        'brand-green': '#12312B',
        'brand-green-light': '#1A3F38',
        'brand-green-lighter': '#234A42',
        
        // Warm Gold - Refined accent (used sparingly)
        'brand-gold': '#D8A34E',
        'brand-gold-light': '#E5B866',
        'brand-gold-lighter': '#F0D4A0',
        
        // Warm Ivory - Editorial premium background
        'brand-ivory': '#EAE0C8',
        'brand-ivory-light': '#F5F0E5',
        
        // Soft Cream - Light editorial background
        'brand-cream': '#F4EEE1',
        'brand-cream-light': '#FAFBF8',
        
        // Text & Utility Colors
        'brand-text': '#10231F',
        'brand-text-muted': '#53615D',
        'brand-border': '#D9D1BC',
        'brand-white': '#FFFFFF',

        // ========== Semantic Color Tokens ==========
        // Surface backgrounds
        surface: {
          base: '#FFFFFF',
          elevated: '#F4EEE1',
          warm: '#EAE0C8',
          alt: '#F5F0E5',
        },
        
        // Text hierarchy
        text: {
          primary: '#10231F',
          secondary: '#53615D',
          muted: '#8B9A95',
          inverse: '#FFFFFF',
        },
        
        // Brand semantic
        primary: {
          DEFAULT: '#12312B',
          dark: '#0A1F1B',
          light: '#1A3F38',
          lighter: '#234A42',
          pale: '#E8F1F0',
        },
        
        accent: {
          DEFAULT: '#D8A34E',
          dark: '#B8852F',
          light: '#E5B866',
          lighter: '#F0D4A0',
          pale: '#FAF6F0',
        },
        
        // Borders & dividers
        border: {
          DEFAULT: '#D9D1BC',
          light: '#E8E3D4',
          lighter: '#F0EBE0',
        },
        
        // State colors (minimal, editorial tone)
        state: {
          success: '#2D6A5F',
          warning: '#C89A3E',
          error: '#8B4C3A',
          info: '#2A4A44',
        },
      },
      
      fontFamily: {
        serif: ['Crimson Text', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Crimson Text', 'Georgia', 'serif'],
      },
      
      fontSize: {
        xs: ['12px', { lineHeight: '16px', letterSpacing: '0.3px' }],
        sm: ['14px', { lineHeight: '20px', letterSpacing: '0.25px' }],
        base: ['16px', { lineHeight: '24px', letterSpacing: '0.2px' }],
        lg: ['18px', { lineHeight: '28px', letterSpacing: '0.15px' }],
        xl: ['20px', { lineHeight: '28px', letterSpacing: '0.1px' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '0px' }],
        '3xl': ['30px', { lineHeight: '36px', letterSpacing: '-0.5px' }],
        '4xl': ['36px', { lineHeight: '40px', letterSpacing: '-0.75px' }],
        '5xl': ['48px', { lineHeight: '48px', letterSpacing: '-1px' }],
        '6xl': ['60px', { lineHeight: '60px', letterSpacing: '-1.25px' }],
        '7xl': ['72px', { lineHeight: '72px', letterSpacing: '-1.5px' }],
      },
      
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
        '5xl': '80px',
        '6xl': '96px',
        '7xl': '120px',
      },
      
      borderRadius: {
        none: '0px',
        xs: '2px',
        sm: '3px',
        md: '4px',
        lg: '6px',
        xl: '8px',
      },
      
      boxShadow: {
        none: '0 0 0 transparent',
        xs: '0 1px 2px 0 rgba(18, 49, 43, 0.04)',
        sm: '0 1px 3px 0 rgba(18, 49, 43, 0.08)',
        md: '0 2px 8px 0 rgba(18, 49, 43, 0.12)',
        lg: '0 4px 16px 0 rgba(18, 49, 43, 0.14)',
        xl: '0 8px 24px 0 rgba(18, 49, 43, 0.16)',
        'elevation': '0 8px 24px rgba(18, 49, 43, 0.12)',
        'elevation-lg': '0 16px 40px rgba(18, 49, 43, 0.16)',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
      },
      
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
      },
    },
    
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  
  plugins: [],
}

export default config
