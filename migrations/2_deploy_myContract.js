const MyContract = artifacts.require("MyContract");

module.exports = function (deployer, networks, accounts) {
    deployer.deploy(MyContract);
    // console.log(accounts)
}