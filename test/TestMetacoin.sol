pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CurationMarkets.sol";

contract TestCurationMarkets {

  function testSample() {
    CurationMarkets curation = CurationMarkets(DeployedAddresses.CurationMarkets());

    Assert.equal(0, 0, "Sample solidity test");
  }

}
