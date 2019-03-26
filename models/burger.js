var orm = require("../config/orm.js");
//Uses the orm to specifically define the functions for the burgers table
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(setVals, condition, cb) {
        orm.updateOne("burgers", setVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;