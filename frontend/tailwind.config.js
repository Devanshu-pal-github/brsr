/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        background: '#f2f4f5',
        primary: '#002a85',
        'primary-hover': '#001d5e',
        sidebar: '#000d30',
        'sidebar-selected': '#20305d',
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        text: {
          primary: '#111827',
          secondary: '#4b5563',
          muted: '#6b7280',
        },
        border: '#e5e7eb',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      }
    },
  },
  plugins: [],
} 