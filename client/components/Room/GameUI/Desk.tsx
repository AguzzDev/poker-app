import { useGame } from "context/Game/GameProvider";
import Image from "next/image";
import { formatChips } from "utils/formatChips";
import { PlayerInTable } from "./PlayerInTable";
import { RoomInterface } from "models";
import { motion } from "framer-motion";

interface RoomProps {
  room: RoomInterface;
}

const DeskComponent = ({ room }: RoomProps) => (
  <div className="relative w-full h-full border-[2rem] md:border-[2.5rem] 1920:border-[3rem] border-primary rounded-full">
    <div className="relative w-full h-full shadow-xl rounded-full bg-secondary border-borderWidth border-accent">
      <div className="absolute w-full -top-12 1920:-top-16">
        <div className="w-max lg:w-1/4 py-2 1920:py-4 mx-auto text-center text-black1 bg-accent rounded-2xl border-2 border-[#debcf6]">
          <h4>Apuesta Total</h4>
          <h5>{formatChips(room?.desk?.totalBid)}</h5>
        </div>
      </div>

      <div className="w-full flex justify-center items-center space-x-1 h-full">
        {room?.desk?.dealer.map(({ id }, i) => (
          <motion.div
            key={`${id}-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: i < 3 ? i / 3 + 0.1 : 0,
            }}
            className="relative cardSize"
          >
            <Image
              src={`/cards/${id}.svg`}
              layout="fill"
              objectFit="contain"
              alt="Carta"
            />
          </motion.div>
        ))}
      </div>

      <div>
        <PlayerInTable
          sit={1}
          position="bottom-10 md:-bottom-5 xl:-bottom-2 -left-16 md:-left-24 lg:-left-32"
          x="left"
          y="bottom"
        />
        <PlayerInTable
          sit={2}
          position="top-10 md:-top-5 xl:-top-2 -left-16 md:-left-24 lg:-left-32"
          x="left"
          y="top"
        />
        <PlayerInTable
          sit={4}
          position="bottom-10 md:-bottom-5 xl:-bottom-2 -right-16 md:-right-24 lg:-right-32"
          x="right"
          y="bottom"
        />
        <PlayerInTable
          sit={3}
          position="top-10 md:-top-5 xl:-top-2 -top-10 -right-16 md:-right-24 lg:-right-32"
          x="right"
          y="top"
        />
      </div>

      <div className="absolute top-0 left-0 flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
        Blind
      </div>
    </div>
  </div>
);

export const Desk = () => {
  const { room } = useGame();
  return (
    <>
      <section className="flex items-center w-[85%] lg:w-3/4 mx-auto h-full pt-10 md:pt-10">
        <DeskComponent room={room} />
      </section>
    </>
  );
};
