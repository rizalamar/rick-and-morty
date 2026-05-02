import type { Characters } from "../../@types/characters.types";

type CharacterProps = {
	character: Characters;
};

export default function CharacterCard({ character }: CharacterProps) {
	return (
		<div className="overflow-hidden transition-all bg-white shadow-brutal-lg border-brutal hover:shadow-brutal hover:translate-x-1 hover:translate-y-1 group">
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
