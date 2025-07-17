const express = require("express");
const router = express.Router();
const conModel = require("../modles/index");
var insertModel = require("../modles/insert");
const path = require("path");
var picPath = path.resolve(__dirname, "public");
router.use(express.static(picPath));
function checkEmail(req, res, next) {
  var email = req.body.email;
  var check = conModel.findOne({ email: email });
  check.exec((err, data) => {
    if (data) {
      return res.render("index", {
        title: "vakil singh",
        user: fname1,
        msg: "Email Already Exists ! try again.",
      });
    }
    next();
  });
}
router.get("/", async (req, res, next) => {
  const data = await insertModel.find({});
  res.render("certificate", { title: "Vakil Singh", msg: "", user: data });
});
router.post("/", checkEmail, async (req, res, next) => {
  const { name, email, subject, project } = req.body;
  var conDetail = new conModel({
    name,
    email,
    subject,
    project,
  });
  const data = await conDetail.save();
  const newdata = await insertModel.find({});
  res.render("certificate", {
    title: "Vakil Singh",
    msg: "Your Record Saved Successfully",
    user: newdata,
  });
});
module.exports = router;
