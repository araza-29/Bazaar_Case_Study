const db = require("../Model")
const role = db.role

const reviewRole = async(req, res) => {
    const roles = await role.findAll({})
    res.json({code: 200, data: roles})
};

const reviewRoleByroleID = async(req, res) => {
    const roles = await role.findOne({where:{id:req.body.id}})
    res.json({code: 200, data: roles})
};

const createRole = async (req, res) => {
    try {
        const { name } = req.body;

        const roles = await role.create({
            name
        });

        res.json({ code: 200, data: roles });
    } catch (error) {
        console.error("Create Product Error:", error); // log to terminal
        res.status(500).json({ code: 500, message: error.message });
    }
};

const updateRole = async(req, res) => {
    const roles = await role.update(req.body, {where: {id: req.body.id }})
    res.json({code: 200, data: roles})
};

const deleteRole = async(req, res) => {
    const roles = await role.destroy({status: false},{where:{id:req.params.id}})
    res.json(200).send("product deleted !")
};

module.exports = {
    reviewRole,
    reviewRoleByroleID,
    deleteRole,
    updateRole,
    createRole
}