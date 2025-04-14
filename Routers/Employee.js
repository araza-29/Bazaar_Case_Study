const router = require("express").Router();
const Employee = require("../Controllers/Employee");
const authenticate = require("../authenticator")

router.post("/CreateEmployee",authenticate, Employee.createEmployee);
router.get("/ReviewEmployees",authenticate, Employee.reviewEmployees);
router.get("/ReviewEmployeeByEmployeeID",authenticate, Employee.reviewEmployeeByEmployeeID);
router.put("/UpdateEmployee",authenticate, Employee.updateEmployee);
router.delete("/DeleteEmployee/:id",authenticate, Employee.deleteEmployee);

module.exports = router;
