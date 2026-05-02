import EpisodeCard from "../components/cards/EpisodeCard";
import Button from "../components/common/Button";
import { Portal } from "../components/common/Portal";
import { useEpisodes } from "../hooks/useEpisodes";

export default function EpisodeSection() {
	const { data, loading, error } = useEpisodes(1);

	const previewData = data?.results?.slice(0, 6);

	if (error) return null;

	return (
		<div className="py-10 border-t-4 border-black">
			<div className="flex items-center justify-between mb-6">
				<div className="">
					<h2 className="text-2xl font-black">Season Logs</h2>
					<p className="text-sm text-gray-500">Episodes</p>
				</div>
				<Button size="sm">Full Archive →</Button>
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
