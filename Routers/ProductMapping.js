const router = require("express").Router();
const ProductMapping = require("../Controllers/ProductMapping");
const authenticate = require("../authenticator")

router.post("/CreateProductMapping",authenticate, ProductMapping.createProductMapping);
router.get("/ReviewProductMappings",authenticate, ProductMapping.reviewProductMapping);
router.get("/ReviewProductMappingByProductMappingID",authenticate, ProductMapping.reviewProductMappingByProductMappingID);
router.put("/UpdateProductMapping",authenticate, ProductMapping.updateProductMapping);
router.put("/ReviewProductsInInventory",authenticate, ProductMapping.reviewProductsInInventory);
router.put("/ReviewStocksOfProductInInventory",authenticate, ProductMapping.reviewStocksOfProductInInventory);
router.put("/ReviewStocksOfProductInStore",authenticate, ProductMapping.reviewStocksOfProductInStore);
router.delete("/DeleteProductMapping/:id",authenticate, ProductMapping.deleteProductMapping);

module.exports = router;
