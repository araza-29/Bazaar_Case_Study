const db = require("../Model")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Employee = db.employee

const reviewEmployees = async(req, res) => {
    try{
        const Employees = await Employee.findAll({})
        if(categorys){
            res.status(200).json({code: 200, data: Employees})
        }
        else {
            res.status(404).json({code: 404, data: "Employees not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const reviewEmployeeByEmployeeID = async(req, res) => {
    try{
        const Employees = await Employee.findOne({where:{id:req.body.id}})
        if(categorys){
            res.status(200).json({code: 200, data: Employees})
        }
        else {
            res.status(404).json({code: 404, data: "Employees not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const createEmployee = async (req, res) => {
    try {
        const Employees = await product.create({name: req.body.name, email: req.body.email, password: req.body.password, contactNo: req.body.contactNo, role_id: req.body.role_id, store_id: req.body.store_id});

        res.status(200).json({ code: 200, data: Employees });
    } catch (error) {
        res.status(500).json({ code: 500, message: error.message });
    }
};

const updateEmployee = async(req, res) => {
    try{
        const Employees = await Employee.update(req.body, {where: {id: req.body.id }})
        if(categorys){
            res.status(200).json({code: 200, data: Employees})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
    
};

const deleteEmployee = async(req, res) => {
    try{
        const Employees = await Employee.destroy({status: false},{where:{id:req.params.id}})
        if(categorys){
            res.status(200).json({code: 200, data: Employees})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};


const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    // Sign JWT Token
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });

    res.status(200).json({ token });
};


module.exports = {
    reviewEmployees,
    reviewEmployeeByEmployeeID,
    deleteEmployee,
    updateEmployee,
    createEmployee
}