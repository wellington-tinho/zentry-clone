import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function AccordionScroll() {
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#accordion-area",
          start: "top center",
          end: "+=900 center",
          scrub: true,
          markers: true, // coloque true para debugar
          toggleActions: "play none none reverse",
        },
      });

      const items = gsap.utils.toArray<HTMLLIElement>("#accordion-area li");

      items.forEach((item) => {
        const progressBar = item.querySelector(".progress"); // barra lateral cinza
        const textSpan = item.querySelector("span"); // texto do item
        textSpan?.classList.add("hidden");

        // Garante que os elementos existem
        if (!progressBar || !textSpan) return;

        tl.to(progressBar, {
          height: 0,
          onStart: () => {
            textSpan.classList.remove("hidden");
            textSpan.classList.add("block");
          },
          onComplete: () => {
            textSpan.classList.remove("block");
            textSpan.classList.add("hidden");
          },
        });
      });
    },
    { revertOnUpdate: true }
  );

  const RemoveHidden = (event: React.MouseEvent<HTMLSpanElement>) => {
    const element = event.currentTarget;
    const textSpan = element.querySelector("span"); // descrição do item
    textSpan!.classList.toggle("hidden");
    textSpan!.classList.toggle("block");
  };

  return (
    <ul
      id="accordion-area"
      className=" p-8 absolute left-0 bottom-0 flex flex-col gap-4"
    >
      <li className="text-sm w-96 cursor-pointer" onClick={RemoveHidden}>
        <div className="font-semibold flex gap-12 text-lg items-center">
          <p className="text-sm">01</p>
          <p className="">Shaping Zentry Collectively</p>
        </div>
        <span className="relative block ml-16 text-xs text-justify w-auto">
          ZENT holders shape governance, set direction, and steer the evolution
          of the Human-Agentic OS, serving as co-architects of a new
          civilization
          <div className="w-0.5 bg-black h-full absolute bottom-0 -left-[58px]"></div>
          <div className="progress w-0.5 bg-zinc-400 h-full absolute bottom-0 -left-[58px]"></div>
        </span>
      </li>

      <li className="text-sm w-96 cursor-pointer" onClick={RemoveHidden}>
        <div className="font-semibold flex gap-12 text-lg items-center">
          <p className="text-sm">02</p>
          <p className="">Unlocking Economic Opportunity</p>
        </div>
        <span className="relative block ml-16 text-xs text-justify w-auto">
          ZENT is the index for crypto and AI, giving holders access to new
          markets, agent tokenization, data economies, and protocol rewards,
          unlocking utility and upside across the industries it powers.
          <div className="w-0.5 bg-black h-full absolute bottom-0 -left-[58px]"></div>
          <div className="progress w-0.5 bg-zinc-400 h-full absolute bottom-0 -left-[58px]"></div>
        </span>
      </li>

      <li className="text-sm w-96 cursor-pointer" onClick={RemoveHidden}>
        <div className="font-semibold flex gap-12 text-lg items-center">
          <p className="text-sm">03</p>
          <p className="">Sharing Value Accrued</p>
        </div>
        <span className="relative block ml-16 text-xs text-justify w-auto">
          ZENT holders benefit from Zentry’s ecosystem growth, capturing value
          from partnerships, treasury strategy, and real-world participation.
          <div className="w-0.5 bg-black h-full absolute bottom-0 -left-[58px]"></div>
          <div className="progress w-0.5 bg-zinc-400 h-full absolute bottom-0 -left-[58px]"></div>
        </span>
      </li>
    </ul>
  );
}
