const metalink = document.getElementById('metaButton');
const toAddress = document.getElementById('address'); 
const etherAmount = document.getElementById('ether'); 
const sendBtn = document.getElementById('sendEther');
let account;

metalink.addEventListener("click", () => {
  getAccount();
});
async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    account = accounts[0];
}


function etherToHex(etherAmount) {
  const wei = 1000000000000000000
  let etherAmountValue = etherAmount * wei;
  etherAmountValue = etherAmountValue. toString(16.);
  etherAmountValue = '0x'+ etherAmountValue;
  console.log(etherAmountValue)
  return etherAmountValue
}

sendBtn.addEventListener('click', ()=>{
  etherAmountValue = etherToHex(etherAmount.value)
    ethereum.request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: account,
          to: toAddress.value,
          value: etherAmountValue,
   
        }
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
})
