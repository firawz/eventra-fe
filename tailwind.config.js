module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  theme: {
    extend: {
      colors: {
        'eventra-purple': '#8B5CF6', // Custom purple color from Figma design
        'eventra-dark-purple': '#6B46C1', // A darker shade for contrast if needed
        'eventra-light-purple': '#A78BFA' // A lighter shade
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
}
