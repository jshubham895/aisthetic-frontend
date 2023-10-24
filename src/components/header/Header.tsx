import Link from "next/link";
import React, { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "./styles.css";

const Header = ({
	homePage = true,
	contactDetails
}: {
	homePage: boolean;
	contactDetails?: { name: string; phone: string; email: string };
}) => {
	const [hideContent, setHideContent] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			if (currentScrollPos <= 0) {
				setHideContent(false);
			} else {
				setHideContent(true);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="navbar-container">
			{homePage ? (
				<div className="contact-group">
					<div className="contact-details">
						<div className={hideContent ? "hidden" : ""}>Call us</div>
						<div>
							<a href={`tel:${contactDetails?.phone}`}>
								{contactDetails?.phone}
							</a>
						</div>
					</div>
					<div className="contact-details">
						<div className={hideContent ? "hidden" : ""}>Write to us</div>
						<div>
							<a href={`mailto:${contactDetails?.email}`}>
								{contactDetails?.email}
							</a>
						</div>
					</div>
				</div>
			) : (
				<Link href="/home" className="back-route">
					<div>
						<KeyboardArrowLeftIcon sx={{ fontWeight: 200 }} />
					</div>
					<div>Back to All Store</div>
				</Link>
			)}
			<div className="book">
				<Link href="/">Book an appointment</Link>
			</div>
		</div>
	);
};

export default Header;
