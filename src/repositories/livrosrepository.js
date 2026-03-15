const db = require('../config/database.js')

exports.findAll = async () =>{
    let sql = "SELECT * FROM livros";
    const result = await db.query(sql);
    return result.rows;
}

exports.existsByTitleAndAutor = async (livro) => {
    let sql = "SELECT l.titulo FROM livros as l WHERE l.titulo = $1 AND l.autor = $2";
    const result = await db.query(sql, [livro.titulo,livro.autor]);
    return result.rows.length > 0;
}

exports.findById = async (id) =>{
    let sql = "SELECT * FROM livros WHERE id = $1";
    const result = await db.query(sql, [id])
    return result.rows[0];
}

exports.create = async (livro) => {
    const {titulo, autor} =livro;
    let sql = "INSERT INTO livros(titulo, autor) VALUES($1,$2) RETURNING *";
    const result = await db.query(sql, [titulo, autor]);
    return result.rows[0];
}

exports.update = async (livro) =>{
    const {id, titulo, autor} = livro;
    let sql = "UPDATE livros SET titulo = $1, autor = $2 WHERE id = $3 RETURNING *";
    console.log('sql', sql);
    const result = await db.query(sql,[titulo, autor, id]);
    console.log(result.rows);
    return result.rows[0];
}

exports.delete  =async (id) =>{
    let sql= "DELETE FROM livros WHERE id = $1 RETURNING *"
    const result = await db.query(sql, [id]);
    return result.rows[0];
}