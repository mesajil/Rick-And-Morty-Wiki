const { DataTypes } = require('sequelize');


module.exports = (database) => {
    database.define(
        'User', // Instance name
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
                defaultValue: "",
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                isEmail: true,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        { // Other model options

        }
    )
}
