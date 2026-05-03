import { useEffect, useState } from "react";
import type { CharacterResponse } from "../@types";
import { characterService } from "../service/character.service";
import type { FilterParams } from "../@types/filter.types";

export const useCharacters = (params: FilterParams = { page: 1 }) => {
	const [data, setData] = useState<CharacterResponse | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await characterService.filter(params);
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
