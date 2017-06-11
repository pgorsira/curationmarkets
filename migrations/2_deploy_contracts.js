var ERC20Token = artifacts.require("./ERC20Token.sol");
var ContinuousToken = artifacts.require("./ContinuousToken.sol");
var CurationToken = artifacts.require("./CurationToken.sol");
var Curator = artifacts.require("./Curator.sol");

module.exports = function(deployer) {
    deployer.deploy(ERC20Token);
    deployer.link(ERC20Token, ContinuousToken);
    deployer.deploy(ContinuousToken);
    deployer.link(ContinuousToken, CurationToken);
    deployer.deploy(CurationToken);
    deployer.link(CurationToken, Curator);
    deployer.deploy(Curator);
};
