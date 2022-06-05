import { ethers } from './ethers-5.1.esm.min.js'
const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
const signer = provider.getSigner()
const contract = new ethers.Contract(contractAddress, abi, signer);
var totalSupply = await contract.totalSupply();
document.getElementById('totalSupply').innerHTML=100-totalSupply;