const router = require("express").Router();
const product = require("../Controllers/Product");

router.post("/CreateProduct", product.createProduct);
router.get("/ReviewProducts", product.reviewProducts);
router.get("/ReviewProductByProductID", product.reviewProductsByProductID);
router.put("/UpdateProduct", product.updateProduct);
router.delete("/DeleteProduct/:id", product.deleteProduct);

module.exports = router;
