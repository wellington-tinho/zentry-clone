export function AccordionScrool() {



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
            <div className="progress w-0.5 bg-zinc-400 h-7/12 absolute bottom-0 -left-[58px]"></div>
          </span>
        </li>

        <li className="text-sm w-96">
          <div className="font-semibold flex gap-12 text-lg items-center">
            <p className="text-sm">02</p>
            <p className="">Unlocking Economic Opportunity</p>
          </div>
          <span className="hidden relative block ml-16 text-xs text-justify w-auto">
            ZENT is the index for crypto and AI, giving holders access to new markets, agent tokenization, data economies, and protocol rewards, unlocking utility and upside across the industries it powers.
            <div className="w-0.5 bg-black h-full absolute bottom-0 -left-[58px]"></div>
            <div className="progress w-0.5 bg-zinc-400 h-7/12 absolute bottom-0 -left-[58px]"></div>
          </span>
        </li>

        <li className="text-sm w-96">
          <div className="font-semibold flex gap-12 text-lg items-center">
            <p className="text-sm">03</p>
            <p className="">Sharing Value Accrued</p>
          </div>
          <span className="hidden relative block ml-16 text-xs text-justify w-auto">
            ZENT holders benefit from Zentry’s ecosystem growth, capturing value from partnerships, treasury strategy, and real-world participation.
            <div className="w-0.5 bg-black h-full absolute bottom-0 -left-[58px]"></div>
            <div className="progress w-0.5 bg-zinc-400 h-7/12 absolute bottom-0 -left-[58px]"></div>
          </span>
        </li>
      </ul>
  )
}
