const router = require("express").Router();
const Inventory = require("../Controllers/Inventory");
const authenticate = require("../authenticator")

router.post("/CreateInventory",authenticate, Inventory.createInventory);
router.get("/ReviewInventorys", Inventory.reviewInventorys);
router.get("/ReviewInventoryByInventoryID", Inventory.reviewInventoryByInventoryID);
router.put("/UpdateInventory",authenticate, Inventory.updateInventory);
router.delete("/DeleteInventory/:id",authenticate, Inventory.deleteInventory);

module.exports = router;
