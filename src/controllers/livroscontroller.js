const livrosservice = require('../services/livrosservice.js');

exports.findAll = async (req, res) => {
    let livros = await livrosservice.findAll();
    return res.status(200).json(livros);
}

exports.create = async (req, res) => {
        const livrocadastrado = await livrosservice.create(req.body);
        if(livrocadastrado===true){
            return res.status(400).json("livro já cadastrado.");    
        }
        return res.status(201).json(livrocadastrado)

}

exports.edit = async (req, res) => {
    let dados = {id: req.body.id, titulo: req.body.titulo, autor: req.body.autor}
    let livro = await livrosservice.edit(dados);
    return res.status(200).json(livro); 
}

exports.delete = async (req,res) =>{
    await livrosservice.delete(req.body.id);
    return res.status(204).json("no content");
}