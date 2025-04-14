const db = require("../Model")
const ProductMapping = db.productMapping
const inventory = db.inventory
const product = db.product

ProductMapping.addHook('afterUpdate', async (ProductMapping, options) => {
    const changed = ProductMapping.changed();
  
    if (changed.includes('stock')) {
      await StockLog.create({
        inventory_id: inventory.id,
        product_id: inventory.product_id,
        stock: inventory.stock,
        details: "stock_in",
        type: inventory.stock > inventory._previousDataValues.stock ? 'stock_in' : 'stock_out',
        timestamp: new Date()
      });
    }
  });

const reviewProductMapping = async(req, res) => {
    try{
        const ProductMappings = await ProductMapping.findAll({})
        if(ProductMappings){
            res.status(200).json({code: 200, data: ProductMappings})
        }
        else {
            res.status(404).json({code: 404, data: "ProductMappings not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const reviewProductMappingByProductMappingID = async(req, res) => {
    try{
        const ProductMappings = await ProductMapping.findOne({where:{id:req.body.id}})
        if(ProductMappings){
            res.status(200).json({code: 200, data: ProductMappings})
        }
        else {
            res.status(404).json({code: 404, data: "ProductMappings not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const reviewStocksOfProductInInventory = async(req, res) => {
    try{
        const ProductMappings = await ProductMapping.findAll({
            attributes: [
            'inventory_id',
            'product_id',
            [Sequelize.fn('SUM', Sequelize.col('stock')), 'total_stock']
        ],
        where:{inventory_id: req.body.inventory_id},
        group: ['inventory_id', 'product_id']})

        if(ProductMappings){
            res.status(200).json({code: 200, data: ProductMappings})
        }
        else {
            res.status(404).json({code: 404, data: "ProductMappings not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const reviewStocksOfProductInStore = async(req, res) => {
    try{
        const ProductMappings = await ProductMapping.findAll({
            include: [{model: inventory, where:{store_id: req.body.store_id}, attributes: ['store_id']}],
            attributes: [
            [Sequelize.col('inventory.store_id'), 'store_id'],
            'product_id',
            [Sequelize.fn('SUM', Sequelize.col('stock')), 'total_stock']
        ],
        group: ['inventory.store_id', 'product_id']})

        if(ProductMappings){
            res.status(200).json({code: 200, data: ProductMappings})
        }
        else {
            res.status(404).json({code: 404, data: "ProductMappings not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const reviewProductsInInventory = async(req, res) => {
    try{
        const ProductMappings = await ProductMapping.findAll({
            include: [{model: product, attributes:['name'] }],
            include: [{model: inventory, where:{store_id: req.body.store_id}, attributes: []}],
            attributes: [
            [Sequelize.col('inventory.store_id'), 'store_id'],
            'product_id',

            [Sequelize.fn('SUM', Sequelize.col('stock')), 'total_stock']
        ],
        group: ['inventory.store_id', 'product_id']})

        if(ProductMappings){
            res.status(200).json({code: 200, data: ProductMappings})
        }
        else {
            res.status(404).json({code: 404, data: "ProductMappings not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const createProductMapping = async (req, res) => {
    try {
        const ProductMappings = await ProductMapping.create({product_id: req.body.product_id, inventory_id: req.body.inventory_id, supplier_id: req.body.supplier_id, retail_price: req.body.retail_price, purchase_price: req.body.purchase_price, stock: req.body.stock});

        res.json({ code: 200, data: ProductMappings });
    } catch (error) {
        console.error("Create Product Error:", error); // log to terminal
        res.status(500).json({ code: 500, message: error.message });
    }
};

const updateProductMapping = async(req, res) => {
    try{
        const ProductMappings = await ProductMapping.update(req.body, {where: {id: req.body.id }})
        if(ProductMappings){
            res.status(200).json({code: 200, data: ProductMappings})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const deleteProductMapping = async(req, res) => {
    try{
        const ProductMappings = await ProductMapping.destroy({status: false},{where:{id:req.params.id}})
        if(ProductMappings){
            res.status(200).json({code: 200, data: ProductMappings})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

module.exports = {
    reviewProductMapping,
    reviewProductMappingByProductMappingID,
    reviewProductsInInventory,
    reviewStocksOfProductInInventory,
    reviewStocksOfProductInStore,
    deleteProductMapping,
    updateProductMapping,
    createProductMapping
}