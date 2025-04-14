const router = require("express").Router();
const role = require("../Controllers/Role");

router.post("/CreateRole", role.createRole);
router.get("/ReviewRoles", role.reviewRole);
router.get("/ReviewRoleByRoleID", role.reviewRoleByroleID);
router.put("/UpdateRole", role.updateRole);
router.delete("/DeleteRole/:id", role.deleteRole);

module.exports = router;
