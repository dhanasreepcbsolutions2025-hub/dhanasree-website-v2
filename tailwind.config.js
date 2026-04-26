/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandOrange: '#FF7244',
        brandCyan: '#00C2FF',
        brandNavy: '#0F172A',
        brandSlate: '#F8FAFC'
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #00C2FF, #FF7244)',
        'hero-navy': 'linear-gradient(to bottom, #0F172A, #1E293B)',
        'plus-pattern': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0v20M0 10h20' stroke='%23FF7244' stroke-opacity='0.05' stroke-width='1'/%3E%3C/svg%3E\")"
      }
    }
  },
  plugins: []
}