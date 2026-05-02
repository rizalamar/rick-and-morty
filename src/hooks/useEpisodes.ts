import { useEffect, useState } from "react";
import type { EpisodeResponse } from "../@types";
import { episodeService } from "../service/episode.service";

export const useEpisodes = (page: number) => {
	const [data, setData] = useState<EpisodeResponse | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await episodeService.getAll(page);
				setData(response);
				setError(null);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [page]);

	return { data, loading, error };
};
