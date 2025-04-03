const router = require("express").Router();
const product = require("../Controllers/Product");

router.post("/CreateProduct", product.createProduct);
router.get("/Review", product.reviewProducts);
router.get("/ReviewProductByProductID/:id", product.reviewProductsByProductID);
router.put("/UpdateProduct/:id", product.updateProduct);
router.delete("/DeleteProduct/:id", product.deleteProduct);

module.exports = router;
