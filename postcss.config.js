module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-custom-media': {
      importFrom: {
        customMedia: {
          "--default": "all",
          "--default-max": "(max-width: 575px)",
          "--xs": "(min-width: 576px)",
          "--xs-max": "(max-width: 767px)",
          "--sm": "(min-width: 768px)",
          "--sm-max": "(max-width: 991px)",
          "--md": "(min-width: 992px)",
          "--md-max": "(max-width: 1199px)",
          "--lg": "(min-width: 1200px)",
          "--lg-max": "(max-width: 1599px)",
          "--xl": "(min-width: 1600px)",
          "--xl-max": "(max-width: 1919px)",
          "--xxl": "(min-width: 1920px)"
        }
      }
    }
  }
}
