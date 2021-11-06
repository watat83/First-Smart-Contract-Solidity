require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
const nnemonic = process.env.NNEMONIC;
const privateKeys = ["a161190f01c104d4429ad27239c1c9198a047bdc5478dc149baf4c96aed0e024"]
const project_id = process.env.INFURA_PROJECT_ID;

module.exports = {
  contracts_build_directory: "./client/src/contracts",
  /**
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    ganache: {
      host: "127.0.0.1", // Ganache RPC Server (default: none)
      port: 7545, // Current Ganache Instance port (default: none)
      network_id: 5777, // Current Ganache Instance network ID (default: none)
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(
          process.env.NNEMONIC,
          'https://rinkeby.infura.io/v3/' + process.env.INFURA_PROJECT_ID
        );
        // new Web3(
        //   new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/" + process.env.INFURA_PROJECT_ID))
        // );
      },
      network_id: 4,
      gas: 6700000,
      gasPrice: 10000000000,
      skipDryRun: true,
      // from: "0x800705369a9244e399250574B7f8Fa41F81CbcCc"
    },
    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websocket: true        // Enable EventEmitter interface for web3 (default: false)
    // },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    // ropsten: {
    // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
    // network_id: 3,       // Ropsten's id
    // gas: 5500000,        // Ropsten has a lower block limit than mainnet
    // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },
    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
    useColors: true,
    // reporter: "json"
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY //replace this with your API key if you have one
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.9", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  //
  // After you backed up your artifacts you can utilize db by running migrate as follows: 
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  // enabled: false,
  // host: "127.0.0.1",
  // adapter: {
  //   name: "sqlite",
  //   settings: {
  //     directory: ".db"
  //   }
  // }
  // }
};