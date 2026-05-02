import CharacterCard from "../components/cards/CharacterCard";
import { Portal } from "../components/common/Portal";
import { useCharacters } from "../hooks/useCharacters";

export const CharacterSection = () => {
	const { data, loading } = useCharacters(1);

	const previewData = data?.results.slice(0, 5);

	return (
		<section className="py-10">
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-2xl font-bold">Characters</h2>
				<button className="px-4 py-2 text-xs font-black uppercase transition-all bg-white border-brutal shadow-brutal active:translate-x-1 active:translate-y-1 active:shadow-none">
					See all characters →
				</button>
			</div>

			{loading ? (
				<div className="grid grid-cols-5 gap-4">
					<Portal />
				</div>
			) : (
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
					{previewData.map((char) => (
						<CharacterCard key={char.id} character={char} />
					))}
				</div>
			)}
		</section>
	);
};
