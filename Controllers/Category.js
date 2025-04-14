const db = require("../Model")
const category = db.category

const reviewCategory = async(req, res) => {
    try{
        const categorys = await category.findAll({})
        if(categorys){
            res.status(200).json({code: 200, data: categorys})
        }
        else {
            res.status(404).json({code: 404, data: "Categorys not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const reviewCategoryByCategoryID = async(req, res) => {
    try{
        const categorys = await category.findOne({where:{id:req.body.id}})
        if(categorys){
            res.status(200).json({code: 200, data: categorys})
        }
        else {
            res.status(404).json({code: 404, data: "Categorys not found"})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const createCategory = async (req, res) => {
    try {
        const categorys = await category.create({name: req.body.name});

        res.status(200).json({ code: 200, data: categorys });
    } catch (error) {
        res.status(500).json({ code: 500, message: error.message });
    }
};

const updateCategory = async(req, res) => {
    try{
        const categorys = await category.update(req.body, {where: {id: req.body.id }})
        if(categorys){
            res.status(200).json({code: 200, data: categorys})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

const deleteCategory = async(req, res) => {
    try{
        const categorys = await category.destroy({status: false},{where:{id:req.params.id}})
        if(categorys){
            res.status(200).json({code: 200, data: categorys})
        }
    }
    catch(error) {
        res.status(500).json({code: 500, message: error})
    }
};

module.exports = {
    reviewCategory,
    reviewCategoryByCategoryID,
    deleteCategory,
    updateCategory,
    createCategory
}