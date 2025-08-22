import { useGSAP } from "@gsap/react";
import { AnimatedText } from "./ui/animatedText";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Information() {
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

    // ${isNewColor ? 'text-white bg-zinc-950' : 'bg-[#EDFF66] text-zinc-950'} `
    tl.set("#top-information",{
      color: "#ffffff",
      backgroundColor: "#09090b"
    })

    tl.to("#top-information",{
      color: "#09090b",
      backgroundColor: "#EDFF66"
    })

  })
  
  return (
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
  )
}
