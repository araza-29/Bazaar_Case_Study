const db = require("../Model")
const ProductMapping = db.productMapping

const reviewProductMapping = async(req, res) => {
    const ProductMappings = await ProductMapping.findAll({})
    res.json({code: 200, data: ProductMappings})
};

const reviewProductMappingByProductMappingID = async(req, res) => {
    const ProductMappings = await ProductMapping.findOne({where:{id:req.body.id}})
    res.json({code: 200, data: ProductMappings})
};

const createProductMapping = async (req, res) => {
    try {
        const { product_id, inventory_id, supplier_id } = req.body;

        const ProductMappings = await ProductMapping.create({
            product_id, inventory_id, supplier_id
        });

        res.json({ code: 200, data: ProductMappings });
    } catch (error) {
        console.error("Create Product Error:", error); // log to terminal
        res.status(500).json({ code: 500, message: error.message });
    }
};

const updateProductMapping = async(req, res) => {
    const ProductMappings = await ProductMapping.update(req.body, {where: {id: req.body.id }})
    res.json({code: 200, data: ProductMappings})
};

const deleteProductMapping = async(req, res) => {
    const ProductMappings = await ProductMapping.destroy({status: false},{where:{id:req.params.id}})
    res.json(200).send("product deleted !")
};

module.exports = {
    reviewProductMapping,
    reviewProductMappingByProductMappingID,
    deleteProductMapping,
    updateProductMapping,
    createProductMapping
}