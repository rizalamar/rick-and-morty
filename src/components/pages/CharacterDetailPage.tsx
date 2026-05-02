import { Link, useNavigate, useParams } from "react-router-dom";
import { useCharacterDetail } from "../../hooks/useCharacterDetail";
import { Portal } from "../common/Portal";
import Button from "../common/Button";

export default function CharacterDetailPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { data, loading, error } = useCharacterDetail(Number(id));

	const getIdFromUrl = (url: string) => url.split("/").pop();

	if (loading)
		return (
			<div className="py-20">
				<Portal />
			</div>
		);

	if (error || !data) return <div className="pt-40 font-black text-center">CHARACTER_NOT_FOUND</div>;

	return (
		<div className="container px-6 pt-32 pb-20 mx-auto">
			<Button size="sm" onClick={() => navigate(-1)} className="mb-8">
				← Back
			</Button>

			<div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
				{/* Left:  Visual & Status */}
				<div className="space-y-6 lg:col-span-4">
					<div className="p-1 bg-white border-black border-6 shadow-brutal-lg">
						<img src={data?.image} alt={data?.name} className="object-cover w-full aspect-square" />

						<div className="flex items-center justify-between p-4 text-white bg-black">
							<span className="font-black uppercase">Subject #{data.id}</span>
							<span className="text-[10px] font-bold opacity-80 uppercase">
								{new Date(data.created).toLocaleDateString("en-US", {
									day: "numeric",
									month: "long",
									year: "numeric",
								})}
							</span>
						</div>
					</div>

					<div className={`border-brutal p-6 shadow-brutal bg-white`}>
						<div className="space-y-0.5">
							<p className="pl-1 text-[10px] uppercase tracking-wider text-gray-500 font-bold">name</p>
							<h1 className="text-4xl font-black leading-none uppercase">{data?.name}</h1>
						</div>
						<div className="flex flex-wrap gap-2 mt-4">
							<div className="space-y-0.5">
								<p className="pl-1 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
									status
								</p>
								<span
									className={`border-brutal px-2 py-1 text-xs font-black uppercase ${
										data?.status.toLocaleLowerCase() === "alive" ? "bg-portal" : "bg-red-400"
									}`}
								>
									{data.status}
								</span>
							</div>
							<div className="space-y-0.5">
								<p className="pl-1 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
									species
								</p>
								<span className="px-2 py-1 text-xs font-black uppercase border-brutal bg-rick">
									{data.species}
								</span>
							</div>
							<div className="space-y-0.5">
								<p className="pl-1 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
									gender
								</p>
								<span className="px-2 py-1 text-xs font-black uppercase border-brutal bg-morty">
									{data.gender}
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Right: Detail & Metadata */}
				<div className="space-y-8 lg:col-span-8">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div className="flex flex-col justify-between p-6 bg-white border-brutal shadow-brutal ">
							<div className="">
								<p className="text-[10px] font-black uppercase text-gray-400 mb-1">Origin Planet</p>
								<h3 className="text-2xl font-black leading-tight uppercase">
									{data?.origin?.name || "Unknown"}
								</h3>
							</div>
							{data?.origin?.url && (
								<Link
									to={`/locations/${getIdFromUrl(data?.origin?.url)}`}
									className="self-start mt-4 text-xs font-black underline decoration-2 hover:bg-transparent hover:text-rick bg-rick/50"
								>
									VIEW ORIGIN DATA →
								</Link>
							)}
						</div>

						<div className="flex flex-col justify-between p-6 bg-white border-brutal shadow-brutal ">
							<div className="">
								<p className="text-[10px] font-black uppercase text-gray-400 mb-1">
									Last Known Location
								</p>
								<h3 className="text-2xl font-black leading-tight uppercase">{data?.location.name}</h3>
							</div>
							{data?.location?.url && (
								<Link
									to={`/locations/${getIdFromUrl(data?.location?.url)}`}
									className="self-start mt-4 text-xs font-black underline decoration-2 hover:bg-transparent hover:text-portal bg-portal/50"
								>
									TRACK LOCATION →
								</Link>
							)}
						</div>
					</div>

					{/* Episode Appearance List */}
					<div className="p-6 bg-black border-brutal shadow-brutal">
						<div className="flex items-center justify-between mb-6">
							<h3 className="text-xl font-black uppercase text-portal">Appearance History</h3>
							<span className="text-white text-[10px] font-mono">
								{data.episode.length} LOGS DETECTED
							</span>
						</div>

						<div className="grid grid-cols-4 gap-2 pr-2 overflow-y-auto sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 max-h-60 custom-scrollbar">
							{data?.episode.map((epUrl, index) => {
								const epId = getIdFromUrl(epUrl);
								return (
									<Link
										key={index}
										to={`/episodes/${epId}`}
										className="flex items-center justify-center font-mono text-xs font-bold transition-colors border aspect-square border-white/50 hover:border-portal hover:text-portal text-white/50"
									>
										{epId}
									</Link>
								);
							})}
						</div>
					</div>
					<div className="flex justify-between items-center text-[10px] font-black opacity-50 uppercase">
						<span>
							Record Created:{" "}
							{new Date(data?.created).toLocaleDateString("en-US", {
								day: "numeric",
								month: "long",
								year: "numeric",
							})}
						</span>
						<span>Source: Dimension C-137 Database</span>
					</div>
				</div>
			</div>
		</div>
	);
}
