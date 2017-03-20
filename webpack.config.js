module.exports = {
  entry: "./js/app.js", //entry point, could be something other than 'app.js' file. Needs to be in the parent directory.
  output: {
    path: __dirname, //parent directory
    filename: "public/bundle.js"
  },
  watch: true,
  devtool: "source-map",
}
