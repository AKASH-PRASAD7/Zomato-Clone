"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use(_express.default.json());
const port = 8080;
app.listen(port, () => {
  console.log(`Server Running at port ${port} !`);
});
app.use("/", (req, res) => {
  res.status(200).json({
    message: "Server Is Running !"
  });
});