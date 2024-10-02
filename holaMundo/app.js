//import { otromensaje } from "./hola";

//const {otromensaje}=require("./hola")

//console.log(otromensaje)

const tareas = [
    {
        nombre: "Estudiar para el examen de Backend",
        Fecha: "2024-09-23",
        hecho: false
    },
    {
    nombre: "Ir de compras",
        Fecha: "2024-09-22",
        hecho: false
    },
    ];
    
    const tareasPorRealizar = tareas.filter(tarea => !tarea.hecho);
    console.log(tareasPorRealizar)
  
