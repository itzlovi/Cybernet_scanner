/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#3b82f6', // Electric cyan - primary actions
        'primary-50': '#E6F9FF', // Very light cyan
        'primary-100': '#CCF3FF', // Light cyan
        'primary-200': '#99E7FF', // Medium light cyan
        'primary-300': '#66DBFF', // Medium cyan
        'primary-400': '#33CFFF', // Medium dark cyan
        'primary-500': '#00D4FF', // Base primary cyan
        'primary-600': '#00A3CC', // Dark cyan
        'primary-700': '#007299', // Darker cyan
        'primary-800': '#004166', // Very dark cyan
        'primary-900': '#001033', // Deepest cyan

        // Secondary Colors
        'secondary': '#10b981', // Professional blue
        'secondary-50': '#E6F2FF', // Very light blue
        'secondary-100': '#CCE5FF', // Light blue
        'secondary-200': '#99CBFF', // Medium light blue
        'secondary-300': '#66B1FF', // Medium blue
        'secondary-400': '#3397FF', // Medium dark blue
        'secondary-500': '#0A84FF', // Base secondary blue
        'secondary-600': '#0866CC', // Dark blue
        'secondary-700': '#064999', // Darker blue
        'secondary-800': '#042B66', // Very dark blue
        'secondary-900': '#020E33', // Deepest blue

        // Accent Colors
        'accent': '#FF2D92', // Vibrant magenta
        'accent-50': '#FFE6F2', // Very light magenta
        'accent-100': '#FFCCE5', // Light magenta
        'accent-200': '#FF99CB', // Medium light magenta
        'accent-300': '#FF66B1', // Medium magenta
        'accent-400': '#FF3397', // Medium dark magenta
        'accent-500': '#FF2D92', // Base accent magenta
        'accent-600': '#CC2475', // Dark magenta
        'accent-700': '#991B58', // Darker magenta
        'accent-800': '#66123B', // Very dark magenta
        'accent-900': '#33091E', // Deepest magenta

        // Background Colors
        'background': '#0a0b0f', // Deep space blue-black
        'surface': '#12141c', // Elevated dark surface
        'surface-50': '#F5F5F7', // Very light surface
        'surface-100': '#EBEBEF', // Light surface
        'surface-200': '#D7D7DF', // Medium light surface
        'surface-300': '#C3C3CF', // Medium surface
        'surface-400': '#AFAFBF', // Medium dark surface
        'surface-500': '#9B9BAF', // Base surface
        'surface-600': '#1f2937', // Dark surface
        'surface-700': '#374151', // Darker surface
        'surface-800': '#1a1f2e', // Very dark surface
        'surface-900': '#1F1F23', // Deepest surface

        // Text Colors
        'text-primary': '#f3f4f6', // High-contrast light gray
        'text-secondary': '#9ca3af', // Muted gray
        'text-50': '#FAFBFC', // Very light text
        'text-100': '#F6F8FA', // Light text
        'text-200': '#E1E4E8', // Medium light text
        'text-300': '#D1D5DA', // Medium text
        'text-400': '#959DA5', // Medium dark text
        'text-500': '#6A737D', // Base text
        'text-600': '#586069', // Dark text
        'text-700': '#444D56', // Darker text
        'text-800': '#2F363D', // Very dark text
        'text-900': '#1B1F23', // Deepest text

        // Status Colors
        'success': '#22c55e', // Bright matrix green
        'success-50': '#EEFFEB', // Very light green
        'success-100': '#DDFFDD', // Light green
        'success-200': '#BBFFBB', // Medium light green
        'success-300': '#99FF99', // Medium green
        'success-400': '#77FF77', // Medium dark green
        'success-500': '#39FF14', // Base success green
        'success-600': '#2ECC10', // Dark green
        'success-700': '#23990C', // Darker green
        'success-800': '#186608', // Very dark green
        'success-900': '#0D3304', // Deepest green

        'warning': '#f59e0b', // Electric gold
        'warning-50': '#FFFEF0', // Very light gold
        'warning-100': '#FFFDE1', // Light gold
        'warning-200': '#FFFBC3', // Medium light gold
        'warning-300': '#FFF9A5', // Medium gold
        'warning-400': '#FFF787', // Medium dark gold
        'warning-500': '#FFD700', // Base warning gold
        'warning-600': '#CCAC00', // Dark gold
        'warning-700': '#998100', // Darker gold
        'warning-800': '#665600', // Very dark gold
        'warning-900': '#332B00', // Deepest gold

        'error': '#ef4444', // Intense red
        'error-50': '#FFE6EA', // Very light red
        'error-100': '#FFCCD5', // Light red
        'error-200': '#FF99AB', // Medium light red
        'error-300': '#FF6681', // Medium red
        'error-400': '#FF3357', // Medium dark red
        'error-500': '#FF073A', // Base error red
        'error-600': '#CC062E', // Dark red
        'error-700': '#990423', // Darker red
        'error-800': '#660317', // Very dark red
        'error-900': '#33010C', // Deepest red
      },
      fontFamily: {
        'heading': ['Orbitron', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'caption': ['Rajdhani', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'glow-sm': '0 0 5px rgba(0, 212, 255, 0.3)',
        'glow': '0 0 10px rgba(0, 212, 255, 0.4)',
        'glow-md': '0 0 15px rgba(0, 212, 255, 0.5)',
        'glow-lg': '0 0 20px rgba(0, 212, 255, 0.6)',
        'glow-xl': '0 0 25px rgba(0, 212, 255, 0.7)',
        'glow-accent': '0 0 15px rgba(255, 45, 146, 0.4)',
        'glow-success': '0 0 15px rgba(57, 255, 20, 0.4)',
        'glow-warning': '0 0 15px rgba(255, 215, 0, 0.4)',
        'glow-error': '0 0 15px rgba(255, 7, 58, 0.4)',
        'cyber': '0 2px 8px rgba(0, 212, 255, 0.2), 0 0 0 1px rgba(0, 212, 255, 0.1)',
        'cyber-lg': '0 4px 16px rgba(0, 212, 255, 0.3), 0 0 0 1px rgba(0, 212, 255, 0.2)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'data-stream': 'data-stream 3s linear infinite',
        'scan-progress': 'scan-progress 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.2s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.4',
            boxShadow: '0 0 5px currentColor',
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 20px currentColor',
          },
        },
        'data-stream': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
        },
        'scan-progress': {
          '0%': {
            transform: 'scaleX(0)',
            opacity: '0.6',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            transform: 'scaleX(1)',
            opacity: '0.8',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        'cyber': '8px',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
      },
      zIndex: {
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}