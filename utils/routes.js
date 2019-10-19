const Pets = require("../controllers/pets");

module.exports = function(app) {
    app.get("/api/pet", Pets.getAll);
    app.post("/api/pet", Pets.create);
    app.get("/api/pet/:_id", Pets.getOne);
    app.put("/api/pet/:_id", Pets.like);
    app.put("/api/pet/:_id/edit", Pets.update);
    app.delete("/api/pet/:_id", Pets.delete);
    
}