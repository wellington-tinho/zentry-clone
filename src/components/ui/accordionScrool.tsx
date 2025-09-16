import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


export function AccordionScrool({ totalDuration = 10 }: { totalDuration: number }) { 

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#accordion-area', 
        start: "top center", 
        end: "+=900 center",
        scrub: true,      // anima ligado ao scroll
        markers: true,    // coloque true para debugar        
      },
    });

    const items = gsap.utils.toArray<HTMLLIElement>("#accordion-area li");
    console.log("🚀 ~ AccordionScrool ~ items:", items)
    
    items.forEach((item, i) => {
      const progressBar = item.querySelector(".progress"); // barra lateral cinza
      const textSpan = item.querySelector("span");         // texto do item

      // Garante que os elementos existem
      if (!progressBar || !textSpan) return;

      tl.to(progressBar, {
        height: 0,
        onStart: () => {
          console.log("textSpan",textSpan);
          textSpan.classList.remove("hidden");
          textSpan.classList.add("block");
        },
        onComplete: () => {
          console.log("textSpan",textSpan);
          textSpan.classList.remove("block");
          textSpan.classList.add("hidden");
        },
      });
    });
  },{revertOnUpdate: true });


  return (
    <ul id="accordion-area" className=" p-8 absolute left-0 bottom-0 flex flex-col gap-4">
        <li className="text-sm w-96">
          <div className="font-semibold flex gap-12 text-lg items-center">
            <p className="text-sm">01</p>
            <p className="">Shaping Zentry Collectively</p>
          </div>
          <span className="relative block ml-16 text-xs text-justify w-auto">
            ZENT holders shape governance, set direction, and steer the evolution of the Human-Agentic OS, serving as co-architects of a new civilization
            <div className="w-0.5 bg-black h-full absolute bottom-0 -left-[58px]"></div>
            <div className="progress w-0.5 bg-zinc-400 h-full scale-y-100 absolute bottom-0 -left-[58px]"></div>
          </span>
        </li>

        <li className="text-sm w-96">
          <div className="font-semibold flex gap-12 text-lg items-center">
            <p className="text-sm">02</p>
            <p className="">Unlocking Economic Opportunity</p>
          </div>
          <span className="hidden relative ml-16 text-xs text-justify w-auto">
            ZENT is the index for crypto and AI, giving holders access to new markets, agent tokenization, data economies, and protocol rewards, unlocking utility and upside across the industries it powers.
            <div className="w-0.5 bg-black h-full absolute bottom-0 -left-[58px]"></div>
            <div className="progress w-0.5 bg-zinc-400 h-full scale-y-100 absolute bottom-0 -left-[58px]"></div>
          </span>
        </li>

        <li className="text-sm w-96">
          <div className="font-semibold flex gap-12 text-lg items-center">
            <p className="text-sm">03</p>
            <p className="">Sharing Value Accrued</p>
          </div>
          <span className="hidden relative ml-16 text-xs text-justify w-auto">
            ZENT holders benefit from Zentry’s ecosystem growth, capturing value from partnerships, treasury strategy, and real-world participation.
            <div className="w-0.5 bg-black h-full absolute bottom-0 -left-[58px]"></div>
            <div className="progress w-0.5 bg-zinc-400 h-full scale-y-100 absolute bottom-0 -left-[58px]"></div>
          </span>
        </li>
      </ul>
  )
}
