const router = require("express").Router();
const ProductMapping = require("../Controllers/ProductMapping");

router.post("/CreateProductMapping", ProductMapping.createProductMapping);
router.get("/ReviewProductMappings", ProductMapping.reviewProductMapping);
router.get("/ReviewProductMappingByProductMappingID", ProductMapping.reviewProductMappingByProductMappingID);
router.put("/UpdateProductMapping", ProductMapping.updateProductMapping);
router.delete("/DeleteProductMapping/:id", ProductMapping.deleteProductMapping);

module.exports = router;
