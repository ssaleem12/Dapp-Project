var Quiz = artifacts.require("Quiz_Contract")

module.exports = function(deployer){
	deployer.deploy(Quiz)
};