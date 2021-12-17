import {InjectedConnector} from "@web3-react/injected-connector";
export const injectedConnector = new InjectedConnector({
    supportedChainIds: [
      97, 5, 80001,137
    ], //421611 arb test change to 42161, 8001 => 137
  });