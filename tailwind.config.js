/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-white": "#eee",
        "custom-black": "#444",
        "custom-blue": "#40A3FF",
        "custom-grey": "#D9D9D9",
      },
      fontFamily: {
        cookierun: ["CookieRunOTF"],
      },
    },
  },
  plugins: [],
};
