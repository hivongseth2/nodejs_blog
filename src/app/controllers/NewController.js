class NewController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    //GET /news/:slug
    show(req, res) {
        res.send('Detail news');
    }
}
module.exports = new NewController();
