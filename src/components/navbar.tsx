import { Button } from "./ui/button";
import { FaLocationArrow } from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";
import {useWindowScroll} from 'react-use';


const navBarButtons = [
  {name: "nexus", hasIcon: true },
  {name: "vault", hasIcon: true },
  {name: "prologue" },
  {name: "about" },
  {name: "contact" },
]

const mainBarButtons = [
  {name: "products", hasIcon: true },
  {name: "whitepaper" },
]

export function NavBar(){ 
  const { y } = useWindowScroll()
  const isBgBlack = y > 0 

  return (
    <header id="header">
        <nav className={`fixed inset-x-0 z-50 flex border-none justify-between mx-2 rounded-md h-16 transition duration-500 ${isBgBlack && 'bg-zinc-900 border border-zinc-800' }`}>

          <div className="flex gap-4 items-center pl-2">
            <a className="cursor-pointer" href="/">
              <img className="w-14" src="src/assets/zentry-symbol-white.png" alt="Logo zentry" />
            </a>

            <div className="flex gap-3">
              {
                mainBarButtons.map((item, index)=>(
                <Button key={item.name + index}>
                  <span className="font-bold md:text-xs text-[8px] uppercase">{item.name}</span>
                  {item.hasIcon && <FaLocationArrow className="rotate-135 w-2 mb-[1px]" />}
                </Button>
                ))
              } 
            </div>
          </div>

          <div className="flex gap-4 items-center px-8">
            {
              navBarButtons.map((item, index)=>(
                <Button key={item.name + index} variant="navbar" className="flex gap-2 items-center">
                  <span className="font-bold text-[12px] uppercase">{item.name}</span>
                  {item.hasIcon && <FaLocationArrow className="w-2"/>}
                </Button>
              ))
            }
            <GiSoundWaves className="flex cursor-pointer items-center w-6 h-6 mt-[2px] text-white"/>
          </div>

        </nav>
    </header>

  )
}