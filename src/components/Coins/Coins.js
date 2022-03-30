import React, { useEffect, useState } from "react";
import Coin from "./Coin";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);
  return (
    <div className="all-coins container py-5 my-5">
      <h2 className="text-uppercase">Available Crypto Currencies</h2>
      <p className="fw-bold fs-5 mb-5">Total coins {coins.length}</p>
      <div className="row">
        {coins.map((coin) => (
          <Coin key={coin.id} coin={coin}></Coin>
        ))}
      </div>
    </div>
  );
};

export default Coins;
