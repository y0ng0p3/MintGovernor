const { ethers } = require("hardhat");
const { parseEther } = ethers.utils;

async function main() {
  const me = await ethers.getSigner("0x28Edfc28Fc9402a7B5c43A33713895C6aA5e8387");
  // const goerliGovernorAddress = "0x88a7dC0ad3a3af8Cb6BEb8B19179b2Be49bBB088";
  // const goerliTokenAddress = "0xbA65B000c3A345efCd62E9778cC0aA402BB4A32a";
  const sepoliaGovernorAddress = "0xdB60eC0B6dC1f03e1e930e9efd283343be1BdD66";
  const sepoliaTokenAddress = "0x186cBB70d4747cE7794C1c3af8a844D0fFD349a1";

  const vovernor = await ethers.getContractAt("Vovernor", sepoliaGovernorAddress);
  const voken = await ethers.getContractAt("Voken", sepoliaTokenAddress);


  const tx = await vovernor.propose(
    [voken.address],
    [0],
    [voken.interface.encodeFunctionData("mint", [me.address, parseEther("35000")])],
    "Give me more tokens!"
  );
  const receipt = await tx.wait();
  const event = receipt.events.find(x => x.event === "ProposalCreated");

  const { proposalId } = event.args;

  console.log("Proposal ID: ", proposalId);

  // wait for 1 block voting delay
  await hre.network.provider.send("evm_mine");
}

main();
