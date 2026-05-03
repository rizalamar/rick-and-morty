import { useEffect } from "react";
import { useEpisodes } from "../../hooks/useEpisodes";
import EpisodeCard from "../cards/EpisodeCard";
import Button from "../common/Button";
import { Portal } from "../common/Portal";
import { useSearchParams } from "react-router-dom";

export default function EpisodePage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentPage = Number(searchParams.get("page")) || 1;
	const { data, loading, error } = useEpisodes(currentPage);

	const handlePageChange = (newPage: number) => {
		setSearchParams({ page: newPage.toString() });
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (error) return <div className="pt-32 font-black text-center text-red-500">ERROR: {error}</div>;

	return (
		<div className="container px-6 pt-32 mx-auto mb-20">
			<div className="flex flex-col items-center justify-between gap-4 mb-10 md:flex-row">
				<div className="text-center md:text-left">
					<h2 className="inline-block text-4xl font-black uppercase border-b-4 border-morty">World Map</h2>
					<p className="mt-2 font-bold text-gray-500">
						Discover all {data?.info.count} locations in multiverse
					</p>
				</div>

				<div className="flex items-center gap-4">
					<Button
						size="sm"
						variant="rick"
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
					>
						Prev
					</Button>
					<span className="px-4 py-1 font-black bg-white border-brutal shadow-brutal">
						PAGE {currentPage} OF {data?.info.pages}
					</span>
					<Button
						size="sm"
						variant="rick"
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={!data?.info.next}
					>
						Next
					</Button>
				</div>
			</div>

			{loading ? (
				<Portal />
			) : (
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{data?.results.map((ep) => (
						<div key={ep.id} className="h-full">
							<EpisodeCard episode={ep} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}
