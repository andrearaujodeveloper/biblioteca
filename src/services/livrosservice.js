const repo = require('../repositories/livrosrepository.js');
const apperror = require('../utils/apperror.js');

exports.findAll = async () => {
    return repo.findAll();
}

exports.create = async (dados) => {
    let livro = {titulo: dados.titulo, autor: dados.autor};
    validarcampo(livro.autor,"autor");
    validarcampo(livro.titulo,"titulo");
    await validarLivroCadastrado(livro);
    let livrocadastrado = await repo.create(livro);
    return livrocadastrado;  
}

exports.edit = async (dados) => {
    let livro = await repo.findById(dados.id);
    if(!livro){
        throw apperror('livro não encontradado', 400)
    }
    livro.titulo = dados.titulo || livro.titulo;
    livro.autor = dados.autor || livro.autor;
    livro = await repo.update(livro);
    return livro;
}

exports.delete = async (id) => {
    repo.delete(id);
    return;

}

async function validarLivroCadastrado(livro){
    let existe = await repo.existsByTitleAndAutor(livro);
    if(existe){
        throw apperror("Livros cadastrado anteriomente.", 409);
    }
    return;
}

function validarcampo(dado,nomecampo){
    if(!dado){
        throw apperror(`${nomecampo} é obrigatório!`)
    }
    return;
}

