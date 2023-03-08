import { Alchemy, Network } from "alchemy-sdk";

let _alchemy: Alchemy;

const _alchemySettings = {
  apiKey: "Wg0A0GUUMPp3u7LDBlQZM8NLC36Y5a1Z",
  network: Network.ETH_MAINNET,
};

export const getAlchemy = (): Alchemy => {
  if (_alchemy) {
    return _alchemy;
  } else {
    _alchemy = new Alchemy(_alchemySettings);
    return _alchemy;
  }
};
