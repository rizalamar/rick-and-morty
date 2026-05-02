import { useNavigate } from "react-router-dom";
import type { Characters } from "../../@types/characters.types";

type CharacterProps = {
	character: Characters;
};

export default function CharacterCard({ character }: CharacterProps) {
	const navigate = useNavigate();
	return (
		<div
			className="overflow-hidden transition-all bg-white shadow-brutal-lg border-brutal active:shadow-none active:translate-x-1 active:translate-y-1 group cursor-pointer"
			onClick={() => navigate(`/characters/${character.id}`)}
		>
			<div className="p-1 overflow-hidden border-b-2 border-black">
				<img src={character.image} alt={character.name} className="w-full aspect-square" />
			</div>
			<div className="p-4 bg-portal">
				<h3 className="text-xl font-bold truncate ">{character.name}</h3>
				<div className="flex items-end justify-between mt-3">
					<span
						className={`border-brutal bg-white px-2 py-0.5 text-xs font-bold uppercase ${
							character.status.toLocaleLowerCase() === "alive" ? "text-green-600" : "text-red-500"
						}`}
					>
						{character.status}
					</span>
					<span className="text-[10px] font-black opacity-70 uppercase tracking-tighter">
						{character.species}
					</span>
				</div>
			</div>
		</div>
	);
}
