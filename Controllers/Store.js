const db = require("../Model")
const store = db.store

const reviewStore = async(req, res) => {
    const stores = await store.findAll({where:{user_id: req.body.id}})
    res.json({code: 200, data: stores})
};

const reviewStoreByStoreID = async(req, res) => {
    const stores = await store.findOne({where:{id:req.body.id}})
    res.json({code: 200, data: stores})
};

const createStore = async (req, res) => {
    try {
        const { name, Location, owner_id} = req.body;

        const stores = await product.create({
            name,
            Location,
            owner_id
        });

        res.json({ code: 200, data: stores });
    } catch (error) {
        console.error("Create Product Error:", error); // log to terminal
        res.status(500).json({ code: 500, message: error.message });
    }
};

const updateStores = async(req, res) => {
    const stores = await store.update(req.body, {where: {id: req.body.id }})
    res.json({code: 200, data: stores})
};

const deleteStores = async(req, res) => {
    const stores = await store.destroy({status: false},{where:{id:req.params.id}})
    res.json(200).send("product deleted !")
};

module.exports = {  
    reviewStore,
    reviewStoreByStoreID,
    deleteStores,
    updateStores,
    createStore
}