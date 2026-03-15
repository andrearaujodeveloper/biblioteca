const {Pool}= require('pg');

const pool = new Pool({
    host:'localhost',
    port:5432,
    user:'api_user',
    password:'api_password',
    database:'minha_api'
})

module.exports = pool;
