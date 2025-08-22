import { type DetailedHTMLProps, type HTMLAttributes, type ReactNode, useRef } from "react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

interface IAnimatedTextProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  children: ReactNode,
  xAxis?: number,
}

export function AnimatedText({ children, xAxis=1000, ...props }: IAnimatedTextProps) {
  const textRef = useRef<HTMLDivElement | null>(null);
  const splitRef = useRef<SplitText | null>(null);

  useGSAP(async() => {
     // Aguarda fonts carregarem: minimalista e seguro!
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    // split/revert sempre que o texto mudar
    splitRef.current?.revert();
    
    // Cria SplitText nas words
    splitRef.current = SplitText.create(textRef.current, {
      type: "words",
    });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center+=150", // dispara quando o topo está 150px abaixo do centro da tela
        end: "center bottom",
        toggleActions: "play none none reverse",
      },
    });

    // Anima as words
    tl.from(splitRef.current.words, {
      x: xAxis,
      opacity: 0,
      duration: 1,
      ease: "power4",
      stagger: 0.04,
      rotationX: -100,
      transformOrigin: "50% 50% -160px",
    });

  },
  {revertOnUpdate: true }
);

  return (
    <div ref={textRef} {...props}>
      {children}
    </div>
  );
}