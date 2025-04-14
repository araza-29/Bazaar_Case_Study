const router = require("express").Router();
const role = require("../Controllers/Role");
const authenticate = require("../authenticator")

router.post("/CreateRole",authenticate, role.createRole);
router.get("/ReviewRoles",authenticate, role.reviewRole);
router.get("/ReviewRoleByRoleID",authenticate, role.reviewRoleByroleID);
router.put("/UpdateRole",authenticate, role.updateRole);
router.delete("/DeleteRole/:id",authenticate, role.deleteRole);

module.exports = router;
