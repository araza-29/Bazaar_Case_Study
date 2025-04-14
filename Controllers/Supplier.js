const db = require("../Model")
const supplier = db.supplier

const reviewSuppliers = async(req, res) => {
    try{
        const suppliers = await supplier.findAll({})
        if(suppliers){
            res.status(200).json({code: 200, data: suppliers})
        }
        else {
            res.status(404).json({code: 404, data: "suppliers not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const reviewSupplierBySupplierID =  async(req, res) => {
    try{
        const suppliers = await supplier.findOne({code: 200, data: suppliers})
        if(suppliers){
            res.status(200).json({code: 200, data: suppliers})
        }
        else {
            res.status(404).json({code: 404, data: "suppliers not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const createSupplier = async(req, res) => {
    try{
        const suppliers = await supplier.create({name: req.body.name, contactNo: req.body.contactNo, email: req.body.email})
        if(suppliers){
            res.status(200).json({code: 200, data: suppliers})
        }
        else {
            res.status(404).json({code: 404, data: "suppliers not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const updateSupplier = async(req, res) => {
    try{
        const suppliers = await supplier.update(req.body, {where: {id: req.body.id}})
        if(suppliers){
            res.status(200).json({code: 200, data: suppliers})
        }
        else {
            res.status(404).json({code: 404, data: "suppliers not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const deleteSupplier = async(req, res) => {
    try{
        const suppliers = await supplier.destroy({where: {id: req.params.id}})
        if(suppliers){
            res.status(200).json({code: 200, data: suppliers})
        }
        else {
            res.status(404).json({code: 404, data: "suppliers not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

module.exports = {
    reviewSuppliers,
    reviewSupplierBySupplierID,
    deleteSupplier,
    updateSupplier,
    createSupplier
}