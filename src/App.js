import "./App.css";
import { useEffect, useState } from "react";
import axios, * as others from "axios";
import Coin from "./Coin";
import Navbar from "./component/Navbar";
function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10")
      .then((res) => {
        setListOfCoins(res.data.coins);
      });
  }, []);
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div>
      <Navbar />
    </div>

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
  );
}

export default App;
