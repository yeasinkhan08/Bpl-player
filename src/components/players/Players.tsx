import { use } from "react";
import type { PlayerType } from "../../Types/playerType";
import AvailablePlayers from "./AvailablePlayers";

export interface PlayersProps {
  playersPromise: Promise<PlayerType[]>;
}

export default function Players({ playersPromise }: PlayersProps) {
  const players = use(playersPromise);

  return (
    <>
      <div className="flex justify-between gap-4 mb-2 container mx-auto">
        <h2 className="font-bold text-xl">Available Players</h2>

        <div>
          <button className="btn btn-success">Available</button>
          <button className="btn">Selected</button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {players.map((player, index) => (
          <AvailablePlayers key={index} player={player}></AvailablePlayers>
        ))}
      </div>
    </>
  );
}
