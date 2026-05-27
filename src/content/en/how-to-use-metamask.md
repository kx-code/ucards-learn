---
title: 'How to Use MetaMask: Step-by-Step Tutorial 2026'
description: 'Complete MetaMask tutorial covering wallet setup, backing up seed phrases, sending and receiving crypto, connecting to BSC network, and security best practices.'
keywords: 'how to use metamask, metamask tutorial, metamask setup, metamask bsc, ethereum wallet guide'
category: 'education'
slug: 'how-to-use-metamask'
date: 2026-04-30
updated: 2026-04-30
related:
  - 'best-crypto-wallet'
  - 'what-is-erc20'
  - 'how-to-buy-usdt'
cta:
  title: 'Spend from MetaMask with a Virtual Card'
  subtitle: 'Convert your ETH and tokens into a Visa card — no bank account needed.'
schemaType: 'product'
rating: 4.8
ratingCount: 1200
faqs:
  - question: 'Is MetaMask safe?'
    answer: 'MetaMask is a non-custodial wallet — your private keys are stored on your device and never uploaded to any server. As long as you keep your seed phrase safe, avoid connecting to suspicious websites, and regularly revoke token approvals, your security is well-protected. For large assets, we recommend using MetaMask in combination with a hardware wallet.'
  - question: 'What should I do if I lose my MetaMask seed phrase?'
    answer: 'The seed phrase is the only way to recover your wallet. If you lose it, you will never be able to recover the assets in your wallet. MetaMask servers do not store your seed phrase, and no one can help you retrieve it. Be sure to write your seed phrase on paper and store it in a secure physical location.'
  - question: 'How do I add the BSC network to MetaMask?'
    answer: "Click the network selector at the top of MetaMask, select 'Add Network,' then manually enter the BSC mainnet parameters: RPC URL is https://bsc-dataseed.binance.org/, Chain ID is 56, Currency Symbol is BNB, and Block Explorer is https://bscscan.com. After saving, you can operate on the BSC network."
  - question: 'Why is my transaction stuck in pending status?'
    answer: "This is usually because the gas fee is set too low, causing miners to prioritize other transactions. You can find the pending transaction in MetaMask's Activity tab and click 'Speed Up' to increase the gas fee and push it through, or click 'Cancel' to abandon the transaction."
  - question: 'How do I fund a virtual card from MetaMask?'
    answer: 'On a virtual card platform like uCards, select the deposit network (ETH or BSC) and copy the deposit address provided. Then in MetaMask, click Send, paste the address, and enter the amount. After the transaction is confirmed, your virtual card balance will update within minutes. uCards supports direct USDT deposits from MetaMask.'
---

## What Is MetaMask?

MetaMask is the most popular non-custodial cryptocurrency wallet in the world, with over 30 million monthly active users. Developed by Consensys, MetaMask allows you to manage Ethereum-based tokens, interact with decentralized applications (dApps), and store your digital assets securely — all without trusting a third party with your private keys.

MetaMask is available as a browser extension for Chrome, Firefox, Brave, and Edge, as well as a mobile app for iOS and Android. This tutorial covers everything you need to know to get started.

## Installing MetaMask

### Browser Extension (Desktop)

1. Visit **metamask.io** — always use the official website to avoid phishing
2. Click **"Download"** and select your browser (Chrome, Firefox, Brave, or Edge)
3. Click **"Add to Chrome"** (or your browser's equivalent)
4. Confirm the installation when prompted
5. The MetaMask fox icon will appear in your browser toolbar

### Mobile App

1. Open the **App Store** (iOS) or **Google Play Store** (Android)
2. Search for **"MetaMask"** — verify the developer is "MetaMask" (Consensys)
3. Download and install the app
4. Open MetaMask to begin setup

**Warning:** Only download MetaMask from official sources. Fake MetaMask apps and extensions are common phishing vectors.

## Creating Your Wallet

Once MetaMask is installed, follow these steps to create a new wallet:

1. **Click "Get Started"** on the welcome screen
2. **Select "Create a new wallet"** (use "Import wallet" only if restoring from a backup)
3. **Create a strong password** — this protects your wallet on your current device
   - Use at least 12 characters with mixed case, numbers, and symbols
   - This password encrypts your wallet data locally — it is NOT your seed phrase
4. **Watch the security video** about your Secret Recovery Phrase
5. **Click "Click here to reveal secret words"** to see your 12-word seed phrase

### The Most Important Step: Backing Up Your Seed Phrase

Your Secret Recovery Phrase (seed phrase) is the master key to your wallet. If you lose it, you lose access to your funds forever. If someone else gets it, they can steal everything.

**DO:**

- Write it down on paper
- Store it in a secure physical location (safe, lockbox)
- Consider a metal backup plate for fire/water protection
- Verify each word carefully as you write it

**DO NOT:**

- Save it digitally (screenshots, notes app, cloud storage)
- Share it with anyone — ever
- Enter it on any website or app other than MetaMask
- Store it where others might find it

6. **Confirm your seed phrase** by selecting the words in the correct order
7. Click **"Confirm"** — your wallet is now created

## Understanding the MetaMask Interface

### Account View

The main screen shows:

- **Account name and address**: Click to copy your full Ethereum address
- **Balance**: Total value of ETH and tokens in your account
- **Token list**: Shows ETH and any ERC20 tokens you hold
- **Buy, Send, Swap buttons**: Quick actions for managing your assets

### Key Icons

- **Account icon** (top right): Switch between accounts, create new accounts, import accounts
- **Network selector** (top center): Switch between Ethereum, BSC, and other networks
- **Activity tab**: View your transaction history
- **Settings** (top right menu): Configure security preferences, connected sites, advanced options

## Receiving Crypto

To receive ETH or ERC20 tokens:

1. Click on your **account name** at the top of MetaMask to copy your address
2. Your Ethereum address looks like: `0x1234...abcd` (42 characters, starts with `0x`)
3. Share this address with the sender
4. Or click **"Receive"** to display a QR code that the sender can scan

**Important:** Ethereum addresses are case-insensitive but always verify the full address before sharing. Some tokens require specific networks — make sure the sender uses the correct one.

## Sending Crypto

To send ETH or ERC20 tokens:

1. Click **"Send"** on the main screen
2. **Paste the recipient's address** or scan a QR code
3. **Enter the amount** you want to send
4. **Review the transaction details:**
   - Recipient address
   - Amount
   - Gas fee estimate
   - Total cost
5. Click **"Confirm"** to send
6. The transaction will appear in your Activity tab with a pending status
7. Once confirmed on the network, the status will change to "Confirmed"

### Understanding Gas Fees

Every Ethereum transaction requires a gas fee paid in ETH:

- **Gas limit**: Maximum gas units the transaction can consume
- **Gas price (Gwei)**: Price per gas unit — fluctuates with network demand
- **Total fee**: Gas limit x Gas price (displayed in ETH and USD)

MetaMask automatically estimates appropriate gas fees. For time-sensitive transactions, you can increase the gas price for faster confirmation.

## Connecting to BSC (Binance Smart Chain)

By default, MetaMask connects to the Ethereum mainnet. To use BSC, you need to add it manually:

### Step-by-Step BSC Setup

1. Click the **network selector** at the top of MetaMask
2. Click **"Add network"**
3. Click **"Add a network manually"** (at the bottom)
4. Enter the following BSC mainnet details:

| Field              | Value                             |
| ------------------ | --------------------------------- |
| Network name       | BNB Smart Chain                   |
| New RPC URL        | https://bsc-dataseed.binance.org/ |
| Chain ID           | 56                                |
| Currency symbol    | BNB                               |
| Block explorer URL | https://bscscan.com               |

5. Click **"Save"**
6. BNB Smart Chain will now appear in your network selector

### Switching Between Networks

Simply click the network selector dropdown and choose between:

- **Ethereum Mainnet** — for ETH, ERC20 tokens, and Ethereum dApps
- **BNB Smart Chain** — for BNB, BEP20 tokens, and BSC dApps
- **Other networks** — add Polygon, Arbitrum, or any EVM-compatible chain

## Adding Custom Tokens

MetaMask automatically displays popular tokens, but you may need to add custom tokens manually:

1. Click **"Import tokens"** at the bottom of the token list
2. **Search** for the token by name (if it is a known token)
3. For custom tokens, enter the **token contract address**
4. The token symbol and decimals will auto-fill
5. Click **"Add custom token"** then **"Import tokens"**

You can find token contract addresses on Etherscan (Ethereum) or BscScan (BSC).

## Connecting to dApps

MetaMask's primary purpose is interacting with decentralized applications:

1. Visit a dApp website (e.g., Uniswap, Aave, OpenSea)
2. Click **"Connect Wallet"** or a similar button
3. Select **MetaMask** from the wallet options
4. MetaMask will pop up asking you to **select an account** to connect
5. Click **"Next"** then **"Connect"**
6. The dApp can now see your address and request transactions (but cannot access your funds without your approval)

### Managing Connected Sites

To review or disconnect dApps:

1. Click the **three-dot menu** (top right)
2. Go to **"Connected sites"**
3. View all connected dApps and disconnect any you no longer use

## Security Best Practices

### Essential Security Measures

1. **Lock your wallet** when not in use. Click the lock icon or set auto-lock in Settings.
2. **Verify transaction details** before confirming. Malicious dApps can try to trick you into approving harmful transactions.
3. **Use a hardware wallet** for large holdings. MetaMask integrates with Ledger and Trezor.
4. **Check URLs carefully** before connecting your wallet. Phishing sites mimic popular dApps.
5. **Bookmark dApp URLs** and only visit them through your bookmarks.
6. **Revoke token approvals** regularly using tools like Revoke.cash.
7. **Never enter your seed phrase** on any website, even if it looks like MetaMask.

### Advanced Security

- **Create separate accounts** for different purposes (trading, dApps, holding)
- **Use a dedicated browser profile** for crypto activities
- **Enable "Show incoming transactions"** in Settings to monitor for unexpected activity
- **Review your transaction history** regularly

## Using MetaMask with Virtual Cards

You can fund virtual credit cards directly from MetaMask:

1. Open MetaMask and ensure you are on the correct network (Ethereum or BSC)
2. Sign up for a virtual card platform like uCards
3. Select your card type and choose your payment network
4. Copy the deposit address provided by the platform
5. In MetaMask, click **"Send"** and paste the address
6. Enter the amount and confirm the transaction
7. Your virtual card will be funded and ready to use within minutes

## Troubleshooting Common Issues

### Transaction Stuck Pending

- Open MetaMask > Activity tab > click the pending transaction
- Click **"Speed up"** to increase gas and push it through
- Or click **"Cancel"** to replace it with a zero-value transaction

### Token Not Showing

- Add the token manually using its contract address
- Make sure you are on the correct network

### Lost Password

- Click **"Import wallet"** on the MetaMask welcome screen
- Enter your 12-word seed phrase
- Create a new password

## Conclusion

MetaMask is an essential tool for anyone interacting with Ethereum, BSC, or other EVM-compatible networks. While it requires careful attention to security — particularly around seed phrase management — its user-friendly interface and broad ecosystem support make it the best wallet for DeFi, dApps, and managing ERC20 tokens.

Combined with virtual card platforms like uCards, MetaMask becomes a gateway from the crypto world to everyday spending — letting you use your ETH and tokens for online purchases, subscriptions, and services worldwide.
