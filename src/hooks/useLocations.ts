import { useEffect, useState } from "react";
import type { LocationResponse } from "../@types";
import { locationService } from "../service/locations.service";
import type { FilterParams } from "../@types/filter.types";

export const useLocations = (params: FilterParams = { page: 1 }) => {
	const [data, setData] = useState<LocationResponse | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await locationService.filter(params);
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
