import {Web3} from 'web3';

import axios from 'axios';
// Initialize Web3 with an Ethereum node provider (e.g., Infura or your own node)
const web3 = new Web3('https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7');
let latestBlockNumber: any;
async function getLatestBlockNumber() {
    try {
        latestBlockNumber= await web3.eth.getBlockNumber();
        
        console.log(`Latest block number: ${latestBlockNumber}`);
    } catch (error) {
        console.error('Error fetching block number:', error);
    }
}
 async function getUSDTBalance(address: string): Promise<number> {
     try {
       const apiKey = 'RNEIKFIW41KT2441J1K6PB5UU7M6DESNSI'; // Replace with your actual API key
       const url = 'https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7';
       const params = {
         module: 'account',
         action: 'balance',
         address: address,
         contractaddress: '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT contract address
         tag: 'latest',
         apikey: apiKey,
       };
  
       const response = await axios.get(url, { params });
       const balanceWei = response.data.result;
      const balanceUSDT = parseFloat(balanceWei) / 10 ** 6; // Convert from wei to USDT
  
       return balanceUSDT;
     } catch (err) {
       console.error('Error fetching USDT balance:' + err);
      return 0; // Handle error gracefully
    }
   }

//   getLatestBlockNumber();
// const usdtBalance =  getUSDTBalance(latestBlockNumber);
// console.log(`USDT balance: ${usdtBalance} USDT`);