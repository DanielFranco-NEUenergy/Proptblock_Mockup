import metamaskConfig from './connection.js'
import { ethers } from './ethers-5.1.esm.min.js'
const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
const signer = provider.getSigner()
const contract = new ethers.Contract(contractAddress, abi, signer);


let account = await metamaskConfig.getAccount();

// check if metamask is installed in browser
if (metamaskConfig.isMetamaskInstalled) {
    console.log('Metamask is installed!')
} else {
    alert('Install Metamask extension to connect with DApp!')
}

// event triggered when account is changed in metamask
ethereum.on('accountsChanged', async(accounts) => {

    console.log("Cambio de cuenta:");

})

// event triggered when metamask is connected to chain and can make rpc request
ethereum.on('connect', (chainId) => {
    console.log(chainId)
    console.log('Metamask Connected:', ethereum.isConnected())
})

// event triggered when metamask is disconnected from chain and can not make rpc request
ethereum.on('disconnect', (chainId) => {
    console.log(chainId)
    console.log('Metamask Connected:', ethereum.isConnected());
    alert('Metamask is not connected to Rinkeby network. Retry!')
})

// add click event listener on the connect button

//Boton firmar

buyButton.addEventListener('click', async(e) => {

    e.preventDefault()

    let getAccountAddress = await metamaskConfig.getAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    // Prompt user for account connections
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Account:", await signer.getAddress());
    console.log("Solo hace falta firmar........");

    console.log(getAccountAddress);


    console.log(contract);
    console.log(signer);

    // let ethereum = window.ethereum;

    try {
        Swal.fire({
            imageUrl: '../img/loader.gif',
            title: 'Comprando NFT...',
            text: 'Espere la transacción en metamask. Debe aprobar la transacción desde su wallet y esperar la confirmación.',
            showConfirmButton: false
          })
        const tx = await contract.buyAssetPortion(parseFloat(await contract.totalSupply())+1,{value: ethers.utils.parseEther("0.0011")});

        const receipt = await tx.wait();

        if (receipt) {
            Swal.fire(
                'NFT Enviado!',
                'El NFT ha sido enviados a su dirección exitosamente!',
                'success'
            );

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            });
        }
    } catch (error) {

        Swal.fire({
            icon: 'error',
            title: 'Eror',
            text: error,
            // text: error.data.message,
            footer: '<a href="">Why do I have this issue?</a>'
        });
    }

    // Request account access if needed
    // await ethereum.enable();

    // Acccounts now exposed
    // const params = [{
    //     data: tx
    // }];

    // try {

    //     const transactionHash = await provider.buy('eth_buyTransaction', params);
    //     // const receipt = await tx.wait();
    //     console.log('receipt is' + receipt);
    //     console.log('transactionHash is ' + transactionHash);

    // } catch (error) {

    // }

    // const isTransactionMined = async(transactionHash) => {
    //     const txReceipt = await provider.getTransactionReceipt(transactionHash);
    //     if (txReceipt && txReceipt.blockNumber) {
    //         return txReceipt;
    //     }
    // }

    // isTransactionMined();



});
/**
 * Number.prototype.format(n, x, s, c)
 * 
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */
 function format(number, n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = number.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};