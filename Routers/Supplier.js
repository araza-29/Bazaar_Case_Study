const router = require("express").Router();
const supplier = require("../Controllers/Supplier");
const authenticate = require("../authenticator")
const Redis = require('ioredis');

const redis = new Redis(); 

const cacheMiddleware = async (req, res, next) => {
    const SupplierId = req.body.id;
    const cacheKey = `Supplier:${SupplierId}`;
  
    const cached = await redis.get(cacheKey);
    if (cached) {
      return res.json(JSON.parse(cached));
    }
  
    next();
  };
router.get("/ReviewSupplierBySupplierID",authenticate,cacheMiddleware)

router.post("/CreateSupplier",authenticate, supplier.createSupplier);
router.get("/ReviewSupplierBySupplierId",authenticate, supplier.reviewSupplierBySupplierID);
router.get("/ReviewSuppliers",authenticate, supplier.reviewSuppliers);
router.delete("/DeleteSupplier/:id",authenticate, supplier.deleteSupplier);
router.put("/UpdateSupplier",authenticate, supplier.updateSupplier);

module.exports = router;
