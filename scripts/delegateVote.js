const { ethers } = require("hardhat");

async function main() {
  me = await ethers.getSigner("0x28Edfc28Fc9402a7B5c43A33713895C6aA5e8387");
  governorAddress = "0x88a7dC0ad3a3af8Cb6BEb8B19179b2Be49bBB088";
  tokenAddress = "0xbA65B000c3A345efCd62E9778cC0aA402BB4A32a";

  vovernor = await ethers.getContractAt("Vovernor", governorAddress);
  voken = await ethers.getContractAt("Voken", tokenAddress);

  await voken.delegate(me.address);
}

main();
