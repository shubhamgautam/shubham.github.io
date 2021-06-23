// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Calibre','San Francisco','SF Pro Text','-apple-system','system-ui', 'sans-serif'],
      mono: ["SF Mono","Fira Code","Fira Mono","Roboto Mono","monospace"]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
