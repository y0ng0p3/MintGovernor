const { ethers } = require("hardhat");

async function main() {
  me = await ethers.getSigner("0x28Edfc28Fc9402a7B5c43A33713895C6aA5e8387");
  const transactionCount = await me.getTransactionCount();

  // gets the address of the token before it is deployed
  const futureAddress = ethers.utils.getContractAddress({
    from: me.address,
    nonce: transactionCount + 1
  });

  const Vovernor = await ethers.getContractFactory("Vovernor");
  const governor = await Vovernor.deploy(futureAddress);

  const Voken = await ethers.getContractFactory("Voken");
  const token = await Voken.deploy(governor.address);

  console.log(
    `Governor deployed to ${governor.address}`,
    `Token deployed to ${token.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
