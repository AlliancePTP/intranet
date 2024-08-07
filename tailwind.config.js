/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      spacing: {
        '128': '64rem',
      },
      fontFamily: {
        universHeading: ['Univers-Heading', 'heading'],
        universSubheading: ['Univers-Subheading', 'subheading'],
        sans: ['Univers-Body', 'Arial', 'sans-serif'],
        body: ['Univers-Body', 'sans-serif']
      },
      spacing: {
        120: '30rem'
      }
    },
    colors: {
      aptpblue: '#0a7cba',
      aptpred: '#ee4c24',
      aptpgreen: '#4d8c3f',
      aptpgrey: '#77777a',
      aptppurple: '#8f499c'
    }
  },
  plugins: [require('flowbite/plugin')],
  corePlugins: {
    preflight: false
  }
  // darkMode: 'class'
}
