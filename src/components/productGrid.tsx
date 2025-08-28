import { DivWithMouseInteractionEffects } from "./ui/divWithMouseInteractionEffects";
import { GridItem } from "./ui/gridItem";
import { useGSAP } from "@gsap/react";
import { AnimatedText } from "./ui/animatedText";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export function PrductGrid (){
  useGSAP(async() => {

     // Aguarda fonts carregarem: minimalista e seguro!
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#top-information",
        start: "center center",
        end: "center center", 
        scrub: true,
        pin: true,
      }
    })

    tl.set("#top-information",{
      color: "#ffffff",
      backgroundColor: "#09090b"
    })
    tl.set("#product-grid",{
      color: "#ffffff",
      backgroundColor: "#09090b"
    })

    tl.to("#top-information",{
      color: "#09090b",
      backgroundColor: "#EDFF66"
    })
    tl.to("#product-grid",{
      color: "#09090b",
      backgroundColor: "#EDFF66"
    })
  },  {revertOnUpdate: true });
  
  return(
    <>
    <section id="product-grid" className="h-full text-white bg-zinc-950 font-medium text-[1.2rem] px-40 py-14">
      <div className="py-36 leading-5 flex gap-1 flex-col">
        <p>Explore the Zentry Universe</p>
        <span className="text-gray-600 text-[1.15rem]">Immerse yourself in an IP-rich product universe where <br/>players, agentic AI and blockchain lead the new <br/>economic paradigm.</span>
      </div>

      {/* Product Grid item  */}
      <DivWithMouseInteractionEffects>
        <GridItem 
          video={<video src="src/assets/video/radiant_desktop_homepage_v9.mp4" className="rounded-2xl w-full h-auto object-contain " loop muted/>}
          title={<p className="mb-2 text-6xl font-zentry">RADIA<span className="special-zentry">N</span>T</p>}
          text={<p className="text-lg leading-5 text-zinc-300">The game of games app <br/> transforming moments across <br/>Web2 & Web3 titles into rewards</p>}
        />
      </DivWithMouseInteractionEffects>

      <div className="grid lg:grid-cols-2 gap-6 my-6 grid-cols-1">
        <DivWithMouseInteractionEffects>
          <GridItem 
            video={<video src="src/assets/video/zigma_desktop_homepage-lg.mp4" className="rounded-2xl w-full h-auto object-cover aspect-square lg:object-contain lg:aspect-auto" loop muted/>}
            title={<p className="mb-2 text-6xl font-zentry">RADIA<span className="special-zentry">N</span>T</p>}
            text={<p className="text-lg leading-5 text-zinc-300">The game of games app <br/> transforming moments across <br/>Web2 & Web3 titles into rewards</p>}
          />
        </DivWithMouseInteractionEffects>

        <div className="flex flex-col justify-between gap-6">
          <DivWithMouseInteractionEffects>
            <GridItem 
              video={<video src="src/assets/video/spectre_desktop_homepage-lg.mp4" className="rounded-2xl w-full h-auto object-contain" loop muted/>}
              title={<p className="mb-2 text-6xl font-zentry">RADIA<span className="special-zentry">N</span>T</p>}
              text={<p className="text-lg leading-5 text-zinc-300">The game of games app <br/> transforming moments across <br/>Web2 & Web3 titles into rewards</p>}
            />
          </DivWithMouseInteractionEffects>

          <DivWithMouseInteractionEffects>
            <GridItem 
              video={<video src="src/assets/video/zoltan_desktop_homepage-lg.mp4" className="rounded-2xl w-full h-auto object-contain" loop muted/>}
              title={<p className="mb-2 text-6xl font-zentry">RADIA<span className="special-zentry">N</span>T</p>}
              text={<p className="text-lg leading-5 text-zinc-300">The game of games app <br/> transforming moments across <br/>Web2 & Web3 titles into rewards</p>}
            />
          </DivWithMouseInteractionEffects>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 my-6 grid-cols-1">
        <DivWithMouseInteractionEffects>
          <GridItem
            className="bg-[#5724ff] lg:h-full aspect-video max-w-full" 
            title={<p className="text-black mb-2 text-6xl font-zentry">M<span className="special-zentry">O</span>RE <br/> CO<span className="special-zentry">M</span>ING <br/> S<span className="special-zentry">OO</span>N.</p> }
            hiddenButton={true}
          />
        </DivWithMouseInteractionEffects>

        <DivWithMouseInteractionEffects>
          <GridItem 
            video={<video src="src/assets/video/trailer-md.mp4" className="rounded-2xl w-full h-auto object-contain" loop muted autoPlay/>}
            hiddenButton={true}
          />
        </DivWithMouseInteractionEffects>
      </div>
    </section>
    <section id="top-information" className="py-10 h-dvh">
      <AnimatedText xAxis={-100} className="p-8 top-0">
        <p className="text-7xl font-zentry">
          the univ<span className="special-zentry">e</span>rse
        </p>
        <p className="text-7xl font-zentry">
          powerd by ZE<span className="special-zentry">n</span>try
        </p>
      </AnimatedText>
    </section>
    </>
  )
}