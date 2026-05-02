import { Portal } from "./components/common/Portal";
import Navbar from "./components/layout/Navbar";
import { CharacterSection } from "./sections/CharacterSection";
import EpisodeSection from "./sections/EpisodeSection";
import Footer from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { LocationSection } from "./sections/LocationSection";

function App() {
	return (
		<div className="min-h-screen bg-baseBackground">
			<Navbar />

			<main className="container px-4 pt-20 mx-auto">
				<Hero />

				<CharacterSection />
				<LocationSection />
				<EpisodeSection />
				<Portal />
			</main>
			<Footer />

			{/* <div className="flex justify-center gap-4 mt-10 mb-10">
				<button
					onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
					disabled={page === 1}
					className={`px-4 py-2  text-white rounded-2xl  cursor-pointer ${
						page === 1
							? "disabled:bg-gray-300 cursor-not-allowed pointer-events-none"
							: "cursor-pointer bg-blue-500"
					}`}
				>
					Previous
				</button>

				<span className="flex items-center font-bold">
					Page {page} of {data?.info.pages}
				</span>

				<button
					onClick={() => setPage((prev) => prev + 1)}
					disabled={!data?.info.next}
					className="px-4 py-2 text-white bg-blue-500 cursor-pointer rounded-2xl disabled:bg-gray-300"
				>
					Next
				</button>
			</div> */}
		</div>
	);
}

export default App;
