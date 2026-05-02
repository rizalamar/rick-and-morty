import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import CharacterPage from "./components/pages/CharacterPage";
import Footer from "./sections/Footer";
import LocationPage from "./components/pages/LocationPage";

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-baseBackground">
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/characters" element={<CharacterPage />} />
					<Route path="/locations" element={<LocationPage />} />
				</Routes>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
