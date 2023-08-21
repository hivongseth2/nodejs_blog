const Course = require("../models/Course");
const { multiMongooseToObj } = require("../../util/mongoose");
class SiteController {
  // [GET] /home
  async index(req, res, next) {
    // res.render('home');
    // =============================
    // try {
    //   const courses = await Course.find({});
    //   res.json(courses);
    // } catch (err) {
    //   res.status(400).json({ error: "ERROR!!!" });
    // }
    // =============
    Course.find({})
      .then((courses) => {
        // res.json(courses);
        // courses = multiMongooseToObj(courses)
        res.render("home", { courses: multiMongooseToObj(courses) });
      })
      .catch((err) => next(err));
  }

  //GET /news/:slug
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
