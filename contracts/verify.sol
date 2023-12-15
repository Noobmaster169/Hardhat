// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Verify{
    address public owner;
    
    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "Only Allowed for owner");
        _;
    }

    function addInteger(uint a, uint b) 
    public view onlyOwner returns (uint){
        return a + b;
    }
}