import { FaLocationArrow } from "react-icons/fa";
import { Button } from "./ui/button";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

/**
 * Convert some number betwen `1` and `4`
 * @argument number
 * @returns mod 4 + 1
 **/
const formatNumberBetwenOneToFour = (i: number) => {
  const TOTAL_VIDEOS = 4;
  return (i % TOTAL_VIDEOS) + 1;
};


export function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRefAux = useRef<HTMLVideoElement>(null);
  
  const handleClickVideo = () => {
    setCurrentVideoIndex((prev) => prev + 1);
  };

  useGSAP(
    () => {
      const DURATION = 1 // Duração da animação e salto para o video de traz ficar sincronozado

      gsap.set("#next-video", { visibility: "visible" });
      gsap.to("#next-video", {
        width: "100%",
        height: "100%",
        duration: DURATION,
        ease: "power1.inOut",
        onStart: () => {
          nextVideoRef.current?.play();
        },
        onComplete: () => {
          if(nextVideoRefAux.current) {
            nextVideoRefAux.current.src = `src/assets/video/hero-cut-${formatNumberBetwenOneToFour(currentVideoIndex)}.mp4`;
            nextVideoRefAux.current.currentTime =+ DURATION;
          }
        },
      });

      gsap.from("#current-video", {
        scale: 0,
        duration: 1.5,
        ease: "power1.inOut",
      });
    },
    { dependencies: [currentVideoIndex], revertOnUpdate: true }
  );


  return (
    <section className="relative min-h-screen w-screen ">

      <video
        autoPlay
        ref={nextVideoRefAux}
        loop
        className="absolute inset-0 size-full object-cover object-center"
        muted
      />
      <video 
        ref={nextVideoRef}
        src={`src/assets/video/hero-cut-${formatNumberBetwenOneToFour(currentVideoIndex)}.mp4`}
        id="next-video"
        loop
        muted
        className="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  invisible absolute size-64 object-cover object-center"
      />

      <h1 className="absolute uppercase text-7xl md:text-[10rem] top-20 left-12 text-white font-zentry tracking-wide">
        <span>
          Redefi<span className="special-zentry">N</span>e
        </span>
      </h1>

      <span className="relative top-60 left-12 text-xl text-white">
        Enter the Metagame
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

      {/* Card video */}
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] size-64 cursor-pointer overflow-hidden rounded-lg">
        <div className="scale-50 opacity-0 transition-all hover:opacity-100 hover:scale-100 duration-500">
          <video
            onClick={handleClickVideo}
            loop
            muted
            id="current-video"
            src={`src/assets/video/hero-cut-${formatNumberBetwenOneToFour(currentVideoIndex+1)}.mp4`}
            className="size-64 origin-center scale-150 object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
