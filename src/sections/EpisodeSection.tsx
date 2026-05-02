import EpisodeCard from "../components/cards/EpisodeCard";
import { Portal } from "../components/common/Portal";
import { useEpisodes } from "../hooks/useEpisodes";

export default function EpisodeSection() {
	const { data, loading, error } = useEpisodes(1);

	const previewData = data?.results.slice(0, 6);

	if (error) return null;

	return (
		<div className="py-10 border-t-4 border-black">
			<div className="flex items-center justify-between mb-6">
				<div className="">
					<h2 className="text-2xl font-black">Season Logs</h2>
					<p className="text-sm text-gray-500">Episodes</p>
				</div>
				<button className="px-4 py-2 text-xs font-black uppercase transition-all bg-white border-brutal shadow-brutal active:translate-x-1 active:translate-y-1 active:shadow-none">
					Full Archive →
				</button>
			</div>

			{loading ? (
				<Portal />
			) : (
				<div className="flex gap-4 pb-4 overflow-x-auto no-scrollbar">
					{previewData?.map((ep) => (
						<EpisodeCard key={ep.id} episode={ep} />
					))}
				</div>
			)}
		</div>
	);
}
