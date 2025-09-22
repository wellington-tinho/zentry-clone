import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { FaLocationArrow, FaBars, FaTimes } from "react-icons/fa";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSoundZentry = () => {
    setAudioZentryPlaying((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (audioZentryPlaying) {
      zentryMusicAudioElementRef.current?.play();

      // Esperar 72 segundos (60 + 12) antes de trocar o áudio
      timeoutId = setTimeout(() => {
        if (zentryMusicAudioElementRef.current) {
          zentryMusicAudioElementRef.current.src =
            "/audio/music_loop_1.mp3";
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

  // Fechar menu mobile quando a tela for redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
              src="/zentry-symbol-white.png"
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

        {/* Right navbar-items - Desktop */}
        <div className="hidden lg:flex gap-4 items-center px-8 relative">
          <audio
            src="/audio/ui.mp3"
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
            type="button"
          >
            <audio
              src="/audio/music_main.mp3"
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

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center pr-4">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-300 transition-colors duration-200"
            type="button"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-16 right-0 w-80 h-screen bg-zinc-900 border-l border-zinc-800 z-50 transform transition-transform duration-300 ease-in-out lg:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col p-6 space-y-4">
          {/* Mobile Navigation Items */}
          {navBarButtons.map((item, index) => (
            <Button
              key={item.name + index}
              variant="navbar"
              className="flex gap-2 items-center justify-start w-full"
              onMouseEnter={playUiSoundAudioElement}
              onClick={closeMobileMenu}
            >
              <span className="font-bold text-[14px] uppercase">
                {item.name}
              </span>
              {item.hasIcon && <FaLocationArrow className="w-3" />}
            </Button>
          ))}

          {/* Mobile Audio Control */}
          <div className="flex gap-2 items-center justify-start w-full">
            <button
              onClick={toggleSoundZentry}
              className="cursor-pointer p-4 flex items-center justify-center hover:bg-zinc-800 rounded-md transition-colors duration-200"
              onMouseEnter={playUiSoundAudioElement}
              type="button"
            >
              <audio
                src="/audio/music_main.mp3"
                ref={zentryMusicAudioElementRef}
                className="hidden"
                loop
                hidden
              />
              <div className="flex items-center space-x-1">
                {[...Array(6)].map((_, index) => {
                  const randomDelay = Math.floor(Math.random() * 6 + 1) * 100;

                  return (
                    <div
                      key={index}
                      className={`h-2 w-px rounded-full bg-white transition-all duration-200 ease-in-out ${
                        audioZentryPlaying ? 'wave h-4' : ''
                      }`}
                      style={{ "--time-delay": `${randomDelay}ms` } as React.CSSProperties}
                    />
                  );
                })}
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
