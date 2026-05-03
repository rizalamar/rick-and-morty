import { useEffect } from "react";
import { useCharacters } from "../../hooks/useCharacters";
import Button from "../common/Button";
import { Portal } from "../common/Portal";
import CharacterCard from "../cards/CharacterCard";
import { useFilter } from "../../hooks/useFilter";

export default function CharacterPage() {
	const { filters, updateFilter, setSearchParams } = useFilter();
	const page = Number(filters.page) || 1;
	const name = filters.name || "";
	const status = filters.status || "";
	const { data, loading, error } = useCharacters({ page, name, status });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (error) return <div className="pt-32 font-black text-center text-red-500">ERROR: {error}</div>;

	return (
		<div className="container px-6 pt-32 mx-auto mb-10">
			<div className="flex flex-col items-center justify-between gap-4 mb-10 md:flex-row">
				<h2 className="text-4xl font-black text-center uppercase border-b-4 border-portal md:text-left">
					Characters Archive
				</h2>

				{/* Filter Bar */}
				<div className="flex flex-col items-center gap-4 md:items-end md:flex-row">
					{/* Search Input */}
					<div className="flex flex-col w-full gap-1 md:w-1/2">
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

					{/* Status Dropdown */}
					<div className="flex flex-col w-full gap-1 md:w-1/4">
						<label className="text-[10px] font-black uppercase ml-1">Status</label>
						<select
							value={status}
							onChange={(e) => updateFilter({ status: e.target.value })}
							className="p-3 font-bold uppercase bg-white outline-none cursor-pointer border-brutal shadow-brutal"
						>
							<option value="">All</option>
							<option value="alive">Alive</option>
							<option value="dead">Dead</option>
							<option value="unknown">Unknown</option>
						</select>
					</div>

					<Button variant="morty" onClick={() => setSearchParams({})}>
						Reset
					</Button>
				</div>
			</div>

			{loading ? (
				<Portal />
			) : error ? (
				<div className="p-10 text-center bg-red-100 border-brutal shadow-brutal">
					<p className="italic font-black text-red-600 uppercase">
						No entities match your search criteria in this dimension.
					</p>
				</div>
			) : (
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
					{data?.results.map((char) => (
						<CharacterCard key={char.id} character={char} />
					))}
				</div>
			)}

			<div className="flex items-center justify-center gap-4 mt-10">
				<Button
					size="sm"
					variant="portal"
					onClick={() => updateFilter({ page: page - 1 })}
					disabled={page === 1}
				>
					Prev
				</Button>
				<span className="px-4 py-1 font-black bg-white border-brutal shadow-brutal">
					PAGE {page} OF {data?.info.pages}
				</span>
				<Button
					size="sm"
					variant="portal"
					onClick={() => updateFilter({ page: page + 1 })}
					disabled={!data?.info.next}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
