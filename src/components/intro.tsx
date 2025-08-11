import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { AnimatedText } from "./ui/animatedText";

gsap.registerPlugin(ScrollTrigger);


export function Intro() {
  const imageCustomHomeIntroRef = useRef<HTMLImageElement>(null)

  const handleMouseLeave = () => {
    const element = imageCustomHomeIntroRef.current;

    if (element) {
      gsap.to(element, {
        duration: 5,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  const MAX_TILT = 25; // graus, seu limite máximo desejado

  const clamp = (value:number, min:number, max:number) => Math.max(min, Math.min(value, max));

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const element = imageCustomHomeIntroRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();

    // Calcula posição do mouse DENTRO do elemento (0 ~ width/height)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Porcentagem em relação ao centro (de -0.25 a 0.25)
    const percentX = ((x / rect.width) - 0.5) * 0.5; // -0.25 (esquerda) a 0.25 (direita)
    const percentY = ((y / rect.height) - 0.5) * 0.5; // -0.25 (topo) a 0.25 (base)


    // Multiplica pelo máximo desejado e clampa entre -MAX_TILT e +MAX_TILT
    const rotateY = clamp(percentX * MAX_TILT, -MAX_TILT, MAX_TILT); // Y controla left/right
    const rotateX = clamp(-percentY * MAX_TILT, -MAX_TILT, MAX_TILT); // X controla up/down (negativo para efeito intuitivo)

    gsap.to(element, {
      duration: 0.2,
      rotateX,
      rotateY,
      transformPerspective: 800,
      ease: "power2.out",
    });
  };

  useGSAP(() => {

     gsap.set("#clip-image-child", {
       clipPath: "polygon(25% 12%, 76% 16%, 83% 66%, 25% 80%)",
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
      clipPath: "polygon(0.1% 0.1%, 100% 0.1%, 100% 100%, 0.1% 100%)",
      webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power1.inOut",
    });
  });


  return (

    <section className="flex items-center flex-col">
      <p className="tracking-wider font-semibold text-[10px] uppercase">
        Welcome to zentry
      </p>

      <div className="py-10">
        <AnimatedText>
            <p className="text-center font-zentry text-6xl md:text-8xl">
              Disc<span className="special-zentry">o</span>ver the world's
            </p>
            <p className="text-center font-zentry text-6xl md:text-8xl">
              Largest shared <span className="special-zentry">A</span>dventures
            </p>
        </AnimatedText>
      </div>

      <div className="relative h-dvh"  id="clip-image">
        <div
          className="absolute z-10 left-1/2 top-0 h-dvh w-dvw origin-center -translate-x-1/2 rounded-3xl"
          id="clip-image-child"
        >
          <img
            src="src/assets/images/custom-home-intro-desktop.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover rounded-3xl"
          />
        </div>
        
          <img
            src="src/assets/images/custom-home-intro.webp"
            alt="Background rocks"
            className="absolute -translate-x-1/2 z-20 size-full min-w-fit object-cover"
            ref={imageCustomHomeIntroRef}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseLeave}
            onMouseEnter={handleMouseLeave}
            onMouseMove={handleMouseMove}
          />


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
