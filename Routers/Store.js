const router = require("express").Router();
const store = require("../Controllers/Store");
const authenticate = require("../authenticator")
const Redis = require('ioredis');

const redis = new Redis(); 

const cacheMiddleware = async (req, res, next) => {
    const StoreId = req.body.id;
    const cacheKey = `Store:${StoreId}`;
  
    const cached = await redis.get(cacheKey);
    if (cached) {
      return res.json(JSON.parse(cached));
    }
  
    next();
  };
router.get("/ReviewStoreByStoreID",authenticate,cacheMiddleware)

router.post("/CreateStore",authenticate, store.createStore);
router.get("/ReviewStores",authenticate, store.reviewStore);
router.get("/ReviewStoreByStoreID",authenticate, store.reviewStoreByStoreID);
router.put("/UpdateStore",authenticate, store.updateStores);
router.delete("/DeleteStore/:id",authenticate, store.deleteStores);

module.exports = router;
