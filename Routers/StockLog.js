const router = require("express").Router();
const stockLog = require("../Controllers/StockLog");

router.post("/CreateStockLog", stockLog.createStockLog);
router.get("/ReviewStockLogByProductId", stockLog.reviewStockLogByProductId);
router.delete("/DeleteStockLog/:id", stockLog.deleteStockLog);
router.put("/UpdateStockLog", stockLog.updateStockLog);
router.get("/ReviewStockLogs", stockLog.reviewStockLogs);

module.exports = router;
