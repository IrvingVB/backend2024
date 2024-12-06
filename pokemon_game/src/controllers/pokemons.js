const {request, response} = require('express');
const pool = require('../db/connection');
const pokemonsModel = require('../models/pokemons');


const getAllPokemons = async (req = request, res = response) => {
 let conn;
 try{
    conn = await pool.getConnection();
    const pokemons = await conn.query(pokemonsModel.getAll);
    res.send(pokemons);
 }catch(err) {
    res.status(500).json(err);
    return;
 }finally{
    if (conn) conn.end();
 }
}

const getPokemonById = async (req = Request, res = Response) => {
    
}

const get3RandomPokemons = async (req = Request, res = Response) => {
    
}

const createPokemon = async (req = Request, res = Response) => {
    
}

const updatePokemon = async (req = Request, res = Response) => {
    
}

const deletePokemon = async (req = Request, res = Response) => {
    
}

module.exports ={
 getAllPokemons,
 getPokemonById,
 get3RandomPokemons,
 createPokemon,
 updatePokemon,
 deletePokemon
 
}
