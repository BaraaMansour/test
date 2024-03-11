var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Web3 } from 'web3';
import axios from 'axios';
// Initialize Web3 with an Ethereum node provider (e.g., Infura or your own node)
const web3 = new Web3('https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7');
let latestBlockNumber;
function getLatestBlockNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            latestBlockNumber = yield web3.eth.getBlockNumber();
            console.log(`Latest block number: ${latestBlockNumber}`);
        }
        catch (error) {
            console.error('Error fetching block number:', error);
        }
    });
}
function getUSDTBalance(address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const apiKey = 'RNEIKFIW41KT2441J1K6PB5UU7M6DESNSI'; // Replace with your actual API key
            const url = 'https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7';
            const params = {
                module: 'account',
                action: 'balance',
                address: address,
                contractaddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
                tag: 'latest',
                apikey: apiKey,
            };
            const response = yield axios.get(url, { params });
            const balanceWei = response.data.result;
            const balanceUSDT = parseFloat(balanceWei) / Math.pow(10, 6); // Convert from wei to USDT
            return balanceUSDT;
        }
        catch (err) {
            console.error('Error fetching USDT balance:' + err);
            return 0; // Handle error gracefully
        }
    });
}
//   getLatestBlockNumber();
// const usdtBalance =  getUSDTBalance(latestBlockNumber);
// console.log(`USDT balance: ${usdtBalance} USDT`);
