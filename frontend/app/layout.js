import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "@/components/ThirdwebProvider";

const inter = Inter({ subsets: ["latin"] });

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "TokenWizard",
  description: "Launchpad for Shido",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider
          activeChain={{
            // === Required information for connecting to the network === \\
            chainId: 9007, // Chain ID of the network
            // Array of RPC URLs to use
            rpc: ["https://rpc-testnet-nodes.shidoscan.com"],
    
            // === Information for adding the network to your wallet (how it will appear for first time users) === \\
            // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
            nativeCurrency: {
              decimals: 18,
              name: "Ethereum",
              symbol: "ETH",
            },
            shortName: "ETH", // Display value shown in the wallet UI
            slug: "ETH", // Display value shown in the wallet UI
            testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
            chain: "Shido Testnet", // Name of the network
            name: "Shido Testnet", // Name of the network
          }}
          clientId="cf365aafc1e9ada6f98edcf72ebf6bdc"
          s
        >
          {children}
        </ThirdwebProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
