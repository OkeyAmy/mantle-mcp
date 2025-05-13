# Mantle Network MPC Server

A modern UI interface for interacting with Mantle Network's DeFi protocols through an MPC (Multi-Party Computation) server. This project provides real-time data and analytics for various DeFi protocols on Mantle Network.

![Mantle MPC Server](./public/mantle.png)

## 🌟 Features

- Real-time token price updates from Mantle Network
- Comprehensive protocol statistics and TVL metrics
- Deep insights into stablecoin analytics
- Interactive glassmorphic UI design
- Live data streaming support
- Integration with AI workspaces (Cursor, Claude, T3Chat)

## 🏗️ Project Structure

```
.
├── public/
│   ├── index.html        # Main UI interface
│   └── screenshot.png    # Project screenshot
├── scripts/
│   └── test-client.mjs   # Test client for MPC server
├── .gitignore
├── README.md
└── package.json
```

## 🛠️ Available Tools

The MPC server provides the following tools for interacting with Mantle Network:

### Token Price Tool
```javascript
{
  name: 'get-token-price',
  description: 'Get the price of a token in mantle network',
  parameters: {
    contract_address: 'string'
  }
}
```

### Total Value Locked (TVL) Tools
```javascript
{
  name: 'get-ltv',
  description: 'Get the total value locked of mantle network'
}

{
  name: 'get-USDT-tvl',
  description: 'Get the total value locked of USDT on Mantle'
}

{
  name: 'get-USDC-tvl',
  description: 'Get the total value locked of USDC on Mantle'
}
```

### Protocol Analytics Tools
```javascript
{
  name: 'get-protocol-merchant-moe-summary',
  description: 'Get key metrics for the Merchant Moe protocol on Mantle'
}

{
  name: 'get-protocol-treehouse-protocol-summary',
  description: 'Get key metrics for a Tree House on Mantle'
}
```

## 🎯 Sample Prompts

Here are some example prompts you can try with each tool:

### Token Price Queries
1. "What is the current price of USDT on Mantle? Please use the contract address 0x123..."
2. "Can you track the price movement of MNT token over the last hour using its contract address?"

### TVL Analysis
1. "What is the total value locked in the entire Mantle Network right now?"
2. "Compare the TVL between USDT and USDC on Mantle Network and show me the difference."

### Protocol Metrics
1. "Show me the key performance metrics for Merchant Moe, including trading volume and liquidity."
2. "What are the current lending rates and total deposits in the Treehouse Protocol?"

### Combined Analysis
1. "Give me a comprehensive overview of Mantle's DeFi ecosystem, including TVL, top protocols, and stablecoin metrics."
2. "Analyze the relationship between MNT token price and Treehouse Protocol's TVL."

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/OkeyAmy/mantle-chain-mcp.git
```

2. Install dependencies:
```bash
npm install
```

3. Test the MPC server connection:
```bash
# This will test the connection to the MPC server and list available tools
node scripts/test-client.mjs
```

4. Start the UI server:
```bash
# This will start a local server to serve the UI interface
npx serve public

# The UI will be available at http://localhost:3000
```

You can now access:
- MPC Tools Testing: Run the test client to verify server connection and available tools
- Web Interface: Open http://localhost:3000 in your browser to access the UI

## 🔌 Integration

To integrate with your AI workspace, add the following configuration to your MCP config:

```json
{
  "mcpServers": {
    "onchain-context": {
      "type": "remote",
      "url": "https://refactorle.vercel.app/sse",
      "supportsStreaming": true
    }
  }
}
```

## 🎨 UI Customization

The interface uses a modern glassmorphic design with:
- Smooth transitions and hover states
- Dynamic background blur effects
- Responsive layout
- Animated components
- High contrast for accessibility

You can customize the UI by modifying the styles in `public/index.html`.

## 📊 Data Sources

- Mantle Network RPC
- DeFiLlama API
- Protocol-specific APIs (Merchant Moe, Treehouse)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Mantle Network](https://www.mantle.xyz/)
- [Merchant Moe](https://defillama.com/protocol/merchant-moe)
- [Treehouse Protocol](https://defillama.com/protocol/treehouse-protocol)
- [Repository](https://github.com/OkeyAmy/mantle-chain-mcp)
