import { useEffect, useState } from "react";
import { useLocations } from "../../hooks/useLocations";
import { Portal } from "../common/Portal";
import { LocationCard } from "../cards/LocationCard";
import Button from "../common/Button";

export default function LocationPage() {
	const [page, setPage] = useState(1);
	const { data, loading, error } = useLocations(page);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (error) return <div className="pt-32 text-center text-red-500 font-black">ERROR: {error}</div>;

	return (
		<div className="pt-32 mb-20 container mx-auto px-6">
			<div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
				<div className="">
					<h2 className="text-4xl uppercase font-black border-b-4 border-morty inline-block">World Map</h2>
					<p className="font-bold text-gray-500 mt-2">
						Discover all {data?.info.count} locations in multiverse
					</p>
				</div>

				<div className="flex items-center gap-4">
					<Button
						size="sm"
						variant="morty"
						onClick={() => setPage((p) => Math.max(1, p - 1))}
						disabled={page === 1}
					>
						Prev
					</Button>
					<span className="font-black bg-white border-brutal px-4 py-1 shadow-brutal">
						PAGE {page} OF {data?.info.pages}
					</span>
					<Button size="sm" variant="morty" onClick={() => setPage((p) => p + 1)} disabled={!data?.info.next}>
						Next
					</Button>
				</div>
			</div>

			{loading ? (
				<Portal />
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{data?.results.map((loc) => (
						<div key={loc.id} className="h-full">
							<LocationCard location={loc} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}
