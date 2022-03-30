import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CoinCardDisplay.css";

const CoinCardDisplay = () => {
  const { coinId } = useParams();
  const [coinDetails, setCoinDetails] = useState({});
  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoinDetails(data));
  }, [coinId]);

  return (
    <div className="coin-card-display container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="information">
            <h2>General Info:</h2>
            <p>Coin Name: {coinDetails.name}</p>
            <p>Market Cap Rank: {coinDetails.market_cap_rank}</p>
            <p>
              Origin:{" "}
              {coinDetails.country_origin
                ? coinDetails.country_origin
                : "Not available"}
            </p>
            <p>
              Hashing Algorithm:{" "}
              {coinDetails.hashing_algorithm
                ? coinDetails.hashing_algorithm
                : "Not available"}
            </p>
            <p>Community Score:{coinDetails.community_score}</p>
            <p>Last Updated: {coinDetails.last_updated}</p>
          </div>
        </div>
        <div className="col">
          <div className="photo">
            <img src={coinDetails.image?.large} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinCardDisplay;
