import { useNavigate } from "react-router-dom";
import CharacterCard from "../components/cards/CharacterCard";
import Button from "../components/common/Button";
import { Portal } from "../components/common/Portal";
import { useCharacters } from "../hooks/useCharacters";

export const CharacterSection = () => {
	const navigate = useNavigate();
	const { data, loading } = useCharacters(1);

	const previewData = data?.results?.slice(0, 5);

	return (
		<section className="py-10">
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-2xl font-bold">Characters</h2>
				<Button size="sm" onClick={() => navigate("/characters")}>
					See all characters →
				</Button>
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
