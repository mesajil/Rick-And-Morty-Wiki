const { Sequelize } = require('sequelize')
const UserModel = require('./src/models/User')
const CharacterModel = require('./src/models/Character')

require('dotenv').config()
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env;

// Connection to a database

const database = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    { logging: false, }
)

// Define models
UserModel(database)
CharacterModel(database)


// Associations
const { User, Character } = database.models;
User.belongsToMany(Character, { through: 'user_favorite' })
Character.belongsToMany(User, { through: 'user_favorite' })

module.exports = {
    database,
    ...database.models,
};

