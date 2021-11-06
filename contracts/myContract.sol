// Define the version of Solidity to use for this Smart Contract
// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;

// Import OpenZeppelin Ownable Smart Contract
import "@openzeppelin/contracts/access/Ownable.sol";

// Define your Smart Contract with the "Contract" keyword
contract myContract is Ownable {
    string private _myString = "String";

    function getString() external view returns (string memory) {
        return _myString;
    }

    function setString(string calldata newString) external onlyOwner {
        _myString = newString;
    }
}
