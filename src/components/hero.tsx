import { FaLocationArrow } from "react-icons/fa";
import { Button } from "./ui/button";
import { useState } from "react";

/** 
 * Convert some number betwen `1` and `4`
 * @argument number
 * @returns mod 4 + 1 
**/
const formatNumberBetwenOneToFour =(i:number) =>{
  const TOTAL_VIDEOS = 4
  return (i % TOTAL_VIDEOS + 1)
}

interface ICardVideoProps {
  currentVideoIndex: number,
  setCurrentVideoIndex:  React.Dispatch<React.SetStateAction<number>>,
}


function CardVideo( {currentVideoIndex, setCurrentVideoIndex}: ICardVideoProps ){
  const handleClickVideo = () => {
    setCurrentVideoIndex((prev) => prev + 1);
  };
 


  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] size-64 cursor-pointer overflow-hidden rounded-lg">
    <div className="scale-50 opacity-0 transition-all hover:opacity-100 hover:scale-100 duration-500">
      <video
        onClick={handleClickVideo}
        loop
        muted
        src={`src/assets/video/hero-cut-${formatNumberBetwenOneToFour(currentVideoIndex+1)}.mp4`}
        className=" size-64 origin-center scale-150 object-cover object-center"
      />
    </div>
    </div>
  )
}



export function Hero() {
 const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <section className="relative min-h-screen w-screen">
      <video
        muted
        autoPlay
        loop
        src={`src/assets/video/hero-cut-${formatNumberBetwenOneToFour(currentVideoIndex)}.mp4`}
        // src="src/assets/video/ZENTRY_TRAILER_H264_logo.mp4"
        className="absolute inset-0 size-full object-cover object-center"
      />

      <h1 className="absolute uppercase text-7xl md:text-[10rem] top-20 left-12 text-white font-zentry tracking-wide">
        <span>
          Redefi<span className="special-zentry">N</span>e
        </span>
      </h1>

      <span className="relative top-60 left-12 text-xl text-white">
        Enter the Metageme
        <br />
        Unleash the Play Economy
      </span>

      <Button
        variant="main"
        className="relative top-60 left-12 mt-8 !bg-[#f1ff7e] !p-5"
      >
        <FaLocationArrow className="rotate-45 w-3 mb-[1px]" />
        <span className="ml-1 font-bold md:text-xs text-[8px] uppercase">
          Watch Trailer
        </span>
      </Button>

      <h1 className="absolute uppercase text-7xl md:text-[10rem] bottom-20 right-12 text-white font-zentry">
        <span>
          G<span className="special-zentry">a</span>ming
        </span>
      </h1>

      <CardVideo  currentVideoIndex={currentVideoIndex} setCurrentVideoIndex={setCurrentVideoIndex} />


    </section>
  );
}
