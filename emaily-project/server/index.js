const express = require('express');
const app = express() // gera uma nova aplicacao

app.get('/',(req,res) => {
    res.send({ hi: 'there' });
});

app.listen(5000);
// acessar localhost:5000 no navegador para ver o resultado

