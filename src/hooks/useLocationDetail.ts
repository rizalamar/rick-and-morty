import { useEffect, useState } from "react";
import type { Locations } from "../@types/locations.types";
import type { Characters } from "../@types/characters.types";
import { locationService } from "../service/locations.service";
import { characterService } from "../service/character.service";

export const useLocationDetail = (id: number | undefined) => {
	const [location, setLocation] = useState<Locations | null>(null);
	const [residents, setResidents] = useState<Characters[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!id) return;
		const fetchLocationDetail = async () => {
			try {
				setLoading(true);
				const locationRes = await locationService.getById(id);
				setLocation(locationRes);

				const residentIds = locationRes.residents.map((url) => Number(url.split("/").pop()));

				if (residentIds.length > 0) {
					const charData = await characterService.getMultiple(residentIds.slice(0, 20));
					setResidents(charData);
				}
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchLocationDetail();
	}, [id]);

	return { location, residents, loading, error };
};
