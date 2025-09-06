import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useVideo } from "react-use";
import gsap from "gsap";
import { AnimatedText } from "./ui/animatedText";

// registra o plugin ScrollTrigger no GSAP
gsap.registerPlugin(ScrollTrigger);
interface IInformationProps {
  setIsColorLight: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Information({ setIsColorLight }: IInformationProps) {
  // useVideo retorna [elemento, state, controls, ref]
  const [videoEl, state, _, refVideo] = useVideo({
    src: "src/assets/video/Zentry_Token.mp4",
    loop: true,
    className: "absolute right-0 w-2xl bottom-0 object-center top-auto",
    id: "video-information-section",
  });

  useGSAP(() => {

    // Realizar troca de cor do fundo
      gsap.set("#video-information-section", {
        opacity:"0",
        duration: 0,
      });
      
      const videoAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#video-information-section",
          start: "top center", // ativa antes de aparecer
          toggleActions: "play none none reverse",
          markers: true,
          onEnter: () => setIsColorLight(true),       // scroll descendo, ativa
          onLeaveBack: () => setIsColorLight(false),  // scroll subindo, desativa
        }
      });

      videoAnimation.to("#video-information-section", {
        opacity:"1",
        duration: 0,
      });

    // Controlar o vídeo com o scroll
    const el = refVideo.current as HTMLVideoElement | null;

    const createVideoST = () => {
      if (!el) return;

      // pausa qualquer autoplay/loop
      el.pause();
      // começa do início sempre que entrar no scroll
      el.currentTime = 0;

      gsap.to(el, {
        currentTime: el.duration, // duração real do vídeo 
        ease: "none",
        scrollTrigger: {
          trigger: "#information-section",
          start: "top top",                   // começa quando section encosta no topo
          end: () => `+=${el.duration * 100}`,// ajusta o scroll proporcional à duração
          scrub: true,                        // vídeo anda junto com o scroll
          pin: true,                          // fixa a section na tela (vídeo fica parado no bottom)
          anticipatePin: 1,                   // suaviza o pin
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

      <div id="accordion-area" className=" p-8 absolute left-0 bottom-0">
        <details>
          <summary>Shaping Zentry Collectively</summary>
          <p>
            ZENT holders shape governance, set direction, and steer the evolution...
          </p>
        </details>

        <details>
          <summary>Unlocking Economic Opportunity</summary>
          <p>
            ZENT is the index for crypto and AI, giving holders access to new markets...
          </p>
        </details>

        <details>
          <summary>Sharing Value Accrued</summary>
          <p>
            ZENT holders benefit from Zentry’s ecosystem growth, capturing value...
          </p>
        </details>
      </div>
    </section>
  );
}


