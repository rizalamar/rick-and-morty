import { useState } from "react";
import { useCharacters } from "../../hooks/useCharacters";
import Button from "../common/Button";
import { Portal } from "../common/Portal";
import CharacterCard from "../cards/CharacterCard";

export default function CharacterPage() {
	const [page, setPage] = useState(1);
	const { data, loading, error } = useCharacters(page);

	if (error) return <div className="pt-32 text-center text-red-500 font-black">ERROR: {error}</div>;

	return (
		<div className="pt-32 pb-20 container mx-auto px-6">
			<div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
				<h2 className="text-4xl font-black uppercase border-b-4 border-portal">All Characters</h2>

				<div className="flex items-center gap-4">
					<Button size="sm" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
						Prev
					</Button>
					<span className="font-black bg-white border-brutal px-4 py-1 shadow-brutal">PAGE OF {page}</span>
					<Button size="sm" onClick={() => setPage((p) => p + 1)} disabled={!data?.info.next}>
						Next
					</Button>
				</div>
			</div>

			{loading ? (
				<Portal />
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
					{data?.results.map((char) => (
						<CharacterCard key={char.id} character={char} />
					))}
				</div>
			)}
		</div>
	);
}
