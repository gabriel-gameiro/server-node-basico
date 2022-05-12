module.exports = (app) => {

    // Formula padrao para endpoints
    app.get('/', (req, res) => {
        res.status(200).send("Server rodando!");
    });

    app.get('/teste', (req, res) => {
        // #swagger.tags = ['Teste']
        // #swagger.description = 'Endpoint para teste do servidor.'
        // #swagger.parameters['nome'] = { description: 'Nome do usuário que executa o teste.', default:'User' }


        const nome = req.query.nome || "Pessoa anônima";

        res.status(200).send(`Olá ${nome}. <br>Servidor testado com sucesso!`);
    });

}