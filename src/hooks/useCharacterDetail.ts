import { useEffect, useState } from "react";
import type { Characters } from "../@types/characters.types";
import { characterService } from "../service/character.service";

export const useCharacterDetail = (id: number) => {
	const [data, setData] = useState<Characters | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!id) return;

		const fetchCharDetail = async () => {
			try {
				setLoading(true);
				const response = await characterService.getById(id);
				setData(response);
				setError(null);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchCharDetail();
	}, [id]);

	return { data, loading, error };
};
