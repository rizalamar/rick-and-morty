import type { LocationResponse } from "../@types";
import type { Locations } from "../@types/locations.types";
import { api } from "./api";

export const locationService = {
	getAll: async (page: number = 1): Promise<LocationResponse> => {
		return api.get(`/location`, { params: { page } });
	},
	getById: async (id: number): Promise<Locations> => {
		return api.get(`/location/${id}`);
	},
	filter: async (params: { name?: string; status?: string; page?: number }): Promise<LocationResponse> => {
		return api.get(`/location`, { params });
	},
};
