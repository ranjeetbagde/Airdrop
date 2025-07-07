# Airdrop  # 💰 Crypto Airdrop dApp

This project is a responsive and stylish decentralized application (dApp) that simulates a crypto airdrop system. It allows users to:

- 🔗 Connect their MetaMask wallet  
- ✅ Approve token spending  
- 🎨 Experience a modern UI with Binance, USDT, BTC, ETH icons  
- 💰 Displays a bold "$1000 USDT Airdrop" banner

> ⚠️ **Educational Use Only:** This is built for teaching how token approvals work in crypto. It is NOT intended for malicious use.

---

## 🚀 Live Preview (Recommended)

To test it live with MetaMask:

1. Clone this repo or [download ZIP](https://github.com/ranjeetbagde/airdrop/archive/refs/heads/main.zip)
2. Serve it locally using **Live Server** in VS Code  
   _OR_ run a local server:

```bash
python3 -m http.server 8000


🛠 Project Structure
bash
Copy
Edit
📁 airdrop-dapp/
├── index.html       # Main dApp UI
├── style.css        # Responsive styling with icons
└── app.js           # Web3 logic (Connect wallet + approve)
🧠 How It Works
User connects their MetaMask wallet

User clicks "Approve Token"

Token approval is sent to a predefined spender contract

Backend (not included) could perform a transfer using transferFrom()

🧪 For Developers
Update these two values in app.js:

js
Copy
Edit
const tokenAddress = "0xYourTokenAddress";
const spenderAddress = "0xYourSpenderContract";
You can use testnet tokens or fake ERC-20 tokens for simulation.

📦 Deployment Options
GitHub Pages

Netlify

Vercel

Simply upload the folder to get a secure HTTPS live link.

📚 License
MIT License – for educational use.
Do not use this template for malicious purposes.

✍️ Author
Created by Ranjeet Bagde
📧 ranjeet.blockgenius@gmail.com

