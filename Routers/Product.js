const router = require("express").Router();
const product = require("../Controllers/Product");
const authenticate = require("../authenticator")
const Redis = require('ioredis');

const redis = new Redis(); 

const cacheMiddleware = async (req, res, next) => {
    const ProductId = req.body.id;
    const cacheKey = `Product:${ProductId}`;
  
    const cached = await redis.get(cacheKey);
    if (cached) {
      return res.json(JSON.parse(cached));
    }
  
    next();
  };
router.get("/ReviewProductByProductID",authenticate,cacheMiddleware)

router.post("/CreateProduct",authenticate, product.createProduct);
router.get("/ReviewProducts",authenticate, product.reviewProducts);
router.get("/ReviewProductByProductID",authenticate, product.reviewProductsByProductID);
router.put("/UpdateProduct",authenticate, product.updateProduct);
router.delete("/DeleteProduct/:id",authenticate, product.deleteProduct);

module.exports = router;
