var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.selectAll(function(data) {
        var burgersObject = {
            burgers: data
        };
        res.render("index", burgersObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result){
        res.json({ id : result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: "true"
    }, condition, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

module.exports = router;