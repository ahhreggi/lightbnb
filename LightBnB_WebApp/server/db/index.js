const { Pool } = require("pg");

const pool = new Pool({
  user: "ahhreggi",
  password: "123",
  port: "5432",
  host: "localhost",
  database: "lightbnb"
});

module.exports = {
  query: (queryString, queryParams) => {
    return pool.query(queryString, queryParams)
  }
};