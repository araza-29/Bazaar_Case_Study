const db = require("../Model")
const category = db.category

const reviewCategory = async(req, res) => {
    const categorys = await category.findAll({})
    res.json({code: 200, data: categorys})
};

const reviewCategoryByCategoryID = async(req, res) => {
    const categorys = await category.findOne({where:{id:req.body.id}})
    res.json({code: 200, data: categorys})
};

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        const categorys = await category.create({
            name
        });

        res.json({ code: 200, data: categorys });
    } catch (error) {
        console.error("Create Product Error:", error); // log to terminal
        res.status(500).json({ code: 500, message: error.message });
    }
};

const updateCategory = async(req, res) => {
    const categorys = await category.update(req.body, {where: {id: req.body.id }})
    res.json({code: 200, data: categorys})
};

const deleteCategory = async(req, res) => {
    const categorys = await category.destroy({status: false},{where:{id:req.params.id}})
    res.json(200).send("product deleted !")
};

module.exports = {
    reviewCategory,
    reviewCategoryByCategoryID,
    deleteCategory,
    updateCategory,
    createCategory
}