import { type ReactElement } from "react";
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
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const videoEl = e.currentTarget.querySelector("video") as HTMLVideoElement | null;
    if (videoEl && !videoEl.autoplay) {
      videoEl.pause();
    }
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const videoEl = e.currentTarget.querySelector("video") as HTMLVideoElement | null;
    if (videoEl) {
      videoEl.play();
    }
  };


  return (
    <div 
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={`relative border border-zinc-700 rounded-2xl ${className}`}
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
