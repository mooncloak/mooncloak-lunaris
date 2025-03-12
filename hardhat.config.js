require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY, INFURA_KEY } = process.env;

module.exports = {
    solidity: "0.8.20",
    networks: {
        amoy: {
            url: `https://rpc-amoy.polygon.technology`,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
        },
        mainnet: {
            url: `https://polygon-mainnet.infura.io/v3/${INFURA_KEY}`,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
        }
    }
};
