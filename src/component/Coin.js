import React from "react";

const Coin = (coin) => {
  return (
    <div className=" w-full">
      {/* <div className="flex flex-wrap items-center justify-center crd rounded-xl bg-white  dark:"> */}
      <div className="shadow p-2 m-2  rounded-xl flex bg-white dark:bg-gray-800 dark:text-white">
        <div className="flex items-center w-1/3 ">
          <img src={coin.coin.icon} className="w-[30px] h-[30px] mr-2 " />
          {coin.coin.name}
        </div>
        <div className=" flex items-center w-1/3 justify-center">
          <h3> {coin.coin.price.toFixed(2)} </h3>
        </div>
        <div className="flex items-center w-1/3 justify-center">
          <h3> {coin.coin.symbol} </h3>
        </div>
      </div>
    </div>
  );
};

export default Coin;

{
  /* <div className="container rounded-xl bg-white ">
<div>1</div>
<div className="flex flex-wrap items-center justify-center">
  <div className="card border-b m-3 flex flex-row w-24">
    <div className="m-2 p-2">
      {/* <img src="" alt="icon" /> */
}
//     </div>
//     <div className="m-2 p-2">
//       <h3>Price:</h3>
//       <h3>Symbol: </h3>
//     </div>
//   </div>
// </div>
// </div> */}
