const router = require("express").Router();
const ProductMapping = require("../Controllers/ProductMapping");
const authenticate = require("../authenticator")
const Redis = require('ioredis');

const redis = new Redis(); 

const cacheMiddleware = async (req, res, next) => {
    const ProductMappingId = req.body.id;
    const cacheKey = `ProductMapping:${ProductMappingId}`;
  
    const cached = await redis.get(cacheKey);
    if (cached) {
      return res.json(JSON.parse(cached));
    }
  
    next();
  };
router.get("/ReviewProductMappingByProductMappingID",authenticate,cacheMiddleware)

router.post("/CreateProductMapping",authenticate, ProductMapping.createProductMapping);
router.get("/ReviewProductMappings",authenticate, ProductMapping.reviewProductMapping);
router.get("/ReviewProductMappingByProductMappingID",authenticate, ProductMapping.reviewProductMappingByProductMappingID);
router.put("/UpdateProductMapping",authenticate, ProductMapping.updateProductMapping);
router.put("/ReviewProductsInInventory",authenticate, ProductMapping.reviewProductsInInventory);
router.put("/ReviewStocksOfProductInInventory",authenticate, ProductMapping.reviewStocksOfProductInInventory);
router.put("/ReviewStocksOfProductInStore",authenticate, ProductMapping.reviewStocksOfProductInStore);
router.delete("/DeleteProductMapping/:id",authenticate, ProductMapping.deleteProductMapping);

module.exports = router;
