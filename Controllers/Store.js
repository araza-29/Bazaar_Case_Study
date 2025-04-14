const db = require("../Model")
const store = db.store

const reviewStore = async(req, res) => {
    try{
        const stores = await store.findAll({where:{user_id: req.body.id}})
        if(stores){
            res.status(200).json({code: 200, data: stores})
        }
        else {
            res.status(404).json({code: 404, data: "Stores not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const reviewStoreByStoreID = async(req, res) => {
    try{
        const stores = await store.findOne({where:{id:req.body.id}})
        if(stores){
            res.status(200).json({code: 200, data: stores})
        }
        else {
            res.status(404).json({code: 404, data: "Stores not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const createStore = async (req, res) => {
    try {
        const stores = await product.create({name: req.body.name, location: req.body.location});

        res.json({ code: 200, data: stores });
    } catch (error) {
        console.error("Create Product Error:", error); // log to terminal
        res.status(500).json({ code: 500, message: error.message });
    }
};

const updateStores = async(req, res) => {
    try{
        const stores = await store.update(req.body, {where: {id: req.body.id }})
        if(stores){
            res.status(200).json({code: 200, data: stores})
        }
        else {
            res.status(404).json({code: 404, data: "Stores not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const deleteStores = async(req, res) => {
    try{
        const stores = await store.destroy({status: false},{where:{id:req.params.id}})
        if(stores){
            res.status(200).json({code: 200, data: stores})
        }
        else {
            res.status(404).json({code: 404, data: "Stores not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

module.exports = {  
    reviewStore,
    reviewStoreByStoreID,
    deleteStores,
    updateStores,
    createStore
}