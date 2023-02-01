import React from "react";
import Coin from "./Coin";
import { useEffect, useState } from "react";

const CoinsContianer = ({ listOfCoins }) => {
  const [search, setSearch] = useState("");
  // <div class="bg-grey">
  //   <div className="cryptoHeader">
  //     <input
  //       placeHolder="Bitcoin"
  //       onChange={(e) => setSearch(e.target.value)}
  //     />
  //   </div>
  //   <div className="cryptoDisplay">
  //     {filteredCoins.map((coin) => (
  //       <Coin key={coin.id} coin={coin} />
  //     ))}
  //   </div>
  // </div>
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="rounded-xl bg-white mx-8 mt-[-8px] mb-20 shadow-2xl dark:bg-gray-700 dark:border">
      <div className="flex justify-center py-2 items-center border-b">
        <label>Search:</label>
        <input
          className="p-2 mx-4 border rounded w-1/2"
          placeholder="Type here..."
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <div className="flex flex-col">
        {filteredCoins.map((coin) => (
          <Coin key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default CoinsContianer;
