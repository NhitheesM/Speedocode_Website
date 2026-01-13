import { SolutionType } from "./websiteSolutions";

export const blockchainSolutions: SolutionType[] = [
    {
        id: "smart-contracts",
        title: "Smart Contracts",
        description: "Self-executing contracts with terms written in code, enabling trustless transactions and automated agreement enforcement on blockchain networks.",
        solutionTypes: ["Solidity Development", "Contract Auditing", "Multi-sig Wallets", "Upgradeable Contracts", "Gas Optimization"],
        businessUseCases: [
            "Automate escrow and payment releases",
            "Create trustless business agreements",
            "Enable decentralized governance",
            "Build automated compliance systems",
            "Reduce intermediary costs"
        ]
    },
    {
        id: "dapps",
        title: "DApps",
        description: "Decentralized applications running on blockchain networks, combining familiar web interfaces with the security and transparency of distributed systems.",
        solutionTypes: ["Web3 Integration", "Wallet Connection", "On-chain Data", "IPFS Storage", "Multi-chain Support"],
        businessUseCases: [
            "Build censorship-resistant applications",
            "Enable peer-to-peer transactions",
            "Create transparent voting systems",
            "Develop decentralized marketplaces",
            "Offer user data ownership"
        ]
    },
    {
        id: "tokens",
        title: "Token Systems",
        description: "Custom token implementations for loyalty programs, governance, utility tokens, and digital assets with full ERC-20/ERC-721 compliance.",
        solutionTypes: ["ERC-20 Tokens", "Tokenomics Design", "Vesting Schedules", "Staking Mechanisms", "Governance Tokens"],
        businessUseCases: [
            "Launch tokenized loyalty programs",
            "Create governance for DAOs",
            "Build utility tokens for platforms",
            "Enable fractional ownership",
            "Implement reward distribution systems"
        ]
    },
    {
        id: "nft",
        title: "NFT Platforms",
        description: "Non-fungible token platforms for digital collectibles, art, real estate, and any unique digital assets with full marketplace capabilities.",
        solutionTypes: ["ERC-721/1155", "Marketplace Development", "Metadata Storage", "Royalty Systems", "Cross-chain NFTs"],
        businessUseCases: [
            "Launch digital art collections",
            "Tokenize real-world assets",
            "Create membership NFTs",
            "Build gaming asset platforms",
            "Enable creator royalty payments"
        ]
    }
];
