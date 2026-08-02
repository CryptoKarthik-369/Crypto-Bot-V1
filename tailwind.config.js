/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mint: '#7FE8C9',
        coral: '#FF8B7B',
        azure: '#5AC8FA',
        amber: '#FFC24B',
        bg: '#0B0F14',
        panel: '#121821',
        border: '#1E2733'
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: []
}
