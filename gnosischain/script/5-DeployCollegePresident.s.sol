// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "../lib/forge-std/src/Script.sol";
import {CollegePresident} from "../src/CollegePresident.sol";
import {TimeLock} from "../src/TimeLock.sol";

contract DeployCollegePresident is Script {
    CollegePresident collegePresident;
    TimeLock timeLock = TimeLock(payable(0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0));

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("ANVIL_PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        {
            collegePresident = new CollegePresident();
            // Transfer ownership of CollegePresident contract to Timelock
            collegePresident.transferOwnership(address(timeLock));
        }
        vm.stopBroadcast();
    }
}