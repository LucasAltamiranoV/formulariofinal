import { Sequelize } from "sequelize";

const db = new Sequelize('registrousuario', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;