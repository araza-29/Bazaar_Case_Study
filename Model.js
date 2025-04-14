const config = require('./config')
const {Sequelize,DataTypes} = require('sequelize')

const sequelize = new Sequelize (
    config.DB,
    config.USER,
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
db.user = require('./Models/User')(sequelize,DataTypes)
db.store = require('./Models/Store')(sequelize,DataTypes)
db.inventory = require('./Models/Inventory')(sequelize,DataTypes)
db.category = require('./Models/Category')(sequelize,DataTypes)
db.productMapping = require('./Models/ProductMapping')(sequelize,DataTypes)
db.role = require('./Models/Role')(sequelize,DataTypes)

// Product
db.supplier.hasMany(db.product,{
    foreignKey:'supplier_id'
})
db.product.belongsTo(db.supplier,{ foreignKey:'supplier_id' })

//StockLog
db.product.hasMany(db.stockLog,{
    foreignKey:'product_id'
})
db.stockLog.belongsTo(db.product,{ foreignKey:'product_id' })

module.exports = db