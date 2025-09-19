import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { DivWithMouseInteractionEffects } from "./ui/divWithMouseInteractionEffects";
import { useRef } from "react";

export function Footer(){
  const footerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    // inicia oculta
    gsap.set(".zentry-img", { opacity: 0 });

    // inicia centralizada
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // Atualiza coordenadas do mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // função para mover suavemente a cada frame
    const tickerGaspCallback = () => {
      gsap.to(".zentry-img", {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    // quando mouse entra no footer
    const handleMouseEnter = () => {
      gsap.to(".zentry-img", { opacity: 1, duration: 1 });
      window.addEventListener("mousemove", handleMouseMove);
      gsap.ticker.add(tickerGaspCallback);
    };

    // quando mouse sai do footer
    const handleMouseLeave = () => {
      gsap.to(".zentry-img", { opacity: 0, duration: 1, overwrite: "auto" });
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(tickerGaspCallback);
    };

    // adiciona listeners no footer
    footerRef.current?.addEventListener("mouseenter", handleMouseEnter);
    footerRef.current?.addEventListener("mouseleave", handleMouseLeave);

    // cleanup
    return () => {
      footerRef.current?.removeEventListener("mouseenter", handleMouseEnter);
      footerRef.current?.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(tickerGaspCallback);
    };
  });


  return (
    <footer ref={footerRef} className="bg-linear-to-br from-0% from-[#5542FF] to-100% to-[#b28ef2] h-96 flex items-center justify-around flex-col relative">
      <img src="/zentry-symbol-white.png" alt="icon-zentry" className="w-10 zentry-img fixed pointer-events-none top-0 left-0" />
      <DivWithMouseInteractionEffects className="pt-6" sensitivity={10}>
        <p className="text-9xl font-bold font-zentry">Zentry</p>
      </DivWithMouseInteractionEffects>
      <div className="flex items-center flex-col">
        <p>
           Este projeto não tem vínculo oficial com a Zentry. (Uso educacional)
        </p>
        <p>Desenvolvido por <a href="www.linkedin.com/in/wellington123" className="relative inline-block
         after:content-[''] after:absolute after:left-0 after:bottom-0
         after:h-[2px] after:w-0 after:bg-zinc-800
         after:transition-all after:duration-300
         hover:after:w-full font-medium" target="_blank">Wellington</a></p>
      </div>
    </footer>
  )
}

