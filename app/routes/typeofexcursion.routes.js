module.exports = app => {
    const typeofexcursions = require("../controllers/typeofexcursion.controller.js");
  
    var router = require("express").Router();
  
  
    // Retrieve all Tutorials
    router.get("/type", typeofexcursions.findAll);
  
    app.use("/api", router);
  };