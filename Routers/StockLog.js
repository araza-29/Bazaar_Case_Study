const router = require("express").Router();
const stockLog = require("../Controllers/StockLog");

router.post("/CreateStockLog", stockLog.createStockLog);
router.get("/ReviewStockLogByProductId", stockLog.reviewStockLogByProductId);
router.get("/DeleteStockLog/:id", stockLog.deleteStockLog);
router.put("/UpdateStockLog", stockLog.updateStockLog);

module.exports = router;
