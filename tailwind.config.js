/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#5454C0",
        blackHigh:"#272730",
        paragraph:"#555568",
        bgDarkMode:"#121224",
        blackLow:"#A0A1BB",
        blackMedium:"#555568",
        blackHighEmp:"#272730",
        neutralColorsBlack:'#181A20',
        cardBorder:"#CDD2F0",
        sectionParagraph: '#A0A1BB',
        primaryTwoHundread:"#CDD2F0",
        primaryThreeHundread:"#828ED8",
        primaryFiveHundread:"#5454C0",
        primaryEightHundread:"#393672",
        primaryNineHundread:"#282546",
        nutralColorNineHundread:"#171727",
        whiteMedium:"#EEEEF4",
        neutralColorsBlack:"#181A20"
      },
      spacing: {},
      fontFamily: {
        "DmSans": "'DM Sans',sans-serif",
      },
      fontSize: {
        xl: "20px",
        inherit: "inherit",
      },
    },
  },
  plugins: [require("daisyui")],
}