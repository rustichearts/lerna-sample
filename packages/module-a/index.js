const moment = require("moment");

class ModuleA {
  constructor() {
  }
  hoge(val) {
    console.log(val, moment().toDate());
  }
}
module.exports = ModuleA;
