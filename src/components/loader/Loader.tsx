import { CircularProgress } from "@mui/material";

const Loader = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			}}
		>
			<CircularProgress />
		</div>
	);
};

export default Loader;
