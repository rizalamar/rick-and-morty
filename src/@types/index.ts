import type { Characters } from "./characters.types";
import type { Episodes } from "./episodes.types";
import type { Locations } from "./locations.types";

export interface CharacterResponse {
	info: {
		count: number;
		pages: number;
		next: string | null;
		prev: string | null;
	};
	results: Characters[];
}

export interface LocationResponse {
	info: {
		count: number;
		pages: number;
		next: string | null;
		prev: string | null;
	};
	results: Locations[];
}

export interface EpisodeResponse {
	info: {
		count: number;
		pages: number;
		next: string | null;
		prev: string | null;
	};
	results: Episodes[];
}
