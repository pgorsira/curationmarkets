var ERC20Token = artifacts.require("./ERC20Token.sol");
var CurationMarkets = artifacts.require("./CurationMarkets.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC20Token);
  deployer.link(ERC20Token, CurationMarkets);
  deployer.deploy(CurationMarkets);
};
