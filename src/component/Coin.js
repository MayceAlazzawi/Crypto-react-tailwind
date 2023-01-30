import React from "react";

const Coin = (coin) => {
  return (
    <div className="">
      {/* <div className="flex flex-wrap items-center justify-center crd rounded-xl bg-white  dark:"> */}
      <div className="border rounded-xl flex m-4 bg-white dark:bg-gray-800 dark:text-white">
        <div className="m-4 ">icon</div>
        <div className="m-4 ">name</div>
        <div className="ml-5 m-4 mr-1 ">Price</div>
        <div className="  m-4">name</div>

        {/* <img src={coin.coin.icon} />  */}
        {/* {coin.coin.name} */}
        {/* <h3>Price: {coin.coin.price} </h3> */}
        {/* <h3>Symbol: {coin.coin.symbol} </h3> */}
        {/* </div> */}
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
