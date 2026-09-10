import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../../Types/playerType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

export interface PlayersProps {
  playersPromise: Promise<PlayerType[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

export default function Players({
  playersPromise,
  coin,
  setCoin,
}: PlayersProps) {
  const players = use(playersPromise);
  const [buttonType, setButtonType] = useState("available");
  console.log(buttonType);

  const handleUpdateBtnType = (type: "available" | "selected") => {
    setButtonType(type);
  };

  return (
    <>
      <div className="flex justify-between gap-4 mb-2 container mx-auto">
        <h2 className="font-bold text-xl">
          {buttonType === "available"
            ? "Available Players"
            : "Selected Players"}
        </h2>

        <div>
          <button
            onClick={() => handleUpdateBtnType("available")}
            className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => handleUpdateBtnType("selected")}
            className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {buttonType === "available"
          ? players.map((player) => (
              <AvailablePlayers
                key={player.id}
                player={player}
                coin={coin}
                setCoin={setCoin}
              />
            ))
          : players.map((player) => (
              <SelectedPlayers key={player.id} player={player} />
            ))}
      </div>
    </>
  );
}
