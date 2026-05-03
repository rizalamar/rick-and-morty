import { useNavigate, useParams } from "react-router-dom";
import { useEpisodeDetail } from "../../hooks/useEpisodeDetail";
import { Portal } from "../common/Portal";
import Button from "../common/Button";
import CharacterCard from "../cards/CharacterCard";

export default function EpisodeDetailPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { episode, cast, loading } = useEpisodeDetail(Number(id));

	if (loading)
		return (
			<div className="pt-40">
				<Portal />
			</div>
		);
	if (!episode) return <div className="pt-40 font-black text-center">LOG_NOT_FOUND</div>;

	return (
		<div className="container px-6 pt-32 pb-20 mx-auto">
			<Button size="sm" onClick={() => navigate(-1)} className="mb-10">
				← Back
			</Button>

			<div className="border-brutal bg-black text-white p-8 md:p-12 shadow-[12px_12px_0px_0px_#97ce4c] mb-16 relative overflow-hidden">
				<div className="absolute px-3 py-1 text-xs font-black text-black top-4 right-4 bg-portal border-brutal rotate-3">
					S0{episode.id}
				</div>

				<div className="space-y-4">
					<p className="font-mono text-sm tracking-widest uppercase text-portal">
						Now Playing / Record #{episode.id}
					</p>
					<h1 className="text-4xl font-black leading-none tracking-tighter text-white uppercase md:text-7xl">
						{episode.name}
					</h1>

					<div className="flex flex-wrap gap-10 pt-10 border-t border-white/50">
						<div className="">
							<p className="text-[10px] font-black uppercase text-portal mb-1">Production Code</p>
							<p className="text-2xl font-black ">{episode.episode}</p>
						</div>

						<div className="">
							<p className="text-[10px] font-black uppercase text-portal mb-1">Release Date</p>
							<p className="text-2xl font-black ">{episode.air_date}</p>
						</div>

						<div className="">
							<p className="text-[10px] font-black uppercase text-portal mb-1">Case Detected</p>
							<p className="text-2xl font-black ">{episode.characters.length} Subjects</p>
						</div>
					</div>
				</div>
			</div>

			<div className="space-y-10">
				<div className="flex items-center gap-4">
					<h2 className="text-3xl font-black uppercase">Featured Cast</h2>
					<div className="h-2 grow bg-portal border-brutal"></div>
				</div>

				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
					{cast.map((char) => (
						<CharacterCard key={char.id} character={char} />
					))}
				</div>

				{episode.characters.length > 20 && (
					<div className="p-6 text-center border-2 border-dashed border-black/20">
						<p className="text-xs font-black uppercase opacity-40">
							... and {episode.characters.length - 20} other characters appeared in this record ...
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
