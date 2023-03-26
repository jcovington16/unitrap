// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "../lib/forge-std/src/Script.sol";
import {GovernorContract} from "../src/GovernorContract.sol";
import {GovernanceToken} from "../src/GovernanceToken.sol";
import {TimeLock} from "../src/TimeLock.sol";

/**
export const QUORUM_PERCENTAGE = 4 // Need 4% of voters to pass
export const MIN_DELAY = 3600 // 1 hour - after a vote passes, you have 1 hour before you can enact
// export const VOTING_PERIOD = 45818 // 1 week - how long the vote lasts. This is pretty long even for local tests
export const VOTING_PERIOD = 5 // blocks
export const VOTING_DELAY = 1 // 1 Block - How many blocks till a proposal vote becomes active
*/

contract SetupGovernanceContracts is Script {
    GovernanceToken governanceToken = GovernanceToken(0xBFaCCE3908C737c7D6CEe6d6ec25a73686Bc9325);
    TimeLock timeLock = TimeLock(payable(0xBE2Dd83494519615C1769434E499f97C00eB4E94));
    GovernorContract governorContract = GovernorContract(payable(0xD51F327906e4637b323E4f116B15A065FF0C65A3));

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("CHIADO_PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        {
            timeLock.grantRole(keccak256("PROPOSER_ROLE"), address(governorContract));
            timeLock.grantRole(keccak256("EXECUTOR_ROLE"), address(0));
            timeLock.revokeRole(keccak256("TIMELOCK_ADMIN_ROLE"), msg.sender);
        }
        vm.stopBroadcast();
    }
}