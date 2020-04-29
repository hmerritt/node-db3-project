const knex = require("knex");
const knexfile = require("../knexfile.js");
const db = knex(knexfile["development"]);

function find() {
    return db("schemes");
}

function findById(id) {
    return db("schemes").where("id", id);
}

function findSteps(id) {
    return db("schemes")
        .join("steps", "steps.scheme_id", "schemes.id")
        .where("schemes.id", id)
        .select("steps.step_number", "schemes.scheme_name", "steps.instructions")
        .orderBy("step_number");
}

function add(scheme) {
    return db("schemes").insert(scheme);
}

function update(changes, id) {
    return db("schemes")
        .where({ id: id })
        .update(changes);
}

function remove(id) {
    return db("schemes")
        .where({ id: id })
        .del();
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}
