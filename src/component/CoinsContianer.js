import React from "react";
import Coin from "./Coin";

const CoinsContianer = () => {
  return (
    <div className="  rounded-xl bg-white mx-8 mt-[-8px] mb-20 shadow-2xl dark:bg-gray-700 dark:border">
      <div className="flex justify-center py-2 items-center border-b">
        <label>Search:</label>
        <input
          className="p-2 mx-4 border rounded w-1/2"
          placeholder="Type here..."
        ></input>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        <Coin /> <Coin /> <Coin /> <Coin /> <Coin /> <Coin /> <Coin /> <Coin />
      </div>
    </div>
  );
};

export default CoinsContianer;
