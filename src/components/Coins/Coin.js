import React from "react";
import { Link } from "react-router-dom";
import "./coin.css";

const Coin = ({ coin }) => {
  const { image, name, symbol, id } = coin;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 g-3">
      <Link className="text-decoration-none" to={`/coin/${id}`}>
        <div className="coin-card">
          <img src={image} alt="bit-coin" />
          <div className="card-info">
            <h6>{name}</h6>
            <span>{symbol}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Coin;
