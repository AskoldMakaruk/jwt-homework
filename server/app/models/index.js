const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    "jwt-node", "user", "password", {
        dialect: "sqlite",
        storage: "./database.db"
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);

module.exports = db;