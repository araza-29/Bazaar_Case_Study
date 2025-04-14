const router = require("express").Router();
const stockLog = require("../Controllers/StockLog");
const authenticate = require("../authenticator")

router.post("/CreateStockLog",authenticate, stockLog.createStockLog);
router.get("/ReviewStockLogByProductId",authenticate, stockLog.reviewStockLogsByStockLogID);
router.delete("/DeleteStockLog/:id",authenticate, stockLog.deleteStockLog);
router.put("/UpdateStockLog",authenticate, stockLog.updateStockLog);
router.get("/ReviewStockLogs",authenticate, stockLog.reviewStockLogs);

module.exports = router;
