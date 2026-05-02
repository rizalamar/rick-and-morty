import type { CharacterResponse } from "../@types";
import type { Characters } from "../@types/characters.types";
import { api } from "./api";

export const characterService = {
	getAll: async (page: number = 1): Promise<CharacterResponse> => {
		return api.get(`/character`, { params: { page } });
	},
	getById: async (id: number): Promise<Characters> => {
		return api.get(`/character/${id}`);
	},
	getMultiple: async (ids: number[]): Promise<Characters[]> => {
		if (ids.length === 0) return [];
		const data = await api.get<Characters | Characters[], Characters | Characters[]>(`/character/${ids.join(",")}`);
		return Array.isArray(data) ? data : [data];
	},
	filter: async (params: { name?: string; status?: string; page?: number }): Promise<CharacterResponse> => {
		return api.get(`/character`, { params });
	},
};
