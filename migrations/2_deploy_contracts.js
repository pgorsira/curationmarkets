var ERC20Token = artifacts.require("./ERC20Token.sol");
var ContinuousToken = artifacts.require("./ContinuousToken.sol");
var CurationToken = artifacts.require("./CurationToken.sol");
var Curator = artifacts.require("./Curator.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC20Token);
  deployer.deploy(ContinuousToken);
  deployer.deploy(CurationToken);
  deployer.deploy(Curator);
  deployer.autolink();
};
