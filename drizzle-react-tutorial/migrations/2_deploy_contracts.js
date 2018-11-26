const MyStringStore = artifacts.require("MyStringStore");
const VoteManager = artifacts.require("VoteManager");

module.exports = function(deployer) {
  deployer.deploy(MyStringStore);
  // deployer.deploy(VoteManager);
};
