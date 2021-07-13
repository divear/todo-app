const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.NAME,
    password: process.env.password,
    host: "localhost",
    port: 5432,
    database: "todo"
});

module.exports = pool;