# Solana Wallet Application

This project is a simple Solana wallet application built with Next.js and solana-web3.js. It allows users to create a wallet, view their balance, and send transactions on the Solana devnet.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- NPM (v6 or later)
- Solana CLI

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/mikhailmogilnikov/solana-wallet.git
    cd solana-wallet
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Setting up Solana CLI

1. **Install Solana CLI:**

    ```bash
    sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
    ```

2. **Verify the installation:**

    ```bash
    solana --version
    ```

3. **Configure Solana CLI to use the devnet:**

    ```bash
    solana config set --url https://api.devnet.solana.com
    ```

4. **Airdrop SOL to your wallet:**

    ```bash
    solana airdrop 1 <your_public_key>

5. **Verify transaction:**

    ```bash
    solana confirm <airdrop_signature>
