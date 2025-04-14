const router = require("express").Router();
const stockLog = require("../Controllers/StockLog");
const authenticate = require("../authenticator")
const Redis = require('ioredis');

const redis = new Redis(); 

const cacheMiddleware = async (req, res, next) => {
    const StockLogId = req.body.id;
    const cacheKey = `StockLog:${StockLogId}`;
  
    const cached = await redis.get(cacheKey);
    if (cached) {
      return res.json(JSON.parse(cached));
    }
  
    next();
  };
router.get("/ReviewStockLogByStockLogID",authenticate,cacheMiddleware)

router.post("/CreateStockLog",authenticate, stockLog.createStockLog);
router.get("/ReviewStockLogByStockId",authenticate, stockLog.reviewStockLogsByStockLogID);
router.delete("/DeleteStockLog/:id",authenticate, stockLog.deleteStockLog);
router.put("/UpdateStockLog",authenticate, stockLog.updateStockLog);
router.get("/ReviewStockLogs",authenticate, stockLog.reviewStockLogs);

module.exports = router;
