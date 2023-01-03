/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#F66F4D",
        secondary: "#FAF8ED",
        third: "#2D3134",
        fourth: "#FFD482",
        fifth: "#fffdfd",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          margin: "auto",
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
          "@screen 2xl": {
            maxWidth: "1140px",
          },
        },
      });
    },
  ],
};
