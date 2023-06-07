const { ethers } = require("hardhat");

async function main() {
  me = await ethers.getSigner("0x28Edfc28Fc9402a7B5c43A33713895C6aA5e8387");
  // goerliGovernorAddress = "0x88a7dC0ad3a3af8Cb6BEb8B19179b2Be49bBB088";
  // goerliTokenAddress = "0xbA65B000c3A345efCd62E9778cC0aA402BB4A32a";
  sepoliaGovernorAddress = "0xdB60eC0B6dC1f03e1e930e9efd283343be1BdD66";
  sepoliaTokenAddress = "0x186cBB70d4747cE7794C1c3af8a844D0fFD349a1";

  vovernor = await ethers.getContractAt("Vovernor", sepoliaGovernorAddress);
  voken = await ethers.getContractAt("Voken", sepoliaTokenAddress);

  await voken.delegate(me.address);
}

main();
