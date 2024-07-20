import { withUt } from "uploadthing/tw";

export default withUt({
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "#F5F0EA",
        secondry: "#4a264f",
        violet: "#673592",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        main: "#181a1b",
        secondry: "#F5F0EA",
        noor: "#4a264f",
        violet: "#673592",
      },
      borderColor: {
        main: "#4a264f",
        secondary: "#181a1b",
      },
      placeholderColor: {
        main: "#4a264f77",
      },
      caretColor: { main: "#4a264f" },
    },
  },
  plugins: [],
});
