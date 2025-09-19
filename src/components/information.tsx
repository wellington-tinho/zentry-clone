import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useVideo } from "react-use";
import gsap from "gsap";
import { AnimatedText } from "./ui/animatedText";
import { AccordionScroll } from "./ui/accordionScroll";

// registra o plugin ScrollTrigger no GSAP
gsap.registerPlugin(ScrollTrigger);
interface IInformationProps {
  setIsColorLight: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Information({ setIsColorLight }: IInformationProps) {
  // useVideo retorna [elemento, state, controls, ref]
  const [videoEl, state, _, refVideo] = useVideo({
    src: "/video/Zentry_Token.mp4",
    loop: true,
    className: "absolute right-0 w-2xl bottom-0 object-center top-auto",
    id: "video-information-section",
  });

  useGSAP(() => {
    // Realizar troca de cor do fundo
      gsap.set("#video-information-section", {
        opacity: 0,
      });
      const videoAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#video-information-section",
          start: "top center", // ativa antes de aparecer
          toggleActions: "play none none reverse",
          onEnter: () => setIsColorLight(true),       // scroll descendo, ativa
          onLeaveBack: () => setIsColorLight(false),  // scroll subindo, desativa
        }
      });

      videoAnimation.to("#video-information-section", {
        opacity: 1,
        duration: 1, // <- já deixa fade-in mais suave
        ease: "power2.out"
      });

    const el = refVideo.current as HTMLVideoElement | null;

    const createVideoST = () => {
      if (!el) return;

      el.pause();
      el.currentTime = 0;

      // Proxy para suavizar o currentTime
      const proxy = { t: 0 };

      gsap.to(proxy, {
        t: el.duration,
        ease: "none",
        scrollTrigger: {
          trigger: "#information-section",
          start: "top top",
          end: () => `+=${el.duration * 120}`,// mais espaço de scroll → mais suave
          scrub: 0.5,                         // <- suaviza a transição do tempo (0.5s de atraso)
          pin: true,                          // fixa a section na tela (vídeo fica parado no bottom)
          anticipatePin: 1,                   // suaviza o pin
          onUpdate: () => {
            el.currentTime = proxy.t;
          }
        },
      });
    };

    // garante que só cria o ScrollTrigger depois que o vídeo tiver a duração conhecida
    if (el?.readyState! >= 1 && (state?.duration ?? 0) > 0) {
      createVideoST();
    } else if (el) {
      const onMeta = () => createVideoST();
      el.addEventListener("loadedmetadata", onMeta, { once: true });
      return () => el.removeEventListener("loadedmetadata", onMeta);
    }
  }, { revertOnUpdate: true });


  return (
    <section
      id="information-section"
      className="relative py-10 h-dvh"
    >
      
      <AnimatedText xAxis={-100} className="p-8 top-0 z-10">
        <p className="text-7xl font-zentry">
          the univ<span className="special-zentry">e</span>rse
        </p>
        <p className="text-7xl font-zentry">
          powerd by ZE<span className="special-zentry">n</span>try
        </p>
      </AnimatedText>
      {videoEl}

    <AccordionScroll/>
    </section>
  );
}


