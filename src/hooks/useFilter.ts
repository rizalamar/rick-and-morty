/* eslint-disable no-prototype-builtins */
import { useSearchParams } from "react-router-dom";

export const useFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const getFilters = () => {
		const filters: Record<string, string> = {};
		searchParams.forEach(([value, key]) => {
			filters[key] = value;
		});
		return filters;
	};

	const updateFilter = (newFilter: Record<string, string | number | undefined>) => {
		const current = getFilters();
		const combinedFilters = { ...current, ...newFilter };

		Object.keys(combinedFilters).forEach((key) => {
			if (!combinedFilters[key]) {
				delete combinedFilters[key];
			}
		});

		const finalPage = newFilter.hasOwnProperty("page") ? newFilter.page?.toString() : "1";

		setSearchParams({
			...combinedFilters,
			page: finalPage || "1",
		});
	};

	return {
		filters: getFilters(),
		updateFilter,
		setSearchParams,
		searchParams,
	};
};
