const db = require("../Model")
const product = db.product

const reviewInventorys = async(req, res) => {
    const products = await product.findAll({})
    res.json({code: 200, data: products})
};

const reviewInventoryByInventoryID = async(req, res) => {
    const products = await product.findOne({where:{id:req.body.id}})
    res.json({code: 200, data: products})
};

const createInventory = async (req, res) => {
    try {
        const { name, stock, price, supplier_id } = req.body;

        const products = await product.create({
            name,
            stock,
            price,
            supplier_id
        });

        res.json({ code: 200, data: products });
    } catch (error) {
        console.error("Create Product Error:", error); // log to terminal
        res.status(500).json({ code: 500, message: error.message });
    }
};

const updateInventory = async(req, res) => {
    const products = await product.update(req.body, {where: {id: req.body.id }})
    res.json({code: 200, data: products})
};

const deleteInventory = async(req, res) => {
    const products = await product.destroy({status: false},{where:{id:req.params.id}})
    res.json(200).send("product deleted !")
};

module.exports = {
    reviewInventorys,
    reviewInventoryByInventoryID,
    deleteInventory,
    updateInventory,
    createInventory
}