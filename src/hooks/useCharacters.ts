import { useEffect, useState } from "react";
import type { CharacterResponse } from "../@types";
import { characterService } from "../service/character.service";

export const useCharacters = (page: number) => {
	const [data, setData] = useState<CharacterResponse | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await characterService.getAll(page);
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
