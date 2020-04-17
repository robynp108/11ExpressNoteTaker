const notes = require("../db/db.json");
const { v1: uuidv1 } = require("uuid");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(notes);
      });  

    app.post("/api/notes", function(req, res) {
        console.log(req.body);
        req.body.id = uuidv1();
        notes.push(req.body);
        // TODO write notes back to db.json
        res.json(req.body);
    })
}