const Course = require("../models/Course");
const { multiMongooseToObj } = require("../../util/mongoose");
class MeController {
  //me/stored/courses
  storeCourses(req, res, next) {
    Course.find()
      .then((course) => {
        res.render("me/stored-courses", {
          courses: multiMongooseToObj(course),
        });
      })
      .catch(next);
  }

  //me/trash/courses
  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true })
      .then((course) => {
        res.render("me/trash-courses", {
          courses: multiMongooseToObj(course),
        });
      })
      .catch(next);
  }
}
module.exports = new MeController();
