
import { type ReactNode, type DetailedHTMLProps, type HTMLAttributes, useRef} from "react";
import gsap from "gsap";

interface IDivWithMouseInteractionEffectsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  children: ReactNode
  sensitivity?: number
}

export function DivWithMouseInteractionEffects({children, sensitivity=1, ...props}:IDivWithMouseInteractionEffectsProps) {
  const cardItemRef = useRef<HTMLDivElement>(null) 
  const handleMouseLeave = () => {
    const element = cardItemRef.current;

    if (element) {
      gsap.to(element, {
        duration: 1,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  const handleMouseMove =  (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    const element = cardItemRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5 * sensitivity;
    const rotateY = ((x - centerX) / centerX) * 5 * sensitivity;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: "power1.inOut",
    });
  };

  return (
    <div 
      ref={cardItemRef} 
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    {...props}>
      {children}
    </div>
  )
}
