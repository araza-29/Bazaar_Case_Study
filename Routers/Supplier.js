const router = require("express").Router();
const supplier = require("../Controllers/Supplier");
const authenticate = require("../authenticator")

router.post("/CreateSupplier",authenticate, supplier.createSupplier);
router.get("/ReviewSupplierBySupplierId",authenticate, supplier.reviewSupplierBySupplierID);
router.get("/ReviewSuppliers",authenticate, supplier.reviewSuppliers);
router.delete("/DeleteSupplier/:id",authenticate, supplier.deleteSupplier);
router.put("/UpdateSupplier",authenticate, supplier.updateSupplier);

module.exports = router;
