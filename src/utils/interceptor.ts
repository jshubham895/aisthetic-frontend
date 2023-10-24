import axios from "axios";
import { auth } from "../../firebase";

const setInterceptors = () => {
	axios.interceptors.request.use(
		async (config) => {
			if (auth.currentUser) {
				const token = await auth.currentUser?.getIdToken();
				config.headers["Authorization"] = `Bearer ${token}`;
			}
			return config;
		},
		(error) => Promise.reject(error)
	);

	axios.interceptors.response.use(
		(response) => response,
		async (error) => {
			if (error.response && error.response.data) {
				try {
					const { status } = error.response.data;
					if (status === 401) {
						window.location.href = "/login";
					}
					return Promise.reject(error?.response?.data);
				} catch (err) {
					console.error("setInterceptors -> response -> err", err);
				}
			}
			return Promise.reject(error);
		}
	);
};

export default setInterceptors;
