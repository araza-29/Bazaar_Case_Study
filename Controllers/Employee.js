const db = require("../Model")
const Employee = db.employee

const reviewEmployees = async(req, res) => {
    const Employees = await Employee.findAll({})
    res.json({code: 200, data: Employees})
};

const reviewEmployeeByEmployeeID = async(req, res) => {
    const Employees = await Employee.findOne({where:{id:req.body.id}})
    res.json({code: 200, data: Employees})
};

const createEmployee = async (req, res) => {
    try {
        const { name, stock, price, supplier_id } = req.body;

        const Employees = await product.create({
            name,
            email,
            password,
            contactNo
        });

        res.json({ code: 200, data: Employees });
    } catch (error) {
        console.error("Create Product Error:", error); // log to terminal
        res.status(500).json({ code: 500, message: error.message });
    }
};

const updateEmployee = async(req, res) => {
    const Employees = await Employee.update(req.body, {where: {id: req.body.id }})
    res.json({code: 200, data: Employees})
};

const deleteEmployee = async(req, res) => {
    const Employees = await Employee.destroy({status: false},{where:{id:req.params.id}})
    res.json(200).send("product deleted !")
};

module.exports = {
    reviewEmployees,
    reviewEmployeeByEmployeeID,
    deleteEmployee,
    updateEmployee,
    createEmployee
}