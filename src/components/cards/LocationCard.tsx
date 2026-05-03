import { useNavigate } from "react-router-dom";
import type { Locations } from "../../@types/locations.types";

type LocationProps = {
	location: Locations;
};

export const LocationCard = ({ location }: LocationProps) => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col justify-between p-5 transition-transform bg-white min-w-70 border-brutal shadow-brutal h-44">
			<div>
				<div className="flex items-start justify-between">
					<span className="text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-50 px-2 py-0.5 border-brutal">
						{location.type}
					</span>
				</div>

				<h3 className="mt-3 text-xl font-bold text-gray-800 line-clamp-1">{location.name}</h3>

				<p className="flex items-center gap-1 mt-1 text-xs text-gray-500">
					<span className="italic text-gray-400">Dimension:</span> {location.dimension || "Unknown"}
				</p>
			</div>

			<div className="flex items-center justify-between pt-3 mt-4 border-t border-gray-100">
				<div className="text-xs font-medium text-gray-600">👥 {location.residents.length} Residents</div>
				<button
					className="border-brutal bg-rick px-3 py-1 text-[10px] font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none
      active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
					onClick={() => navigate(`/locations/${location.id}`)}
				>
					Explore
				</button>
			</div>
		</div>
	);
};
