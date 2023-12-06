import { where } from "sequelize";
import BlogModel from "../models/BlogModel.js";

//** TODOD EL CRUD VA AQUI **/

//MOSTRASR TODOS LOS REGISTROS
export const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await BlogModel.findAll()
        res.json(usuarios)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//MOSTRAR UN REGISTRO 
export const getUsuario = async (req, res) => {
    try {
        const usuario = BlogModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(usuario)

    } catch (error) {
        res.json( {message: error.message} )
    }
}

//CREAR UN REGISTRO
export const createUsuario = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//UPDATE USUARIO

export const updateUsuario = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: {id: req.params.id }
        })
        res.json({
            "message": "actualizado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
// ELIMINAR UN REGISTRO 
export const deleteUsuario = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message": "eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
