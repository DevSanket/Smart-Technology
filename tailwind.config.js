module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      maxWidth: {
        'sm': '350px',
      },
      center: true,
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      'sm': '300px',
      'md': '600px',
      'lg': '1440px',
      'xl': '1280px',
      '2xl': '1536px',
      tablet: "1050px",
    },
    extend: {
      colors: {
        dominant: "#FFF",
        complement: "#F4F4F4",
        "ascent-1": "#E31E25",
        "ascent-2": "#3A3285",
        "ascent-3": "#CBC5FF",
      },
      backgroundImage: {
        "career-pattern": "url('/public/assets/careers/img-1.jpg')",
      },
    },
  },
  plugins: [],
};