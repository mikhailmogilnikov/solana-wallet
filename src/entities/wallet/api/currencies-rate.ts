import axios from 'axios';

export const getSolanaToUsd = () =>
  axios.get(
    'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd',
  );
