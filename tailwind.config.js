/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        'white':'#fff',
        'blue-900':'#242c63',
        'gray-300':'#cbd5e1',
        'gray-400':'#94a3b8',
        'slate-500':'#64748b',
        'blue-600':'#2563eb',
        'slate-400':'#9ca3af',
        'violet-700':'#6d28d9',
        'gray-200':'#d4d4d8',
    }
  },
},
  plugins: [],
}