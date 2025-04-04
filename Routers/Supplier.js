const router = require("express").Router();
const supplier = require("../Controllers/Supplier");

router.post("/CreateSupplier", supplier.createSupplier);
router.get("/ReviewSupplierBySupplierId", supplier.reviewSupplierBySupplierID);
router.get("/ReviewSuppliers", supplier.reviewSuppliers);
router.delete("/DeleteSupplier/:id", supplier.deleteSupplier);
router.put("/UpdateSupplier", supplier.updateSupplier);

module.exports = router;
