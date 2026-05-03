import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import CharacterPage from "./components/pages/CharacterPage";
import Footer from "./sections/Footer";
import LocationPage from "./components/pages/LocationPage";
import EpisodePage from "./components/pages/EpisodePage";
import CharacterDetailPage from "./components/pages/CharacterDetailPage";
import LocationDetailPage from "./components/pages/LocationDetailPage";

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-baseBackground">
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/characters" element={<CharacterPage />} />
					<Route path="/characters/:id" element={<CharacterDetailPage />} />
					<Route path="/locations" element={<LocationPage />} />
					<Route path="/locations/:id" element={<LocationDetailPage />} />
					<Route path="/episodes" element={<EpisodePage />} />
				</Routes>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
