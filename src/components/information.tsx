import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useVideo } from "react-use";
import gsap from "gsap";
import { AnimatedText } from "./ui/animatedText";

// registra o plugin ScrollTrigger no GSAP
gsap.registerPlugin(ScrollTrigger);

export function Information() {
  // useVideo retorna [elemento, state, controls, ref]
  const [videoEl, state, controls, refVideo] = useVideo({
    src: "src/assets/video/Zentry_Token.mp4",
    loop: true,
    className: "border-4 border-blue-500 absolute right-0 w-2xl bottom-0 object-center top-auto",
    id: "video-information-section",
  });

  useGSAP(() => {
    // 1) Exemplo de troca de cor brusca
    // (aqui está ligado ao vídeo, mas pode ser na section também)
      gsap.set("#video-information-section", {
        color: "#ffffff",
        backgroundColor: "#09090b",
      });
      
      const videoAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#video-information-section",
          start: "top bottom", // ativa antes de aparecer
          markers: true,
        },
      });
      
      videoAnimation.to("#video-information-section", {
        color: "#09090b",
        backgroundColor: "#DFDFF2",
      });

    // 2) Controlar o vídeo com o scroll
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
          markers: { startColor: "black", endColor: "pink" },
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
      className="relative py-10 h-dvh border-4 border-red-500"
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
    </section>
  );
}


