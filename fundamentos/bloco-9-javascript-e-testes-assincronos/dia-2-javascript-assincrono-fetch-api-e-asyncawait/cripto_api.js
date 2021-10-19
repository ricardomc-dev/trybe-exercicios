const url = 'https://api.coincap.io/v2/assets';

const fetchCripto = () => {
  const fetchData = fetch(url)
    .then(response => response.json())
    .then( value => value.data)
    .catch(error => alert(`Ocorreu um ${error}`))
  return fetchData;
};



const setCoins = async () => {
  const coins = await fetchCripto();
  const coinList = document.querySelector('#apiContainer');

  coins.forEach((coin) => {
    const newLine = document.createElement('li')
    const usdPrice = Number(coin.priceUsd);

    newLine.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

    coinList.appendChild(newLine);
  });
}

window.onload = () => setCoins();