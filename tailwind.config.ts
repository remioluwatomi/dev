import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./styles/**/*.css"], 
  theme: {
    screens: {
      lg: "991px",
      md: "768px",
      sm: "479px",
    },
    extend: {
        fontFamily: {
            custom: ["RoslindaleCondensedTesting", "sans-serif"]
        }
    },
  },
  plugins: [],
};

export default config;
