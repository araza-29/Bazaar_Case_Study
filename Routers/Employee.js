const router = require("express").Router();
const Employee = require("../Controllers/Employee");
const authenticate = require("../authenticator")
const Redis = require('ioredis');

const redis = new Redis(); 

const cacheMiddleware = async (req, res, next) => {
    const employeeId = req.body.id;
    const cacheKey = `employee:${employeeId}`;
  
    const cached = await redis.get(cacheKey);
    if (cached) {
      return res.json(JSON.parse(cached));
    }
  
    next();
  };
router.get("/ReviewEmployeeByEmployeeID",cacheMiddleware)

router.post("/CreateEmployee",authenticate, Employee.createEmployee);
router.get("/ReviewEmployees",authenticate, Employee.reviewEmployees);
router.get("/ReviewEmployeeByEmployeeID",authenticate, Employee.reviewEmployeeByEmployeeID);
router.put("/UpdateEmployee",authenticate, Employee.updateEmployee);
router.delete("/DeleteEmployee/:id",authenticate, Employee.deleteEmployee);
router.delete("/login", Employee.login);

module.exports = router;
