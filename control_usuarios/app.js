const express = require("express");

const app = express();

const usuarios = [
  { id: 1,
    nombre: "Irving",
    apellidos: "Vital",
    email: "irvingenrique164@gmail.com",
  },

  { id: 2,
    nombre: "Sergio",
    apellidos: "Cervantes",
    email: "cervantes2000@gmail.com",
  },
];

app.get("/usuarios",(req,res)=>{
    
  res.status(200).send(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
  const {id} = req.params;
  
  //console.log(params);

  const usuario = usuarios.find((usuario) => usuario.id === +id);
  
  res.status(200).send(usuario);

});

app.listen(3000, () => {
    console.log("Servidor cooriendo en http://localhost:3000")
});