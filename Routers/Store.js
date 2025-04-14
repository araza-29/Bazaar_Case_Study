const router = require("express").Router();
const store = require("../Controllers/Store");
const authenticate = require("../authenticator")

router.post("/CreateStore",authenticate, store.createStore);
router.get("/ReviewStores",authenticate, store.reviewStore);
router.get("/ReviewStoreByStoreID",authenticate, store.reviewStoreByStoreID);
router.put("/UpdateStore",authenticate, store.updateStores);
router.delete("/DeleteStore/:id",authenticate, store.deleteStores);

module.exports = router;
