const { expect } = require("chai");

describe("Lunaris", function () {
  it("Should mint initial supply to deployer", async function () {
    const Lunaris = await ethers.getContractFactory("Lunaris");
    const lunaris = await Lunaris.deploy();
    await lunaris.deployed();

    const deployer = (await ethers.getSigners())[0];
    expect(await lunaris.balanceOf(deployer.address)).to.equal(100_000_000n * 10n**18n);
  });
});
