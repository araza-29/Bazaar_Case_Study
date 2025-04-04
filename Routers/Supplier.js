const router = require("express").Router();
const supplier = require("../Controllers/Supplier");

router.post("/CreateSupplier", supplier.createSupplier);
router.get("/ReviewSupplierBySupplierId", supplier.reviewSupplierBySupplierID);
router.get("/DeleteSupplier/:id", supplier.deleteSupplier);
router.put("/UpdateProduct", supplier.updateSupplier);

module.exports = router;
