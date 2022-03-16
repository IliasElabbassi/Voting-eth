/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require('@nomiclabs/hardhat-waffle');

const INFURA_URL = "https://rinkeby.infura.io/v3/ccbd1626240c4047a81b51464b2fc1e8"
const PRIVATE_KEY = "28ee01f59957de5cbe9dadac54218175193ec6ef9e199a0865c72f81f6718965"
 
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
 