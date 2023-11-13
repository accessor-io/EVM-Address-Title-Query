const Web3 = require('web3');

function initializeWeb3(rpcUrl) {
    return new Web3(new Web3.providers.HttpProvider(rpcUrl));
}

module.exports = {
    initializeWeb3
};
