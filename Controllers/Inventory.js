const db = require("../Model")
const inventory = db.inventory

const reviewInventorys = async(req, res) => {
    try{
        const inventorys = await inventory.findAll({})
        if(inventorys){
            res.status(200).json({code: 200, data: inventorys})
        }
        else {
            res.status(404).json({code: 404, data: "Inventorys not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const reviewInventoryByInventoryID = async(req, res) => {
    try{
        const inventorys = await inventory.findOne({where:{id:req.body.id}})
        if(inventorys){
            res.status(200).json({code: 200, data: inventorys})
        }
        else {
            res.status(404).json({code: 404, data: "Inventorys not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const createInventory = async (req, res) => {
    try {
        const inventorys = await inventory.create({name: req.body.name, address: req.body.address, store_id: req.body.store_id});

        res.json({ code: 200, data: inventorys });
    } catch (error) {
        res.status(500).json({ code: 500, message: error.message });
    }
};

const updateInventory = async(req, res) => {
    try{
        const inventorys = await inventory.update(req.body, {where: {id: req.body.id }})
        if(inventorys){
            res.status(200).json({code: 200, data: inventorys})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const deleteInventory = async(req, res) => {
    try{
        const inventorys = await inventory.destroy({status: false},{where:{id:req.params.id}})
        if(inventorys){
            res.status(200).json({code: 200, data: inventorys})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

module.exports = {
    reviewInventorys,
    reviewInventoryByInventoryID,
    deleteInventory,
    updateInventory,
    createInventory
}