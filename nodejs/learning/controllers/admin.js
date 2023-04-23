exports.getAbout = (req, res, next) => {
  res.render("about", { title: "About" });
};
exports.getProducts = (req, res) => {
  res.render("products", { title: "Products Page" });
};
