import { useEffect } from "react";
import { useEpisodes } from "../../hooks/useEpisodes";
import EpisodeCard from "../cards/EpisodeCard";
import Button from "../common/Button";
import { Portal } from "../common/Portal";
import { useFilter } from "../../hooks/useFilter";

export default function EpisodePage() {
	const { filters, setSearchParams, updateFilter } = useFilter();
	const page = Number(filters.page || 1);
	const name = filters.name || "";
	const status = filters.status || "";
	const { data, loading, error } = useEpisodes({ page, name, status });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (error) return <div className="pt-32 font-black text-center text-red-500">ERROR: {error}</div>;

	return (
		<div className="container px-6 pt-32 mx-auto mb-10">
			<div className="flex flex-col items-center justify-between gap-4 mb-10 md:flex-row">
				<div className="text-center md:text-left">
					<h2 className="inline-block text-4xl font-black text-center uppercase border-b-4 md:text-left border-morty">
						World Map
					</h2>
					<p className="mt-2 font-bold text-gray-500">
						Discover all {data?.info.count} locations in multiverse
					</p>
				</div>

				<div className="flex flex-col items-center gap-4 md:items-end md:flex-row">
					{/* Search Input */}
					<div className="flex flex-col w-full gap-1">
						<label className="text-[10px] font-black uppercase ml-1">Search name</label>
						<input
							type="text"
							placeholder="Rick Sanchez..."
							defaultValue={name}
							className="p-3 font-bold transition-colors bg-white outline-none border-brutal shadow-brutal focus:bg-portal/20"
							onKeyDown={(e) => {
								if (e.key === "Enter") updateFilter({ name: e.currentTarget.value });
							}}
						/>
					</div>

					<Button variant="morty" onClick={() => setSearchParams({})}>
						Reset
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

			<div className="flex items-center justify-center gap-4 mt-10">
				<Button size="sm" variant="rick" onClick={() => updateFilter({ page: page - 1 })} disabled={page === 1}>
					Prev
				</Button>
				<span className="px-4 py-1 font-black bg-white border-brutal shadow-brutal">
					PAGE {page} OF {data?.info.pages}
				</span>
				<Button
					size="sm"
					variant="rick"
					onClick={() => updateFilter({ page: page + 1 })}
					disabled={!data?.info.next}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
