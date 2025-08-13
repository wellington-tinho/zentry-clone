
export function PrductGrid (){
  return(
    <section className="text-white bg-zinc-950 font-medium text-[1.2rem] px-52">
    <div className="py-56 leading-5 flex gap-1 flex-col">
      <p>Explore the Zentry Universe</p>
      <span className="text-gray-600 text-[1.15rem]">Immerse yourself in an IP-rich product universe where <br/>players, agentic AI and blockchain lead the new <br/>economic paradigm.</span>
    </div>

    {/* Product Grid item  */}
    <div className="border relative border-zinc-600">
     <video className="absolute" src="src/assets/video/radiant_desktop_homepage_v9.mp4" autoPlay  loop muted/>
      {/* Top text */}
      <div className="absolute p-6">
        <p className="mb-2 text-6xl font-zentry">RADIA<span className="special-zentry">N</span>T</p>
        <p className="text-lg leading-5 text-zinc-300">The game of games app <br/> transforming moments across <br/>Web2 & Web3 titles into rewards</p>
      </div>

    </div>
  </section>
  )
}