![Free_Sample_By_Wix(2)](https://user-images.githubusercontent.com/59489905/227745631-efbdde0e-99c9-42df-aa04-956690a8538f.jpg)


# Buidl Bounty Hunters Credit Union

 Providing Private Banking and Financial Data to Local Communities around the Globe
 
## About us

Buidl Bounty Hunters Credit Union (BBHCU) is a community oriented data dao committed to global impact. We are more than a credit union. We leverage zk and other web3 technologies to revolutionize banking. We provide open user financial data for buidlrs while protecting member privacy making information like credit scores obsolete.

## The Team

Joshua Covington: Full Stack Dev
Casmir Patterson: Tech Lead, Solidity Dev and Auditor
Desmond Wareham: Dev Rel, Product and Marketing


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Tech Stack

Tech Stack: NextJS/React/JavaScript, Ethers, Bootstrap, Web3.js, Foundry/Forge Testing
Integrations: Intmax -> webmax.js wallet connectivity, Gnosis Chain (Governance/Governor/TimelockToken), UMAoSnapshot/Zodiac (SAFE/ENS), cryptocreditunionDAO.eth, Push Protocol ,TheGraphql Schemas (UMA-Subgraph), F-EVM -> GasLimit Bug, Scroll (RPC)

In our DataDAO stack, we utilized GraphQL schemas like syntheticDID.graphql, chat.graphql, and Polybase Schemas (chat). To replace the NFTDID subgraph, we used UMA-oSnapshot/Zodiac SAFE and subGraph.

Our current focus is launching a GovernanceDAO on Gnosis Chain Chaido, with contract addresses for Governor, GovernanceToken, and Timelock. We also implemented a zkWallet for CreditUnion members to sign in with a zkDID and added zkIDWallet, loggedChanged, Wallet Lock, and Wallet Unlock to the Unitrap DApp.

Additionally, we integrated Intmax for wallet connectivity with webmax.js and used tools like TheGraph (UMA-Subgraph) and PUSH Protocol for notifications. We also encountered and addressed the GasLimit Bug in F-EVM, and used Scroll (RPC) to deploy the Membership Contract.

