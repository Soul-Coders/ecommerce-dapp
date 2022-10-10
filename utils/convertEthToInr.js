export const convertEthToInr = async () => {
  try {
    const res = await fetch(
      'https://api.coinbase.com/v2/exchange-rates?currency=ETH'
    );
    const data = await res.json();
    const rate = data.data.rates.INR;
    return rate;
  } catch (error) {
    console.log(error);
  }
};
