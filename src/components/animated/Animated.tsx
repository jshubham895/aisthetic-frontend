"use client";

import { useEffect, useRef, useState } from "react";
import "./styles.css";

const Animated = ({ children }: { children: React.ReactNode }) => {
	const elementRef = useRef<HTMLDivElement | null>(null);
	const [isAnimated, setIsAnimated] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !isAnimated) {
					if (elementRef.current) {
						elementRef.current.classList.add("fade-in");
					}

					setIsAnimated(true);
				}
			});
		});

		const currentElement = elementRef.current;

		if (currentElement) {
			observer.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				observer.unobserve(currentElement);
			}
		};
	}, [isAnimated]);

	return <div ref={elementRef}>{children}</div>;
};

export default Animated;
