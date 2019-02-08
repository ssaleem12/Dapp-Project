var Users = artifacts.require("./User.sol");

module.exports = functions(deployer){
	deployer.deploy(Users);
};