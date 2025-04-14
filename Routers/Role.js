const router = require("express").Router();
const role = require("../Controllers/Role");
const authenticate = require("../authenticator")
const Redis = require('ioredis');

const redis = new Redis(); 

const cacheMiddleware = async (req, res, next) => {
    const RoleId = req.body.id;
    const cacheKey = `Role:${RoleId}`;
  
    const cached = await redis.get(cacheKey);
    if (cached) {
      return res.json(JSON.parse(cached));
    }
  
    next();
  };
router.get("/ReviewRoleByRoleID",authenticate,cacheMiddleware)

router.post("/CreateRole",authenticate, role.createRole);
router.get("/ReviewRoles",authenticate, role.reviewRole);
router.get("/ReviewRoleByRoleID",authenticate, role.reviewRoleByroleID);
router.put("/UpdateRole",authenticate, role.updateRole);
router.delete("/DeleteRole/:id",authenticate, role.deleteRole);

module.exports = router;
