import axios from "axios";

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 10000,
});

/**
 * REQUEST INTERCEPTORS
 * Fokus: Logging & Setup (Meskipun tanpa token)
 */
api.interceptors.request.use(
	(config) => {
		console.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`);
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

/**
 * RESPONSE INTERCEPTORS
 * Fokus: Unwrapping data & Global error handling
 */
api.interceptors.response.use(
	(response) => {
		// Data unwrapping: langsung ambil property data
		return response.data;
	},
	(error) => {
		const message = error.response?.data?.message || "Something went wrong";

		if (error.response?.status === 404) {
			console.warn("Data not found (404)");
		} else if (error.code === "ERR_NETWORK") {
			console.error("Network error, check your internet connection");
		}

		return Promise.reject(message);
	}
);
