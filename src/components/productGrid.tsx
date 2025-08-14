import { FaLocationArrow } from "react-icons/fa";

export function PrductGrid (){
  return(
    <section className="text-white bg-zinc-950 font-medium text-[1.2rem] px-40 grid grid-cols-2">
      {/* <div className="py-40 leading-5 flex gap-1 flex-col">
        <p>Explore the Zentry Universe</p>
        <span className="text-gray-600 text-[1.15rem]">Immerse yourself in an IP-rich product universe where <br/>players, agentic AI and blockchain lead the new <br/>economic paradigm.</span>
      </div> */}

      {/* Product Grid item  */}
      <div className="border relative border-zinc-600 h-full">
        <video src="src/assets/video/radiant_desktop_homepage_v9.mp4" autoPlay  loop muted/>

        {/* Top text */}
        <div className="absolute p-6 top-0">
          <p className="mb-2 text-6xl font-zentry">RADIA<span className="special-zentry">N</span>T</p>
          <p className="text-lg leading-5 text-zinc-300">The game of games app <br/> transforming moments across <br/>Web2 & Web3 titles into rewards</p>
        </div>

        {/* botton text */}
        <div className="m-6 absolute bottom-0 border-1 border-zinc-700 py-2 px-4 bg-zinc-900 rounded-4xl hover:text-zinc-100">
          <p className="flex items-center gap-2 text-xs text-zinc-400">
            <FaLocationArrow  />
            COMING SOON
          </p>
        </div>

      </div>
      {/* Product Grid item  */}
      <div className="border relative border-zinc-600 h-full">
        <video src="src/assets/video/radiant_desktop_homepage_v9.mp4" autoPlay  loop muted/>

        {/* Top text */}
        <div className="absolute p-6 top-0">
          <p className="mb-2 text-6xl font-zentry">RADIA<span className="special-zentry">N</span>T</p>
          <p className="text-lg leading-5 text-zinc-300">The game of games app <br/> transforming moments across <br/>Web2 & Web3 titles into rewards</p>
        </div>

        {/* botton text */}
        <div className="m-6 absolute bottom-0 border-1 border-zinc-700 py-2 px-4 bg-zinc-900 rounded-4xl hover:text-zinc-100">
          <p className="flex items-center gap-2 text-xs text-zinc-400">
            <FaLocationArrow  />
            COMING SOON
          </p>
        </div>

      </div>
    </section>
  )
}