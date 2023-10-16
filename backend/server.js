const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const dbName = 'Partytime';
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.json({message: "Rota de teste, será"});
});

app.listen(port, ()=>{
    console.log(`O backend está rodando na porta ${port}`);
});

//conexão mongodb
mongoose.connect(
    `mongodb://127.0.0.1:27017/${dbName}`, {
    useNewUrlParser : true,
    UseUnifiedTopology : true,
    serverSelectionTimeoutMS : 10000
    })