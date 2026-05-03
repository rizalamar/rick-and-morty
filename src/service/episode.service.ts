import type { EpisodeResponse } from "../@types";
import type { Episodes } from "../@types/episodes.types";
import { api } from "./api";

export const episodeService = {
	getAll: async (page: number = 1): Promise<EpisodeResponse> => {
		return api.get(`/episode`, { params: { page } });
	},
	getById: async (id: number): Promise<Episodes> => {
		return api.get(`/episode/${id}`);
	},
	getMultiple: async (ids: number[]): Promise<Episodes[]> => {
		if (ids.length === 0) return [];
		const data = await api.get<Episodes | Episodes[], Episodes | Episodes[]>(`/episode/${ids.join(",")}`);
		return Array.isArray(data) ? data : [data];
	},
	filter: async (params: { name?: string; status?: string; page?: number }): Promise<EpisodeResponse> => {
		return api.get(`/episode/`, { params });
	},
};
