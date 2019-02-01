const ModuleA = require("@kansai-node/module-a");
const moduleA = new ModuleA();

class ModuleB {
  constructor() {
  }
  fuga(val) {
    moduleA.hoge(val);
  }
}

module.exports = ModuleB;
