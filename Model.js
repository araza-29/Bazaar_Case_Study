const config = require('./config')
const {Sequelize,DataTypes} = require('sequelize')

const sequelize = new Sequelize (
    config.DB,
    config.employee,
    config.PASSWORD, {
        host:config.HOST,
        dialect:config.dialect
    },
)

sequelize.authenticate()
.then(()=>{
    console.log("connected")
})
.catch(err=>{
    console.log(err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.sequelize.sync({ force: true })
.then(()=>{
    console.log("re-sync done!")
})

db.product = require('./Models/Product')(sequelize,DataTypes)
db.stockLog = require('./Models/StockLog')(sequelize,DataTypes)
db.supplier = require('./Models/Supplier')(sequelize,DataTypes)
db.employee = require('./Models/Employee')(sequelize,DataTypes)
db.store = require('./Models/Store')(sequelize,DataTypes)
db.inventory = require('./Models/Inventory')(sequelize,DataTypes)
db.category = require('./Models/Category')(sequelize,DataTypes)
db.productMapping = require('./Models/ProductMapping')(sequelize,DataTypes)
db.role = require('./Models/Role')(sequelize,DataTypes)

// Product
db.category.hasMany(db.product,{
    foreignKey:'category_id'
})
db.product.belongsTo(db.category,{ foreignKey:'category_id' })

//StockLog
db.product.hasMany(db.stockLog,{
    foreignKey:'product_id'
})
db.stockLog.belongsTo(db.product,{ foreignKey:'product_id' })

db.employee.hasMany(db.stockLog,{
    foreignKey:'verifiedBy'
})
db.stockLog.belongsTo(db.employee,{ foreignKey:'verifiedBy' })

db.employee.hasMany(db.stockLog,{
    foreignKey:'orderedBy'
})
db.stockLog.belongsTo(db.employee,{ foreignKey:'orderedBy' })

//Employee

db.role.hasMany(db.employee,{
    foreignKey:'role_id'
})
db.role.belongsTo(db.employee,{ foreignKey:'role_id' })


//Product
db.category.hasMany(db.product,{
    foreignKey:'category_id'
})
db.product.belongsTo(db.category,{ foreignKey:'category_id' })


//Inventory

db.store.hasMany(db.inventory,{
    foreignKey:'store_id'
})
db.inventory.belongsTo(db.store,{ foreignKey:'store_id' })


//ProductMapping

db.product.hasMany(db.productMapping,{
    foreignKey:'product_id'
})
db.productMapping.belongsTo(db.product,{ foreignKey:'product_id' })

db.supplier.hasMany(db.productMapping,{
    foreignKey:'supplier_id'
})
db.productMapping.belongsTo(db.supplier,{ foreignKey:'supplier_id' })

db.inventory.hasMany(db.productMapping,{
    foreignKey:'inventory_id'
})
db.productMapping.belongsTo(db.inventory,{ foreignKey:'inventory_id' })

module.exports = db