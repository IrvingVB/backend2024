const express = require("express");

const app = express();

app.use(express.json());

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
  
  if(isNaN(+id)) {
  res.status(400).send({error: "El id debe ser número"});
  return
  };

  //console.log(typeof +id);
  //console.log(params);

  const usuario = usuarios.find((usuario) => usuario.id === +id);

  if(usuario === undefined){
    res.status(400).send({error: `El usuario con id ${id} no existe`});
    return;
  };
  
  res.status(200).send(usuario);

});

app.post("/usuarios",(req, res) => {
  const {nombre, apellidos, email} = req.body;

    // Validar que todos los campos estén presentes
    if (!nombre || !apellidos || !email) {
      res.status(404).send({ error: "Todos los campos (nombre, apellidos, email) son obligatorios" });
      return;
    }
  // Validar que el email no se repita
  const emailExistente = usuarios.find((usuario) => usuario.email === email);
  if (emailExistente) {
    res.status(400).send({ error: "El correo electrónico ya está registrado" });
    return;
  }
  
  usuarios.push({id: usuarios.length +1, nombre, apellidos, email});
  
  //console.log(req.body);
  res.status(201).send("El usuario se agregó correctamente");

});

app.put("/usuarios/:id", (req,res) => {
  const {nombre, apellidos, email} = req.body;

  const id = +req.params.id;

  if (!nombre || !apellidos || !email) {
    res.status(404).send({ error: "Todos los campos (nombre, apellidos, email) son obligatorios" });
    return;
  }

  if(isNaN(+id)) {
    res.status(400).send({error: "El id debe ser número"});
    return
    };
    
    const usuario = usuarios.find((usuario) => usuario.id === +id);
  
    if(usuario === undefined){
      res.status(400).send({error: `El usuario con id ${id} no existe`});
      return;
    };

  usuarios.forEach((usuario) => {
    if(usuario.id === id){
      usuario.nombre = nombre;
      usuario.apellidos = apellidos;
      usuario.email = email;
    } 
  })
  res.status(200).send("El usuario se actualizó correctamente");
});

app.patch("/usuarios/:id", (req,res) => { 
  
});

app.listen(3000, () => {
    console.log("Servidor coorriendo en http://localhost:3000")
});