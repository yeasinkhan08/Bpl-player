import { Suspense } from "react";
import Banner from "./components/Banner";
import Navber from "./components/Navber";
import Players from "./components/players/Players";
import type { PlayerType } from "./Types/playerType";
// import AvailablePlayers from "./components/players/AvailablePlayers";

const playersPromise = async (): Promise<PlayerType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Navber />
      </Suspense>

      <Banner />
      <Suspense>
        <Players playersPromise={playersPromise()} />
      </Suspense>
    </>
  );
}

export default App;
