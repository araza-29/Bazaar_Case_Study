const router = require("express").Router();
const stockMovement = require("../Controllers/StockMovement");

router.post("/CreateStockMovement", stockMovement.createStockMovement);
router.get("/ReviewStockMovementByProductId", stockMovement.reviewStockMovementByProductId);
router.get("/DeleteStockMovement/:id", stockMovement.deleteStockMovement);
router.put("/UpdateProduct", stockMovement.updateStockMovement);

module.exports = router;
