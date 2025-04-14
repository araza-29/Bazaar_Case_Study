const db = require("../Model")
const product = db.product
const category = db.category

const reviewProducts = async(req, res) => {
    try{
        const products = await product.findAll({})
        if(products){
            res.status(200).json({code: 200, data: products})
        }
        else {
            res.status(404).json({code: 404, data: "Products not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const reviewProductsByProductID = async(req, res) => {
    try{
        const products = await product.findOne({where:{id:req.body.id}})
        if(products){
            res.status(200).json({code: 200, data: products})
        }
        else {
            res.status(404).json({code: 404, data: "Products not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const reviewProductsByCategoryID = async(req, res) => {
    try{
        const products = await product.findAll({include: category, where:{category_id: req.body.category_id}})
        if(products){
            res.status(200).json({code: 200, data: products})
        }
        else {
            res.status(404).json({code: 404, data: "Products not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const createProduct = async (req, res) => {
    try {
        const products = await product.create({name: req.body.name, category_id: req.body.category_id });

        res.json({ code: 200, data: products });
    } catch (error) {
        console.error("Create Product Error:", error); 
        res.status(500).json({ code: 500, message: error.message });
    }
};

const updateProduct = async(req, res) => {
    try{
        const products = await product.update(req.body, {where: {id: req.body.id }})
        if(products){
            res.status(200).json({code: 200, data: products})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const deleteProduct = async(req, res) => {
    try{
        const products = await product.destroy({status: false},{where:{id:req.params.id}})
        if(products){
            res.status(200).json({code: 200, data: products})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
    
};

module.exports = {
    reviewProducts,
    reviewProductsByProductID,
    reviewProductsByCategoryID,
    deleteProduct,
    updateProduct,
    createProduct
}