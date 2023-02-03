import React from "react";
import Coin from "./Coin";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const CoinsContianer = ({ listOfCoins, loading }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  if (loading) {
    return <h2>Loading...</h2>;
  }
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

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = listOfCoins.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  const filteredCoins = currentPosts.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      id="coins"
      className="h-4/6 mb-2 rounded-xl bg-white mx-8 mt-[-8px] mb-20 shadow-2xl dark:bg-gray-700 dark:border"
    >
      <div className="flex justify-center py-2 items-center border-b">
        <label>Search:</label>
        <input
          className="p-2 mx-4 border rounded w-1/2"
          placeholder="Type here..."
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <div className="flex flex-col mb-8 h-5/6">
        <div className="flex flex-row  py-2 px-4">
          <div className="flex items-center text-center  w-1/3">
            <span>Name</span>
          </div>
          <div className=" flex items-center justify-center w-1/3">Price</div>
          <div className="flex items-center justify-center w-1/3">Symbol</div>
        </div>
        {filteredCoins.map((coin) => (
          <Coin key={coin.id} coin={coin} />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={listOfCoins.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default CoinsContianer;
