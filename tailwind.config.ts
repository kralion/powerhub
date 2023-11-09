import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: "#30FFFF",
        primary: "#6053ED",
        "dark-primary": "#424242",
        "dark-secondary": "#525252",
        "dark-tertiary": "#212121",
        "dark-quaternary": "#2D2D2D",
      },
    },
  },
  plugins: [],
} satisfies Config;
