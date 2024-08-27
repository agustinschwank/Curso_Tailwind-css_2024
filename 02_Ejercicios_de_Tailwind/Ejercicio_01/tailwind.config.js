/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./*.html"
  ],
  
  theme: {
    extend: {
      screens: {
        "xs" : {"max": "768px"},
      },
      backgroundImage: {
        "first-pattern": "url('../img/pattern.png')",
        "banner" : "url('../img/banner.jpg')",
        "bakbaner": "url('../img/bakbaner.png')",
        "megabanner": "url('../img/megabanner.jpg')",
      },
      backgroundPosition: {
        "banner-position": "-500px -700px",
      },
      colors: {
        "azul-claro": "#37bcf9",
        "azul-oscuro": "#0370b9",
        "azul-noche": "#003f7a",
        "azul-fuerte": "#0084ff",
      },
      height: {
        "18": "4.5rem",
      },
      animation: {
        "spin-low": "spin 2s linear infinite",
        "from-below": "fromBelow 500ms linear",
        "from-Right": "fromRight 300ms linear",
        "bg-banner": "fromBanner 10s linear",
        "bg-showtext": "showBannerText 10s linear",
      },
      keyframes: {
        fromBelow: {
          '0%': {transform: 'translateY(0%)'},
          '50%': {transform: 'translateY(200%)'},
          '100%': {transform: 'translateY(0%)'},
        },
        fromRight : {
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(0%)"},
        },
        fromBanner: {
          "0%": {backgroundPosition: "-500px -500px"},
          "100%": {backgroundPosition: "-500px -700px"},
        },
        showBannerText: {
          "0%": {
            transform: "translateX(-500%) scale(4.5)",
            opacity: 0.6,
          },
          "50%": {
            transform: "translateX(500%) scale(4.5)",
            opacity: 0.6,
          },
          "75%": {
            transform: "translateX(-500%) scale(4.5)",
            opacity: 0,
            "text-shadow": "none",
            color: "transparent",
          },
          "100%": {
            transform: "translateX(0%) scale(1,1)",
            opacity: 1,
            color: "#ffffff",
          }
        }
      },
    },
  },
  plugins: [],
  variants: {
    fontSize: ["responsive", "hover", "group-hoover"],
  }, 
}

