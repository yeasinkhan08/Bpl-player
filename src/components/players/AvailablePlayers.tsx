import type { PlayerType } from "../../Types/playerType";
import { FaFlag } from "react-icons/fa";

export interface AvailablePlayersProps {
  player: PlayerType;
}

export default function AvailablePlayers({ player }: AvailablePlayersProps) {
  console.log(player);

  return (
    <>
      <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative h-56 w-full overflow-hidden bg-gray-100">
          <img
            src={player.playerImg}
            alt={player.playerName}
            className="h-full w-full object-cover object-[center_15%]"
          />

          <div className="absolute right-3 top-3 rounded-lg bg-white px-3 py-1 text-sm font-bold text-gray-900 shadow">
            ৳{player.price.toLocaleString()}
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-900">
            {player.playerName}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <FaFlag className="text-gray-400" />
            <span>{player.origin}</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">
            <div>
              <p className="text-xs text-gray-400">Batting Style</p>
              <p className="mt-1 text-sm font-semibold text-gray-700">
                {player.battingStyle}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Bowling Style</p>
              <p className="mt-1 text-sm font-semibold text-gray-700">
                {player.bowlingStyle}
              </p>
            </div>
          </div>

          <button className="mt-5 w-full rounded-lg bg-lime-400 py-2.5 font-semibold text-gray-900 transition hover:bg-lime-500">
            Select Player
          </button>
        </div>
      </div>
    </>
  );
}
