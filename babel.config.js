module.exports = {
  sourceType: "unambiguous",
  presets: [
    ["@babel/preset-env", {
      targets: {
        browsers: ["last 2 versions"]
      },
      modules: false
    }],
    "@babel/preset-react"
  ]
}; 