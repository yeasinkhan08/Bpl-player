import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Navber from "./components/Navber";
import Players from "./components/players/Players";
import type { PlayerType } from "./Types/playerType";
import { ToastContainer } from "react-toastify";
// import AvailablePlayers from "./components/players/AvailablePlayers";

const playersPromise = async (): Promise<PlayerType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [coin, setCoin] = useState(20000);
  return (
    <>
      <Navber coin={coin} />

      <Banner />
      <ToastContainer />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Players
          playersPromise={playersPromise()}
          coin={coin}
          setCoin={setCoin}
        />
      </Suspense>
    </>
  );
}

export default App;
