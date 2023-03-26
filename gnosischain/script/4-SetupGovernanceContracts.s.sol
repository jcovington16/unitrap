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
    GovernanceToken governanceToken = GovernanceToken(0x5FbDB2315678afecb367f032d93F642f64180aa3);
    TimeLock timeLock = TimeLock(payable(0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0));
    GovernorContract governorContract = GovernorContract(payable(0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9));

    bytes32 proposerAdmin;

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("ANVIL_PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        {
            timeLock.grantRole(keccak256("PROPOSER_ROLE"), address(governorContract));
            timeLock.grantRole(keccak256("EXECUTOR_ROLE"), address(0));
            timeLock.revokeRole(keccak256("TIMELOCK_ADMIN_ROLE"), msg.sender);
        }
        vm.stopBroadcast();
    }
}