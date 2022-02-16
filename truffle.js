// var mnemonic = 'wild render law slight strike seven close damp glory jaguar dawn scan';
// var kovanUrl = "https://kovan.infura.io/v3/c3422181d0594697a38defe7706a1e5b";
require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

const mnemonic = process.env.MNEMONIC
const urlropsten = process.env.ROPSTEN_URL

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, urlropsten),
      network_id: 3,       // Ropsten's id
      gas: 8000000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
      }
  },
  compilers: {
    solc: {
      version: "0.7.6"
   }
 }
};
