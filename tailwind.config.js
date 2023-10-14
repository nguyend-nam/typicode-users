/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#000000",
        "text-primary": "#1890ff",
        background: "#f5faff",
        "background-primary": "#335aa1",
        "background-secondary": "#ffffff",
        "background-secondary-hover": "#0000001a",
        border: "#d1d1d8",
        shadow: "#00000040",
      },
    },
  },
  plugins: [],
};
