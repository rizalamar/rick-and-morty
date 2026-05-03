import { useEffect, useState } from "react";
import type { Episodes } from "../@types/episodes.types";
import type { Characters } from "../@types/characters.types";
import { episodeService } from "../service/episode.service";
import { characterService } from "../service/character.service";

export const useEpisodeDetail = (id: number | undefined) => {
	const [episode, setEpisode] = useState<Episodes | null>(null);
	const [cast, setCast] = useState<Characters[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!id) return;
		const fetchEpisodeDetail = async () => {
			try {
				setLoading(true);
				const epData = await episodeService.getById(id);
				setEpisode(epData);

				const charIds = epData.characters.map((url) => Number(url.split("/").pop()));

				if (charIds.length > 0) {
					const charData = await characterService.getMultiple(charIds.slice(0, 20));
					setCast(charData);
				}
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchEpisodeDetail();
	}, [id]);

	return { episode, cast, loading, error };
};
