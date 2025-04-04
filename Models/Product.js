const Sequelize = require('sequelize')
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('prodcut', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        supplier_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
          }
    },
    {
        sequelize,
        tableName: 'product',
        timestamps: true
    })
}