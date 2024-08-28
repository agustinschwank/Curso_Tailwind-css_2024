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
      boxShadow: {
        header3D: "0px 1px 0px #000, 1px 2px 0px #000, 2px 3px 0px #000, 3px 4px 0px #000, 4px 4px 2px #000",
        boxPersonal1: "0px 0px 1px rgba(0,0,0,0.3), 0px 3px 7px rgba(0,0,0,0.3), 0px 1px 0px #fff inset, 0px -3px rgba(0,0,0,0.3) inset",
      },
      animation: {
        "spin-low": "spin 2s linear infinite",
        "from-below": "fromBelow 500ms linear",
        "from-Right": "fromRight 300ms linear",
        "bg-banner": "fromBanner 10s linear",
        "bg-showtext": "showBannerText 10s linear",
        "showicontop": "showIcon 300ms linear",
        "show-card-title": "showCardTitle 400ms linear",
        "show-card-description": "showCardDescription 400ms linear",
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
        },
        showIcon: {
          from: {transform: "translateY(-200%)"},
          to: {transform: "translateY(0%)"},
        },
        showCardTitle: {
          from: {transform: "translateY(-300%)"},
          to: {transform: "translateY(0%)"},
        },
        showCardDescription: {
          from: {transform: "translateX(-100%)"},
          to: {transform: "translateX(0%)"},
        }
      },
    },
  },
  plugins: [],
  variants: {
    animation: ["responsive", "hover", "group-hoover"],
    animate: ["responsive", "hover", "group-hoover"],
    fontSize: ["responsive", "hover", "group-hoover"],
    scale: ["responsive", "hover", "group-hoover"],
  }, 
}

