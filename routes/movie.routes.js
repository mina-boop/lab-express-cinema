const router = require("express").Router();

router.get("/movies", (req, resp)=> res.render("views/movies.hbs"));