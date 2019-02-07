import web3 from './web3';
//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = '0x4b81470c7271c7e5da3c97eb82e1e97cf44e70bc';
//use the ABI from your contract
const abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "emailid",
        "type": "string"
      },
      {
        "name": "mobno",
        "type": "uint256"
      }
    ],
    "name": "addclient",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
  export default new web3.eth.Contract(abi,address) ;