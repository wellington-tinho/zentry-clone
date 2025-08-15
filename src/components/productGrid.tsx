import { GridItem } from "./ui/gridItem";

export function PrductGrid (){
  return(
    <section className="text-white bg-zinc-950 font-medium text-[1.2rem] px-40">
      <div className="py-40 leading-5 flex gap-1 flex-col">
        <p>Explore the Zentry Universe</p>
        <span className="text-gray-600 text-[1.15rem]">Immerse yourself in an IP-rich product universe where <br/>players, agentic AI and blockchain lead the new <br/>economic paradigm.</span>
      </div>

      {/* Product Grid item  */}
      <GridItem 
        videoSrc="src/assets/video/radiant_desktop_homepage_v9.mp4"
        title={<p className="mb-2 text-6xl font-zentry">RADIA<span className="special-zentry">N</span>T</p>}
        text={<p className="text-lg leading-5 text-zinc-300">The game of games app <br/> transforming moments across <br/>Web2 & Web3 titles into rewards</p>}
      />

      <div className="grid grid-cols-2 gap-6 my-6">
        <GridItem 
          videoSrc="src/assets/video/zigma_desktop_homepage-lg.mp4"
          title={<p className="mb-2 text-6xl font-zentry">RADIA<span className="special-zentry">N</span>T</p>}
          text={<p className="text-lg leading-5 text-zinc-300">The game of games app <br/> transforming moments across <br/>Web2 & Web3 titles into rewards</p>}
        />
        <div className="flex flex-col justify-between">
          <GridItem 
            videoSrc="src/assets/video/spectre_desktop_homepage-lg.mp4"
            title={<p className="mb-2 text-6xl font-zentry">RADIA<span className="special-zentry">N</span>T</p>}
            text={<p className="text-lg leading-5 text-zinc-300">The game of games app <br/> transforming moments across <br/>Web2 & Web3 titles into rewards</p>}
          />
          <GridItem 
            videoSrc="src/assets/video/zoltan_desktop_homepage-lg.mp4"
            title={<p className="mb-2 text-6xl font-zentry">RADIA<span className="special-zentry">N</span>T</p>}
            text={<p className="text-lg leading-5 text-zinc-300">The game of games app <br/> transforming moments across <br/>Web2 & Web3 titles into rewards</p>}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 my-6">
        <GridItem
          className="bg-[#5724ff]" 
          title={<p className="text-black mb-2 text-6xl font-zentry">M<span className="special-zentry">O</span>RE <br/> CO<span className="special-zentry">M</span>ING <br/> S<span className="special-zentry">OO</span>N.</p> }
          hiddenButton={true}
        />
        <GridItem 
          videoSrc="src/assets/video/trailer-md.mp4"
          hiddenButton={true}
        />
      </div>
    </section>
  )
}