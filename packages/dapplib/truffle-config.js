require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom drip flock tooth guard render remind purpose gesture deposit flip ghost'; 
let testAccounts = [
"0x1987fcb712a9caed1202d1fdb9f2410d470ed62a99aa61d09471caea4997c2dc",
"0xd55a6a1474c95843a98021c112a4aa3f165a9e20acc7775afb293726a1d8389a",
"0x4007d21cade55b914ebb3dd437e904a7c0a48914a6a6ada3558f9c338dcbb74c",
"0x880033ac16316517390582db92a85d109e67df6b23468185510b8683af6ffd5b",
"0x853f48ed478663406e77735c8dce18bea7b026b2b7fdfca7d707abc94ffe9e73",
"0x5de5c496882a4205f315f99a0514704a86100d205fa2959f5b5aa7aaf18828ba",
"0xd6c2416cce301c1042d3d866270e1c9714b73e89b85e31bd21a2bf7cd709c398",
"0x236e869ee2bb5611e521652ff0e5039173a61e477c0fb5094f68be5757d4261b",
"0x3b52ac1582089ce6625d653a880a0177788de53fcd8c7b7177a0e3bb8f4ead84",
"0xe4a4d8e0c0cd9a086d41a9d213e10e40d9ed38ca62b6dea98864b390a3fc96e2"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


