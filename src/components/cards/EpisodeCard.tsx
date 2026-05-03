import { useNavigate } from "react-router-dom";
import type { Episodes } from "../../@types/episodes.types";

type EpisodeProps = {
	episode: Episodes;
};

export default function EpisodeCard({ episode }: EpisodeProps) {
	const navigate = useNavigate();

	return (
		<div
			className="p-4 transition-transform bg-white cursor-pointer active:translate-y-1 min-w-70 border-brutal shadow-brutal active:shadow-none active:translate-x-1"
			onClick={() => navigate(`/episodes/${episode.id}`)}
		>
			<div className="bg-black text-portal p-2 font-mono text-[10px] mb-3 border-brutal shadow-[2px_2px_0px_0px_rgba(151,206,76,1)]">
				{episode.episode}
			</div>
			<h3 className="h-12 text-lg italic font-black leading-tight uppercase line-clamp-2">{episode.name}</h3>
			<div className="flex items-center justify-between mt-4">
				<p className="text-[10px] font-bold text-black/50 uppercase">Aired: {episode.air_date}</p>
				<div className="w-6 h-6 border-brutal bg-rick rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
			</div>
		</div>
	);
}
