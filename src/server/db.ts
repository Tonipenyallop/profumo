import dotenv from 'dotenv'

dotenv.config()

const config = process.env.MODE || "development";
const knexfile = require("../../knexfile");
// const db = knexfile[config];
const database = knexfile[config];
module.exports = require("knex")(database);
