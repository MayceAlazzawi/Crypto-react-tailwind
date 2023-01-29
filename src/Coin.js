import React from "react";

const Coin = (coin) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Name: {coin.coin.name}</h1>
      <img src={coin.coin.icon} />
      <h3>Price: {coin.coin.price} </h3>
      <h3>Symbol: {coin.coin.symbol} </h3>
    </div>
  );
};

export default Coin;
