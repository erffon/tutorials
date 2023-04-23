exports.getAbout = (req, res, next) => {
  res.render("about", { title: "About" });
};
