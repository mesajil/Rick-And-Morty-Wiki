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
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                        msg: 'Must be a valid email'
                    },
                }
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
