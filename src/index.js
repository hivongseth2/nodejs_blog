const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const route = require("./routes");
const methodOverride = require("method-override");
const db = require("./config/db/index");

//connect to DB
db.connect();

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

// app.use(morgan("combined"));

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",

    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
