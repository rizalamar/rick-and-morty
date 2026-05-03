import { useNavigate, useParams } from "react-router-dom";
import { useLocationDetail } from "../../hooks/useLocationDetail";
import { Portal } from "../common/Portal";
import Button from "../common/Button";
import CharacterCard from "../cards/CharacterCard";

export default function LocationDetailPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { location, residents, loading } = useLocationDetail(Number(id));

	if (loading)
		return (
			<div className="pt-40">
				<Portal />
			</div>
		);
	if (!location) return <div className="pt-40 font-black text-center uppercase">PLANET_NOT_FOUND</div>;

	return (
		<div className="container px-6 pt-32 pb-20 mx-auto">
			<Button size="sm" onClick={() => navigate(-1)} className="mb-10">
				← Back
			</Button>

			<div className="relative p-8 mb-16 overflow-hidden bg-white border-brutal shadow-brutal-lg">
				<div className="absolute top-0 right-0 px-4 py-1 text-xs font-black uppercase border-b-2 border-l-2 bg-morty">
					DATA LOG #{location.id}
				</div>

				<p className="mb-2 text-xs font-black tracking-widest uppercase text-rick">Discovery Location</p>
				<h1 className="text-4xl font-black leading-none uppercase md:text-5xl">{location.name}</h1>

				<div className="flex flex-wrap gap-6 pt-2 mt-8 border-t-4">
					<div className="flex flex-col">
						<span className="text-[10px] uppercase text-muted">Type</span>
						<span className="text-xl font-black uppercase">{location.type || "Unknown"}</span>
					</div>
					<div className="flex flex-col">
						<span className="text-[10px] text-muted uppercase ">Dimension</span>
						<span className="text-xl font-black uppercase">{location.dimension || "Unknown"}</span>
					</div>
					<div className="flex flex-col">
						<span className="text-[10px] text-muted uppercase ">Population</span>
						<span className="text-xl font-black uppercase">
							{location.residents.length} {location.residents.length > 1 ? "Entities" : "Entity"}
						</span>
					</div>
				</div>
			</div>

			<div className="space-y-8">
				<div className="flex items-center gap-4">
					<h2 className="text-3xl font-black uppercase">Known Residents</h2>
					<div className="h-2 bg-black grow border-brutal"></div>
				</div>

				{residents.length > 0 ? (
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
						{residents.map((char) => (
							<CharacterCard key={char.id} character={char} />
						))}
					</div>
				) : (
					<div className="p-10 font-bold text-center bg-gray-100 border-brutal">
						No registered entities found at this location.
					</div>
				)}

				{location.residents.length > 20 && (
					<p className="mt-10 text-xs font-black text-center uppercase opacity-40">
						... Showing only first 20 entities detected in this dimension ...
					</p>
				)}
			</div>
		</div>
	);
}
