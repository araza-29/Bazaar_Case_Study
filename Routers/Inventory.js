const router = require("express").Router();
const Inventory = require("../Controllers/Inventory");
const authenticate = require("../authenticator")
const Redis = require('ioredis');

const redis = new Redis(); 

const cacheMiddleware = async (req, res, next) => {
    const inventoryId = req.body.id;
    const cacheKey = `inventory:${inventoryId}`;
  
    const cached = await redis.get(cacheKey);
    if (cached) {
      return res.json(JSON.parse(cached));
    }
  
    next();
  };
router.get("/ReviewInventoryByInventoryID",cacheMiddleware)

router.post("/CreateInventory",authenticate, Inventory.createInventory);
router.get("/ReviewInventorys", Inventory.reviewInventorys);
router.get("/ReviewInventoryByInventoryID", Inventory.reviewInventoryByInventoryID);
router.put("/UpdateInventory",authenticate, Inventory.updateInventory);
router.delete("/DeleteInventory/:id",authenticate, Inventory.deleteInventory);

module.exports = router;
