const router = require("express").Router();
const product = require("../Controllers/Product");
const authenticate = require("../authenticator")

router.post("/CreateProduct",authenticate, product.createProduct);
router.get("/ReviewProducts",authenticate, product.reviewProducts);
router.get("/ReviewProductByProductID",authenticate, product.reviewProductsByProductID);
router.put("/UpdateProduct",authenticate, product.updateProduct);
router.delete("/DeleteProduct/:id",authenticate, product.deleteProduct);

module.exports = router;
