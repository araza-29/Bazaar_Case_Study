const db = require("../Model")
const ProductMapping = db.productMapping

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

const createProductMapping = async (req, res) => {
    try {
        const ProductMappings = await ProductMapping.create({product_id: req.body.product_id, inventory_id: req.body.inventory_id, supplier_id: req.body.supplier_id, retail_price: req.body.retail_price, purchase_price: req.body.purchase_price});

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
    deleteProductMapping,
    updateProductMapping,
    createProductMapping
}