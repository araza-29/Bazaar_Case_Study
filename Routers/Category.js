const router = require("express").Router();
const Category = require("../Controllers/Category");

router.post("/CreateCategory", Category.createCategory);
router.get("/ReviewCategorys", Category.reviewCategory);
router.get("/ReviewCategoryByCategoryID", Category.reviewCategoryByCategoryID);
router.put("/UpdateCategory", Category.updateCategory);
router.delete("/DeleteCategory/:id", Category.deleteCategory);

module.exports = router;
