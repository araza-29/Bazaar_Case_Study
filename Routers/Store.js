const router = require("express").Router();
const store = require("../Controllers/Store");

router.post("/CreateStore", store.createStore);
router.get("/ReviewStores", store.reviewStore);
router.get("/ReviewStoreByStoreID", store.reviewStoreByStoreID);
router.put("/UpdateStore", store.updateStores);
router.delete("/DeleteStore/:id", store.deleteStores);

module.exports = router;
