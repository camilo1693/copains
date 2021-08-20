const express = require('express');
const app = express();
const fs = require("fs");

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    return res.send({
        success: true,
        message: "funciona"
    });
});

app.get("/juntos", (req, res) => {
    return res.send({
        success: true,
        message: "juntos podemos"
    })
})

app.post("/usuarios", (req, res) => {

    let {name, email, contraseña} = req.body;
    
    let usuario = {
        nombre: name,
        email: email,
        contraseña: contraseña
    };

    fs.writeFile(`./data/${Date.now()}.json`, JSON.stringify(usuario), (error) => {
        if(error){
            return res.send({
                success: false,
                message: error
            });
        }

        return res.send("creado correctamente");
    });
});

app.post("/mensages", (req, res) => {

    let {name, text} = req.body;
    
    let mensage = {
        nombre: name,
        texto: text
    };

    fs.writeFile(`./data/${Date.now()}.json`, JSON.stringify(mensage), (error) => {
        if(error){
            return res.send({
                success: false,
                message: error
            });
        }

        return res.send("creado correctamente");
    });
});

app.post("/juegos", (req, res) => {

    let {juego, usuario} = req.body;
    
    let play = {
        juegos: juego,
        nombre: usuario,
        
    };

    fs.writeFile(`./data/${Date.now()}.json`, JSON.stringify(play), (error) => {
        if(error){
            return res.send({
                success: false,
                message: error
            });
        }

        return res.send("creado correctamente");
    });
});

app.post("/chat", (req, res) => {

    let {name, juego} = req.body;
    
    let chats = {
        nombre: name,
        juegos: juego
    };

    fs.writeFile(`./data/${Date.now()}.json`, JSON.stringify(chats), (error) => {
        if(error){
            return res.send({
                success: false,
                message: error
            });
        }

        return res.send("creado correctamente");
    });
});

app.listen(5000, () => {
    console.log("el servidor funciona en el puerto 5000")
});