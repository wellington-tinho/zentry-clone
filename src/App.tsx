import { Suspense, useState } from "react";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Information } from "./components/information";
import { Intro } from "./components/intro";
import { NavBar } from "./components/navbar";
import { ProductGrid } from "./components/productGrid";

function App() {
	const [isColorLight, setIsColorLight] = useState(false);

	return (
		<Suspense fallback={<>Carregando</>}>
			<div className="min-h-screen w-full overflow-x-hidden bg-[#DFDFF2]">
				<NavBar />
				<main className="w-full">
					<Hero />
					<Intro />
					<div
						className={`w-full ${isColorLight ? "bg-[#DFDFF2] text-[#09090b]" : "bg-zinc-950 text-white"}`}
					>
						<ProductGrid />
						<Information setIsColorLight={setIsColorLight} />
					</div>
				</main>
				<Footer />
			</div>
		</Suspense>
	);
}

export default App;
