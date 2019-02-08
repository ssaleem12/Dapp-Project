pragma solidity ^0.4.17;

contract User {
    
    address public owner;
    uint public completed_user;
    
    modifier restricted() {
        
        if(msg.sender == owner) _;
    }
    
    function User() public {
        
        owner = msg.sender; 
    }
    
    function Completed(uint completed) public restricted {
        completed_user = completed;
    }
    
    function upgrade(address new_addr) public restricted {
        User upgraded = User(new_addr);
        upgraded.Completed(completed_user);
    }
    