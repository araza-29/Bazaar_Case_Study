const db = require("../Model")
const user = db.user

const reviewUsers = async(req, res) => {
    const users = await user.findAll({})
    res.json({code: 200, data: users})
};

const reviewUserByUserID = async(req, res) => {
    const users = await user.findOne({where:{id:req.body.id}})
    res.json({code: 200, data: users})
};

const createUser = async (req, res) => {
    try {
        const { name, stock, price, supplier_id } = req.body;

        const users = await product.create({
            name,
            email,
            password,
            contactNo
        });

        res.json({ code: 200, data: users });
    } catch (error) {
        console.error("Create Product Error:", error); // log to terminal
        res.status(500).json({ code: 500, message: error.message });
    }
};

const updateUser = async(req, res) => {
    const users = await user.update(req.body, {where: {id: req.body.id }})
    res.json({code: 200, data: users})
};

const deleteUser = async(req, res) => {
    const users = await user.destroy({status: false},{where:{id:req.params.id}})
    res.json(200).send("product deleted !")
};

module.exports = {
    reviewUsers,
    reviewUserByUserID,
    deleteUser,
    updateUser,
    createUser
}