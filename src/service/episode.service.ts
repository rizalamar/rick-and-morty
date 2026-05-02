import type { EpisodeResponse } from "../@types";
import { api } from "./api";

export const episodeService = {
	getAll: async (page: number = 1): Promise<EpisodeResponse> => {
		return api.get(`/episode`, { params: { page } });
	},
};
