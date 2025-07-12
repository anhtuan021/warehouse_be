const catchAsync = require("../utils/catchAsync");

const roleMiddleware = (req, res, next) => {
  const allowedRoles = ["admin", "manager", "staff"]; // ➕ thêm "staff" vô đây

  if (!allowedRoles.includes(req.user.role)) {
    return res.status(403).json({ message: "Forbidden" });
  }

  next();
};

module.exports = { roleMiddleware };