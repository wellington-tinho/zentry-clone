import gsap from "gsap";
import { useRef, type ReactElement } from "react";
import { FaLocationArrow } from "react-icons/fa";

interface IGridItemProps {
  video?: ReactElement,
  title?: ReactElement,
  text?: ReactElement,
  imageSrc?: string,
  hiddenButton?: boolean,
  className?: string,
}

export function GridItem({video, title, text, hiddenButton=false, className=""}:IGridItemProps) {
  const gridItemRef =  useRef<HTMLDivElement>(null)

  const handleMouseLeave = () => {
    const element = gridItemRef.current;

    if (element) {
      const video = element.querySelector("video")
      if(video && !video.autoplay){
        video.pause()
      }
      
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
    const element = gridItemRef.current;
    if (!element) return;

    const video = element.querySelector("video")
    video && video?.play()

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

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
      ref={gridItemRef} 
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={`border relative border-zinc-700 rounded-2xl ${className}`}
    >
      {video}

      {/* Top text */}
      <div className="absolute p-6 top-0">
        { title } 
        { text }
      </div>

      {/* botton text */}
      { !hiddenButton && 
        (
          <div className="m-6 absolute bottom-0 border-1 border-zinc-700 py-2 px-4 bg-zinc-900 rounded-4xl hover:text-zinc-100">
            <p className="flex items-center gap-2 text-xs text-zinc-400">
              <FaLocationArrow  />
              COMING SOON
            </p>
          </div>
        )
      }

    </div>
  )
}
