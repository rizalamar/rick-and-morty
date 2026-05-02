import { useNavigate } from "react-router-dom";
import { LocationCard } from "../components/cards/LocationCard";
import Button from "../components/common/Button";
import { Portal } from "../components/common/Portal";
import { useLocations } from "../hooks/useLocations";

export const LocationSection = () => {
	const navigate = useNavigate();
	const { data, loading, error } = useLocations(1);

	const previewData = data?.results?.slice(0, 7);

	if (error) return null;

	return (
		<section className="py-10 border-t-4 border-black">
			<div className="flex items-center justify-between mb-6">
				<div className="">
					<h2 className="text-2xl font-bold">Locations</h2>
					<p className="text-sm text-gray-500">Explore different worlds in the multiverse</p>
				</div>
				<Button size="sm" onClick={() => navigate("/locations")}>
					See all locations →
				</Button>
			</div>

			{loading ? (
				<div className="flex gap-4 overflow-hidden">
					<Portal />
				</div>
			) : (
				<div className="flex gap-4 pb-4 overflow-x-auto no-scrollbar">
					{previewData.map((loc) => (
						<LocationCard key={loc.id} location={loc} />
					))}
				</div>
			)}
		</section>
	);
};
