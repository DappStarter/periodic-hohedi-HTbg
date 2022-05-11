require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'idea clog olympic tell educate ranch remember assume half clinic bottom gaze'; 
let testAccounts = [
"0x1cb23e659a05d2ccd204302421231e95d500cd2c8477d9a9122a3c7edf0cbfc3",
"0x3b65980276cf42aebad92e31ec15656125f50e2088888b4632cd88f26f1518ef",
"0x7f3c8ea2d41d442b37af6893f772e8bc863d783bce2a0bec453115823936b2a3",
"0x40c71b1a9a55054a33a548f54903e1b4e08644e4182fb4a6c4982c106cc35e10",
"0xd0891728aae7ff32a88489346d63e712719071067a2864912cb6599053ae82d8",
"0x0b6a00d9479fe63b82d12b85e68d13660c53c31723307869f85b1b173c03be55",
"0x414d77e9baa0113cbda6b996a7252dc5ad52d69ad02f76135daca67c2803d267",
"0x49e2f5aef6c5c0a3633d03574c888db7a2c8b16b1cffc04119c2053cb8cd658c",
"0x32f2a7a63bb242ac017295397a5ce4c3c00983c2ccb04e0db61282c17c5348e1",
"0x74974c15bd4c9806a2327b99734a7519d30ba63a05b55f60b5d89a635bd40d38"
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


