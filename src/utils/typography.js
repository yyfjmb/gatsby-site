import Typography from "typography"

const typography = new Typography({
  title: 'basic',
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Noto Sans TC',
      styles: [
        '700',
      ],
    },
    {
      name: 'Noto Serif TC',
      styles: [
        '400',
        '500',
        '700',
        '900',
      ],
    },
  ],
  headerFontFamily: ['Noto Sans TC', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Noto Serif TC', 'serif'],
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
