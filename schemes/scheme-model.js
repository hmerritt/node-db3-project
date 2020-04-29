const knex = require("knex");
const knexfile = require("../knexfile.js");
const db = knex(knexfile["development"]);

function find() {
    return db("schemes");
}

function findById(id) {}

function findSteps(id) {}

function add(scheme) {}

function update(changes, id) {}

function remove(id) {}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}
