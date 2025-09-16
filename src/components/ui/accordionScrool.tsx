import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


export function AccordionScrool({ totalDuration }: { totalDuration: number }) { 
  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLLIElement>("#accordion-area li");
    // duração do video
    const sectionDuration = totalDuration * 120;
    // const slice = sectionDuration / items.length;
    const slice = sectionDuration;
    
    items.forEach((item, i) => {
      const progressBar = item.querySelector(".progress"); // barra lateral cinza
      const textSpan = item.querySelector("span");         // texto do item

      // Garante que os elementos existem
      if (!progressBar || !textSpan) return;

      // Anima a progressBar de 100% (scaleY:1) até 0% (scaleY:0)
      gsap.fromTo(
        progressBar,
        { scaleY: 1, transformOrigin: "bottom center" }, // barra cheia, cresce de baixo p/ cima
        {
          scaleY: 0,                                     // barra vazia
          ease: "none",                                  // sem easing (scroll puro)
          duration:1,
          scrollTrigger: {
            trigger: item,                               // cada <li> é o trigger
            start: "top bottom",                        // inicia quando <li> chega um pouco acima do centro
            // end: "bottom center",                        // termina quando sai do centro
            end: () => `bottom+=${(i + 1) * slice}`,
            scrub: 0.5,                                  // anima ligado ao scroll
            markers: true,                              // coloque true para debugar
            onUpdate: (self) => {
              // Se a animação está completa (barra = 0%)
              if (self.progress === 1) {
                textSpan?.classList.add("hidden");
              } else {
                textSpan?.classList.remove("hidden");
              }
            },
          },
        }
      );
    });
  });


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
            <div className="progress w-0.5 bg-zinc-400 h-full absolute bottom-0 -left-[58px]"></div>
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
            <div className="progress w-0.5 bg-zinc-400 h-full absolute bottom-0 -left-[58px]"></div>
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
            <div className="progress w-0.5 bg-zinc-400 h-full absolute bottom-0 -left-[58px]"></div>
          </span>
        </li>
      </ul>
  )
}
