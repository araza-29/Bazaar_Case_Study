const router = require("express").Router();
const user = require("../Controllers/User");

router.post("/CreateProduct", user.createUser);
router.get("/ReviewProducts", user.reviewUsers);
router.get("/ReviewProductByProductID", user.reviewUserByUserID);
router.put("/UpdateProduct", user.updateUser);
router.delete("/DeleteProduct/:id", user.deleteUser);

module.exports = router;
