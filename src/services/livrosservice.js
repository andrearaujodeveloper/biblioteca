const repo = require('../repositories/livrosrepository.js');

exports.findAll = async () => {
    return repo.findAll();
}

exports.create = async (dados) => {
    let livro = {titulo: dados.titulo, autor: dados.autor};
    let existe = await repo.existsByTitleAndAutor(livro);
    if(existe){
        console.log('Livros já existe');
        return existe;
    }
    let livrocadastrado = await repo.create(livro);
    return livrocadastrado;
}

exports.edit = async (dados) => {
    let livro = await repo.findById(dados.id);
    livro.titulo = dados.titulo || livro.titulo;
    livro.autor = dados.autor || livro.autor;
    livro = await repo.update(livro);
    return livro;

}

exports.delete = async (id) => {
    repo.delete(id);
    return;

}

