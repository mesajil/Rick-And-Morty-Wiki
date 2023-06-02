const { DataTypes } = require('sequelize');

const STATUS = ['Alive', 'Dead', 'unknown']
const GENDER = ['Female', 'Male', 'Genderless', 'unknown']

module.exports = (database) => {
    database.define(
        'Character', // Instance name
        { // Model attributes
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM(STATUS),
                allowNull: false,
            },
            species: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: "",
            },
            gender: {
                type: DataTypes.ENUM(GENDER),
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        { // Other model options

        }
    )
}

