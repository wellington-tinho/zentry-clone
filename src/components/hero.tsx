
export function Hero() {
  return (
    <section className="relative min-h-screen w-screen">

      <video autoPlay loop muted src="src/assets/video/hero-cut-1.mp4"  className="absolute inset-0 size-full object-cover object-center" />
      <h1 className="absolute uppercase font-bold text-7xl md:text-9xl top-20 left-12 text-white">
        <span>Redefi<b className="font-sans">N</b>e</span>
      </h1>

      <h1 className="absolute uppercase font-bold text-7xl md:text-9xl bottom-20 right-12 text-white">
        <span>G<b className="font-sans">a</b>ming</span>
      </h1>
      {/* <video autoPlay loop muted src="src/assets/video/hero-cut-1.mp4" className="size-64 origin-center scale-150 object-cover object-center" /> */}

      
    </section>
  )
}
