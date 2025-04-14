const router = require("express").Router();
const Category = require("../Controllers/Category");
const authenticate = require("../authenticator")

router.post("/CreateCategory",authenticate, Category.createCategory);
router.get("/ReviewCategorys",authenticate , Category.reviewCategory);
router.get("/ReviewCategoryByCategoryID",authenticate, Category.reviewCategoryByCategoryID);
router.put("/UpdateCategory",authenticate, Category.updateCategory);
router.delete("/DeleteCategory/:id",authenticate, Category.deleteCategory);

module.exports = router;
