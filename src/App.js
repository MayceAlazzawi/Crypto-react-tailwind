import "./App.css";
import { useEffect, useState } from "react";
import axios, * as others from "axios";
import Coin from "./component/Coin";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import CoinsContianer from "./component/CoinsContianer";
function App() {
  const [listOfCoins, setListOfCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10")
      .then((res) => {
        setListOfCoins(res.data.coins);
      });
  }, []);

  return (
    <div className="h-screen w-full ">
      <Navbar />
      <Hero />
      <CoinsContianer listOfCoins={listOfCoins} />
    </div>
  );
}

export default App;
