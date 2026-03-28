jest.mock('../repositories/livrosrepository.js');
const repo = require('../repositories/livrosrepository.js');
const service =require('./livrosservice.js');

const casos = [
    ["autor é obrigatório!", {titulo: "livro"}],
    ["titulo é obrigatório!", {autor: "autor"}]
] 

test.each(casos)("deve lançar exception ao validar dados de entrada", async (expected, dados)=>{
    try{
         await service.create(dados)
    }catch(error){
        expect(error.message).toMatch(expected);
    }
})

test('deve lançar exception livro já cadastrado', async () => {
    const dados = {titulo:'titulo', autor:'autor'}
    repo.existsByTitleAndAutor.mockResolvedValue(true);
    await expect(service.create(dados))
    .rejects
    .toThrow({message:"Livros cadastrado anteriomente.", status: 409});
    
});

test('deve criar registro de um livro', async() => {
    const dados = {titulo:'titulos', autor:'autor'};
    const livro = {id:1, titulo:'titulo', autor:'autor'};
    repo.existsByTitleAndAutor.mockResolvedValue(false);
    repo.create.mockResolvedValue(livro);
    
    const res= await service.create(dados);

    expect(res).toMatchObject(livro)
})