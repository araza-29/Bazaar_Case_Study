const router = require("express").Router();
const Category = require("../Controllers/Category");
const Redis = require('ioredis');
const authenticate = require("../authenticator")

const redis = new Redis(); 

const cacheMiddleware = async (req, res, next) => {
    const categoryId = req.body.id;
    const cacheKey = `category:${categoryId}`;
  
    const cached = await redis.get(cacheKey);
    if (cached) {
      return res.json(JSON.parse(cached));
    }
  
    next();
  };
router.get("/ReviewCategoryByCategoryID",cacheMiddleware)

router.post("/CreateCategory",authenticate, Category.createCategory);
router.get("/ReviewCategorys",authenticate , Category.reviewCategory);
router.get("/ReviewCategoryByCategoryID",authenticate, Category.reviewCategoryByCategoryID);
router.put("/UpdateCategory",authenticate, Category.updateCategory);
router.delete("/DeleteCategory/:id",authenticate, Category.deleteCategory);

module.exports = router;
