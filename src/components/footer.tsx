import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { DivWithMouseInteractionEffects } from "./ui/divWithMouseInteractionEffects";
import { useRef } from "react";

export function Footer(){
  const footerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    // Centralizar a imagem no cursor
    gsap.set(".zentry-img", { xPercent: -50, yPercent: -50 });

    // incia centralizada
    let mouseX = window.innerWidth / 2; 
    let mouseY = window.innerHeight / 2;

    // atualiza coordenadas
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Quando o mouse sai da janela → esconde
    footerRef.current!.addEventListener("mouseleave", () => {
      gsap.to(".zentry-img", { opacity: 0, duration: 1, overwrite: "auto" });
    });
    footerRef.current!.addEventListener("mouseover", () => {
      gsap.to(".zentry-img", { opacity: 1, duration: 1});
    });

    // usa o ticker do GSAP para animar suavemente a cada frame
    gsap.ticker.add(() => {
      gsap.to(".zentry-img", {
        x: mouseX,
        y: mouseY,
        duration: 0.3, // controla o delay
        ease: "power2.out",
        overwrite: "auto",
      });
    });
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

