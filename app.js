const express = require('express');
const bodyParse = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());

app.get("/", (req, res) => {
    res.send({msg: "Hola, estamos aquí"});
});

app.post("/welcome", (req, res) => {
    const { username} = req.body;

    res.status(200).send({msg: `Hola, ${username}`});
});

app.listen(PORT, () => {
    console.log(`Tu servidor esta listo en el puerto ${PORT}`);
})