module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#05828C",
          secondary: "#05828C",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    
    ],
  },
  plugins: [
    require("daisyui", 'tw-elements/dist/plugin')
  
  
  ],
 

}
// module.exports = {
//   content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
//   plugins: [
//     require('tw-elements/dist/plugin')
//   ]
// }