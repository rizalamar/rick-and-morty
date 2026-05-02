import { useEffect, useState } from "react";
import type { LocationResponse } from "../@types";
import { locationService } from "../service/locations.service";

export const useLocations = (page: number) => {
	const [data, setData] = useState<LocationResponse | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await locationService.getAll(page);
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
