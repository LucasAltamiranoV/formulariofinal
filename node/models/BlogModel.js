//importar conexion a base de datos 

import db from "../database/db.js";

import { DataTypes } from "sequelize";

const BlogModel = db.define('usuarios', {
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    id: { type: DataTypes.INTEGER },
    direccion: { type: DataTypes.TEXT },
    edad: { type: DataTypes.INTEGER },
    correo: { type: DataTypes.STRING },
})

export default BlogModel;