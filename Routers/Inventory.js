const router = require("express").Router();
const Inventory = require("../Controllers/Inventory");

router.post("/CreateInventory", Inventory.createInventory);
router.get("/ReviewInventorys", Inventory.reviewInventorys);
router.get("/ReviewInventoryByInventoryID", Inventory.reviewInventoryByInventoryID);
router.put("/UpdateInventory", Inventory.updateInventory);
router.delete("/DeleteInventory/:id", Inventory.deleteInventory);

module.exports = router;
