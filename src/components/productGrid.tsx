import { DivWithMouseInteractionEffects } from "./ui/divWithMouseInteractionEffects";
import { GridItem } from "./ui/gridItem";

export function ProductGrid (){
  return(
    <section id="product-grid" className="h-ful font-medium text-[1.2rem] px-4 sm:px-8 lg:px-16 xl:px-40 py-8 sm:py-12 lg:py-14">
      <div className="py-16 sm:py-24 lg:py-36 leading-5 flex gap-1 flex-col">
        <p className="text-lg sm:text-xl lg:text-[1.2rem]">Explore the Zentry Universe</p>
        <span className="text-gray-600 text-sm sm:text-base lg:text-[1.15rem]">Immerse yourself in an IP-rich product universe where <br className="hidden sm:block"/>players, agentic AI and blockchain lead the new <br className="hidden sm:block"/>economic paradigm.</span>
      </div>

      {/* Product Grid item  */}
      <DivWithMouseInteractionEffects>
        <GridItem 
          video={<video src="/video/radiant_desktop_homepage_v9.mp4" className="rounded-2xl w-full h-auto object-contain " loop muted/>}
          title={<p className="mb-2 text-3xl sm:text-4xl lg:text-6xl font-zentry">RADIA<span className="special-zentry">N</span>T</p>}
          text={<p className="text-sm sm:text-base lg:text-lg leading-5 text-zinc-300">The game of games app <br/> transforming moments across <br/>Web2 & Web3 titles into rewards</p>}
        />
      </DivWithMouseInteractionEffects>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 my-4 sm:my-6 grid-cols-1">
        <DivWithMouseInteractionEffects>
          <GridItem 
            video={<video src="/video/zigma_desktop_homepage-lg.mp4" className="rounded-2xl w-full h-auto object-cover aspect-square lg:object-contain lg:aspect-auto" loop muted/>}
            title={<p className="mb-2 text-3xl sm:text-4xl lg:text-6xl font-zentry">ZIGM<span className="special-zentry">A</span></p>}
            text={<p className="text-sm sm:text-base lg:text-lg leading-5 text-zinc-300">AI-powered gaming companion <br/> transforming moments across <br/>Web2 & Web3 titles into rewards</p>}
          />
        </DivWithMouseInteractionEffects>

        <div className="flex flex-col justify-between gap-4 sm:gap-6">
          <DivWithMouseInteractionEffects>
            <GridItem 
              video={<video src="/video/spectre_desktop_homepage-lg.mp4" className="rounded-2xl w-full h-auto object-contain" loop muted/>}
              title={<p className="mb-2 text-3xl sm:text-4xl lg:text-6xl font-zentry">SPECT<span className="special-zentry">R</span>E</p>}
              text={<p className="text-sm sm:text-base lg:text-lg leading-5 text-zinc-300">The game of games app <br/> transforming moments across <br/>Web2 & Web3 titles into rewards</p>}
            />
          </DivWithMouseInteractionEffects>

          <DivWithMouseInteractionEffects>
            <GridItem 
              video={<video src="/video/zoltan_desktop_homepage-lg.mp4" className="rounded-2xl w-full h-auto object-contain" loop muted/>}
              title={<p className="mb-2 text-3xl sm:text-4xl lg:text-6xl font-zentry">ZOLT<span className="special-zentry">A</span>N</p>}
              text={<p className="text-sm sm:text-base lg:text-lg leading-5 text-zinc-300">The game of games app <br/> transforming moments across <br/>Web2 & Web3 titles into rewards</p>}
            />
          </DivWithMouseInteractionEffects>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 my-4 sm:my-6 grid-cols-1">
        <DivWithMouseInteractionEffects>
          <GridItem
            className="bg-[#5724ff] lg:h-full aspect-video max-w-full" 
            title={<p className="text-black mb-2 text-2xl sm:text-4xl lg:text-6xl font-zentry">M<span className="special-zentry">O</span>RE <br/> CO<span className="special-zentry">M</span>ING <br/> S<span className="special-zentry">OO</span>N.</p> }
            hiddenButton={true}
          />
        </DivWithMouseInteractionEffects>

        <DivWithMouseInteractionEffects>
          <GridItem 
            video={<video src="/video/trailer-md.mp4" className="rounded-2xl w-full h-auto object-contain" loop muted autoPlay/>}
            hiddenButton={true}
          />
        </DivWithMouseInteractionEffects>
      </div>
    </section>
  )
}