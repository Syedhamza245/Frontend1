module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure it includes your source folder
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'ramp-blue-700': '#003E6B',
        'ramp-blue-200': '#CCE4F6',
        'ramp-purple-600': '#6938EF',
      },
    },
  },
  plugins: [],
}
