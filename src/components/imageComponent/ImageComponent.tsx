/* eslint-disable @next/next/no-img-element */
import React, { MouseEventHandler } from "react";
import "./styles.css";

const ImageComponent = ({
	onClick = () => {},
	name = "",
	url = ""
}: {
	onClick?: MouseEventHandler<HTMLDivElement>;
	name: string;
	url: string;
}) => {
	return (
		<div className="image-container" onClick={onClick}>
			<img className="image" src={url} alt="branch-logo" />
			<div className="overlay">
				<div className="overlay-content">{name}</div>
			</div>
		</div>
	);
};

export default ImageComponent;
