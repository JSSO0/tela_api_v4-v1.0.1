module.exports = {
  mode: 'jit',
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,html,mdx}',
    './src/**/*.{js,ts,jsx,tsx,html,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: { md: { max: '1050px' }, sm: { max: '550px' } },
    extend: {
      colors: {
        black: { 900: '#000000', '900_3f': '#0000003f' },
        blue: { 100: '#add7f1' },
        white: { A700: '#ffffff' },
        gray: { 100: '#f7f7f7' },
      },
      fontFamily: { inter: 'Inter' },
      boxShadow: { bs: '0px 4px  4px 0px #0000003f' },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
