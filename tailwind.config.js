/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#4A7050",
          dark: "#3A5740",
          deep: "#1B2C25",
        },
        moss: "#9FB38A",
        leaf: "#C4CFBA",
        cream: "#E8E8E2",
        bone: "#DDDDD7",
        sand: "#D3D3CD",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"Open Sans"', "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
      },
      boxShadow: {
        soft: "0 30px 60px -30px rgba(74, 112, 80, 0.25)",
        card: "0 20px 40px -20px rgba(74, 112, 80, 0.18)",
      },
      backgroundImage: {
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
