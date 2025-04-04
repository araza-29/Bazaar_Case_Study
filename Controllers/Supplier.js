const db = require("../Model")
const supplier = db.supplier

const reviewSuppliers = async(req, res) => {
    const suppliers = await supplier.findAll({})
    res.json({code: 200, data: suppliers})
};

const reviewSupplierBySupplierID =  async(req, res) => {
    const suppliers = await supplier.findOne({id: req.body.id})
    res.json({code: 200, data: suppliers})
};

const createSupplier = async(req, res) => {
    const suppliers = await supplier.create({name: req.body.name, contactNo: req.body.contactNo})
    res.json({code: 200, data: suppliers})
    
};

const updateSupplier = async(req, res) => {
    const suppliers = await supplier.update(req.body, {where: {id: req.body.id}})
    res.json({code: 200, data: suppliers})
};

const deleteSupplier = async(req, res) => {
    const suppliers = await supplier.destroy({where: {id: req.params.id}})
    res.json({code: 200, data: suppliers})
};

module.exports = {
    reviewSuppliers,
    reviewSupplierBySupplierID,
    deleteSupplier,
    updateSupplier,
    createSupplier
}