import { ethers } from './ethers-5.1.esm.min.js'
const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
const signer = provider.getSigner()
const contract = new ethers.Contract(contractAddress, abi, signer);
var addressAccount = await signer.getAddress();
console.log("Cuenta:"+addressAccount);
var mySupply = await contract.balanceOf(addressAccount);
var maxSupply = 100;
var myPercentage=mySupply*100/maxSupply;
var myProfit = await contract.cumulativeRewardPerSh(addressAccount);
document.getElementById('mySupply').innerHTML=mySupply;
document.getElementById('myPercentage').innerHTML=mySupply+'%';
document.getElementById('myPercentageBar').style="width:"+myPercentage+"%";
document.getElementById('myProfit').innerHTML=myProfit*1e-18;
var myNFTS = await contract.walletOfOwner(addressAccount);
console.log("myNFTS: "+myNFTS);
myNFTS.forEach(NFT=>{
    var html="<tr><td>"+NFT+"</td><td>"+'<a target="_blank" href="'+'https://testnets.opensea.io/assets/'+contractAddress+'/'+NFT+'" class="d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-search fa-sm text-white-50"></i> Ver en OpenSea</a>'+"</td></tr>";

		document.getElementById('tableBody').innerHTML+=html;
})


// const arr_NFTs= []
// myNFTs.forEach(NFT =>{
//     arr_NFTs.push([NFT,"https://testnets.opensea.io/assets/"+contractAddress+"/"+NFT])
// })
// $('#NFTs_table').DataTable({
//     "data": arr_NFTs,
//     "columns": [
//         { "title": "NFT ID" },
//     ],
//     //para cambiar el lenguaje a español
//     "language": {
//         "lengthMenu": "Mostrar _MENU_ registros",
//         "zeroRecords": "No se encontraron resultados",
//         "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
//         "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
//         "infoFiltered": "(filtrado de un total de _MAX_ registros)",
//         "sSearch": "Buscar:",
//         "oPaginate": {
//             "sFirst": "Primero",
//             "sLast": "Último",
//             "sNext": "Siguiente",
//             "sPrevious": "Anterior"
//         },
//         "sProcessing": "Procesando...",
//     }
// });