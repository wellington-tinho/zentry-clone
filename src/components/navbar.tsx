import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { FaLocationArrow } from "react-icons/fa";
import { useWindowScroll } from "react-use";

const navBarButtons = [
  { name: "nexus", hasIcon: true },
  { name: "vault", hasIcon: true },
  { name: "prologue" },
  { name: "about" },
  { name: "contact" },
];

const mainBarButtons = [
  { name: "products", hasIcon: true },
  { name: "whitepaper" },
];

export function NavBar() {
  const { y } = useWindowScroll();
  const isBgBlack = y > 0;
  const isHideNavbar = y > 150;
  const zentryMusicAudioElementRef = useRef<HTMLAudioElement>(null);
  const uiSoundAudioElementRef = useRef<HTMLAudioElement>(null);
  const [audioZentryPlaying, setAudioZentryPlaying] = useState(false);

  const toggleSoundZentry = () => {
    setAudioZentryPlaying((prev) => !prev);
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (audioZentryPlaying) {
      zentryMusicAudioElementRef.current?.play();

      // Esperar 72 segundos (60 + 12) antes de trocar o áudio
      timeoutId = setTimeout(() => {
        if (zentryMusicAudioElementRef.current) {
          zentryMusicAudioElementRef.current.src =
            "src/assets/audio/music_loop_1.mp3";
          zentryMusicAudioElementRef.current.play(); // recomeça o novo áudio
        }
      }, (60 + 12) * 1000); // 72 segundos em milissegundos
    } else {
      // Pausar se estiver desligado
      zentryMusicAudioElementRef.current?.pause();
    }

    // Cleanup: cancelar timeout se componente desmontar ou audioZentryPlaying mudar
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [audioZentryPlaying]);

  const playUiSoundAudioElement = () => {
    if (audioZentryPlaying) {
      const startTime = 6;
      if (uiSoundAudioElementRef.current) {
        uiSoundAudioElementRef.current.currentTime = startTime;
        uiSoundAudioElementRef.current.play();
        setTimeout(() => {
          uiSoundAudioElementRef.current?.pause();
        }, 1000);
      }
    }
  };

  return (
    <header id="header">
      <nav
        className={`
          fixed inset-x-0 z-50 flex border-none justify-between mx-2 rounded-md h-16 transition duration-500   
          ${isHideNavbar && "-translate-y-52"} 
          ${isBgBlack && "bg-zinc-900 border border-zinc-800"}
        `}
      >
        {/* Left navbar-items */}
        <div className="flex gap-4 items-center pl-2">
          <a className="cursor-pointer" href="/">
            <img
              className="w-14"
              src="src/assets/zentry-symbol-white.png"
              alt="Logo zentry"
            />
          </a>

          <div className="flex gap-3">
            {mainBarButtons.map((item, index) => (
              <Button key={item.name + index}>
                <span className="font-bold md:text-xs text-[8px] uppercase">
                  {item.name}
                </span>
                {item.hasIcon && (
                  <FaLocationArrow className="rotate-135 w-2 mb-[1px]" />
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Right navbar-items */}
        <div className="flex gap-4 items-center px-8 relative">
          <audio
            src="src/assets/audio/ui.mp3"
            ref={uiSoundAudioElementRef}
            className="hidden"
            hidden
          />
          {navBarButtons.map((item, index) => (
            <Button
              key={item.name + index}
              variant="navbar"
              className="flex gap-2 items-center"
              onMouseEnter={playUiSoundAudioElement}
            >
              <span className="font-bold text-[12px] uppercase">
                {item.name}
              </span>
              {item.hasIcon && <FaLocationArrow className="w-2" />}
            </Button>
          ))}

          <button
            onClick={toggleSoundZentry}
            className="cursor-pointer p-2 flex "
            onMouseEnter={playUiSoundAudioElement}
          >
            <audio
              src="src/assets/audio/music_main.mp3"
              ref={zentryMusicAudioElementRef}
              className="hidden"
              loop
              hidden
            />
            <div className="flex items-center space-x-0.5">
            {[...Array(6)].map((_, index) => {
              const randomDelay = Math.floor(Math.random() * 6 + 1) * 100; // entre 100ms e 600ms

              return (
                <div
                  key={index}
                  className={`h-1 w-px rounded-full bg-white transition-all duration-200 ease-in-out ${
                    audioZentryPlaying ? 'wave h-3' : ''
                  }`}
                  style={{ "--time-delay": `${randomDelay}ms` } as React.CSSProperties}
                ></div>
              );
            })}
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
