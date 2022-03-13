const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(bodyParser.json())

//array com nomes de alguns persoangens de anime
const character = Array('Naruto','Levi','Sasuke','Tanjiro');

//exibir todos os nomes
app.get('/character', (req,res) => {
    return res.json({character});
});
//exibir por id
app.get('/character/:id', (req,res) => {
    const {id} = req.params;
    return res.json(character[id]);
});
//adicionar
app.post('/character', (req,res) => {
    const {name} = req.body;
    character.push(name);
    return res.json({character});
});
//atualizar
app.put('/character/:id', (req,res) => {
    const {id} = req.params;
    const {name} = req.body;
    character[id] = name;
    return res.json({character});
})
//deleta
app.delete('/character/:id', (req,res) => {
    const {id} = req.params;
    character.splice(id,1);
    return res.json({message:'Apagado com sucesso'})
});
app.listen(8080, () =>{
    console.log('Servidor rodando...');
})