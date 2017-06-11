pragma solidity ^0.4.0;

import "./CurationToken.sol";

/*
Back information with full backing in that subtopic
Currently just uses event logs.
Have to build a local DB to filter these events.
No internal storage atm.
*/
contract Curator {

    function back(address _token, string _subtopic, string _info) {
        CurationToken token = CurationToken(_token);
//        LogBacking(msg.sender, _info, token.totalBondsPerCuratorPerSubtopic(msg.sender, _subtopic), token.totalBonded());
    }

    function revoke(address _token, string _subtopic, string _info) {
        CurationToken token  = CurationToken(_token);
//        LogRevoke(msg.sender, _info, token.totalBondsPerCuratorPerSubtopic(msg.sender, _subtopic), token.totalBonded());
    }

    event LogBacking(address curator, string info, uint256 bondedAmount, uint256 totalBonded);
    event LogRevoke(address curator, string info, uint256 bondedAmount, uint256 totalBonded);
}
