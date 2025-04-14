const router = require("express").Router();
const Employee = require("../Controllers/Employee");

router.post("/CreateEmployee", Employee.createEmployee);
router.get("/ReviewEmployees", Employee.reviewEmployees);
router.get("/ReviewEmployeeByEmployeeID", Employee.reviewEmployeeByEmployeeID);
router.put("/UpdateEmployee", Employee.updateEmployee);
router.delete("/DeleteEmployee/:id", Employee.deleteEmployee);

module.exports = router;
