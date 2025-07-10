import { Button } from "./ui/button";
import { FaLocationArrow } from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";



export function NavBar(){
  return (
    <header>
        <nav className="bg-zinc-900 border border-zinc-800 flex justify-between mx-2 rounded-md">
          <div className="flex gap-2 items-center">
            <a className="cursor-pointer" href="/">
              <img className="w-12" src="src/assets/zentry-symbol-white.png" alt="Logo zentry" />
            </a>
            <Button>
              <span className="font-semibold text-xs uppercase">Products</span>
              <FaLocationArrow className="rotate-134 w-3" />
            </Button>
            <Button>
               <span className="font-semibold text-xs uppercase">whitepaper</span>
            </Button>
          </div>

          <div className="flex gap-10 items-center px-8">
            <Button variant="navbar"><span className="font-semibold text-xs uppercase">nexus</span></Button>
            <Button variant="navbar"><span className="font-semibold text-xs uppercase">valt</span></Button>
            <Button variant="navbar"><span className="font-semibold text-xs uppercase">prolog</span></Button>
            <Button variant="navbar"><span className="font-semibold text-xs uppercase">about</span></Button>
            <Button variant="navbar"><span className="font-semibold text-xs uppercase">contact</span></Button>
            <GiSoundWaves className="w-6 h-6 mt-[2px] text-white"/>
            
          </div>


        </nav>
    </header>

  )
}