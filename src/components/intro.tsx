import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


export function Intro() {

  const imageCustomHomeIntroRef = useRef<HTMLImageElement>(null)


  const handleMouseLeave = () => {
    const element = imageCustomHomeIntroRef.current;

    if (element) {
      gsap.to(element, {
        duration: 1,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  const handleMouseMove = (e:MouseEvent) => {
    const { y: verticallyPositionElement } = imageCustomHomeIntroRef.current!.getBoundingClientRect()

    if(verticallyPositionElement == 0) return

    const { clientX, clientY } = e;
    const element = imageCustomHomeIntroRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 100,
      ease: "power1.inOut",
    });
  };


  useGSAP(() => {

     gsap.set("#clip-image", {
      // clipPath: "polygon(20% 1%, 70% 12%, 7% 84%, 24% 100%)",
    });

    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip-image",
        start: "center center",
        end: "+=800 center", 
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

   

    clipAnimation.to("#clip-image-child", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });


  return (
    <section className="flex items-center flex-col">
      <p className="tracking-wider font-semibold text-[10px] uppercase">
        Welcome to zentry
      </p>

      <div className="py-10">
        <p className="text-center font-zentry text-6xl md:text-8xl">
          Disc<span className="special-zentry">o</span>ver the world's
        </p>
        <p className="text-center font-zentry text-6xl md:text-8xl">
          Largest shared <span className="special-zentry">A</span>dventures
        </p>
      </div>

      <div className="relative h-dvh"  id="clip-image">
        <div
          className=" absolute z-10 left-1/2 top-0 h-[60vh] w-96 origin-center -translate-x-1/2 rounded-3xl" 
          id="clip-image-child"
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseLeave}
            onMouseEnter={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
          <img
            ref={imageCustomHomeIntroRef}
            src="src/assets/images/custom-home-intro-desktop.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover rounded-3xl"
          />
        </div>
        <div className="absolute mt-[60vh] w-screen left-1/2 -translate-x-1/2 flex items-center flex-col text-xs">
          <p className="mt-7">
            <b>The Metagame begins—your life, now an epic MMORPG</b>
          </p>
          <p className="text-center text-gray-400">
            Zentry is the unified play layer driving attention and contribution
            <br/>
            through cross-world AI gamification.
          </p>
        </div>
      </div>

    </section>
  );
}
