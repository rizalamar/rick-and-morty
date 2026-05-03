import { useEffect, useState } from "react";
import type { EpisodeResponse } from "../@types";
import { episodeService } from "../service/episode.service";
import type { FilterParams } from "../@types/filter.types";

export const useEpisodes = (params: FilterParams = { page: 1 }) => {
	const [data, setData] = useState<EpisodeResponse | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await episodeService.filter(params);
				setData(response);
				setError(null);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [params.name, params.page, params.status]);

	return { data, loading, error };
};
