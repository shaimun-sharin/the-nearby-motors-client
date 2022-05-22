module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        motortheme: {
          primary: "#FFB6C1",
          secondary: "#FFE4E1",
          accent: "#FFF0F5",
          neutral: "#D3D3D3",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
