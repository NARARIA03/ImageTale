/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-white": "#f2f2f2",
        "custom-black": "#444",
        "custom-skyblue": "#CCE4FB",
        "custom-blue": "#40A3FF",
        "custom-deepblue": "#2C73FF",
        "custom-grey": "#D9D9D9",
      },
      fontFamily: {
        cookierun: ["CookieRunOTF"],
      },
    },
  },
  plugins: [],
};
