import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlack: "#101D25",
        offBlack: "#232D36",
        mainMint: "#00B09C",
        mainGray: "#9FA2A7",
        offWhite: "#F5F5F5",
        lightMint: "#3DD598",
        dangerRed: "#FF5A5F",
        coolBlue: "#3B82F6",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
