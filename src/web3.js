//var Web3=require('web3');
import  Web3  from 'web3';


let web3;

if (typeof window.web3 !== 'undefined') {
    console.log('web3 is enabled');
     web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    //web3.eth.getAccounts().then(console.log);
console.log(web3);
    //web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
    if (Web3.givenProvider.isMetaMask === true) {
        console.log('MetaMask is active')
    } else {
        console.log('MetaMask is not available')
    }
} else {
    console.log('web3 is not found')
}


export default  web3 ;
