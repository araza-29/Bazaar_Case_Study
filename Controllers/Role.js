const db = require("../Model")
const role = db.role

const reviewRole = async(req, res) => {
    try{
        const roles = await role.findAll({})
        if(ProductMappings){
            res.status(200).json({code: 200, data: roles})
        }
        else {
            res.status(404).json({code: 404, data: "Roles not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const reviewRoleByroleID = async(req, res) => {
    try{
        const roles = await role.findOne({where:{id:req.body.id}})
        if(roles){
            res.status(200).json({code: 200, data: roles})
        }
        else {
            res.status(404).json({code: 404, data: "Roles not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const createRole = async (req, res) => {
    try {
        const roles = await role.create({name: req.body.name});

        res.json({ code: 200, data: roles });
    } catch (error) {
        res.status(500).json({ code: 500, message: error.message });
    }
};

const updateRole = async(req, res) => {
    try{
        const roles = await role.update(req.body, {where: {id: req.body.id }})
        if(roles){
            res.status(200).json({code: 200, data: roles})
        }
        else {
            res.status(404).json({code: 404, data: "Roles not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const deleteRole = async(req, res) => {
    try{
        const roles = await role.destroy({status: false},{where:{id:req.params.id}})
        if(roles){
            res.status(200).json({code: 200, data: roles})
        }
        else {
            res.status(404).json({code: 404, data: "Roles not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

module.exports = {
    reviewRole,
    reviewRoleByroleID,
    deleteRole,
    updateRole,
    createRole
}