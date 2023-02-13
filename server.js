require("dotenv").config();
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const allRoutes = require("./controllers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const { Owner, Customer, Reservation,Menu,Dish } = require("./models");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 2,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
// Static directory
app.use(express.static("public"));

app.use(allRoutes);
app.get("/sessions", (req, res) => {
  res.json(req.session);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
