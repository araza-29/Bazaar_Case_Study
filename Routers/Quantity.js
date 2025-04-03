const router = require("express").Router();
const quantity = require("../Controllers/Quantity");

router.post("/CreateQuantity", quantity.createQuantity);
router.get("/ReviewQuantityByProductId", quantity.reviewQuantityByProductId);
router.put("/UpdateQuantity", quantity.updateQuantity);
router.delete("/DeleteQuantity/:id", quantity.deleteQuantity);

module.exports = router;
