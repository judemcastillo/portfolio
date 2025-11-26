import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";

const defaultSections = [
	{ id: "About", label: "Intro" },
	{ id: "Skills", label: "Skills" },
	{ id: "Experience", label: "Experience" },
	{ id: "Projects", label: "Projects" },
];

export function StickySideNav({ sections }) {
	const tocSections = useMemo(() => {
		if (!sections || sections.length === 0) {
			return defaultSections;
		}
		return sections;
	}, [sections]);

	const [activeId, setActiveId] = useState(tocSections[0]?.id ?? null);
	const [showLabels, setShowLabels] = useState(true);
	const fadeTimeoutRef = useRef(null);
	const isHoveredRef = useRef(false);

	const clearFadeTimeout = useCallback(() => {
		if (fadeTimeoutRef.current) {
			clearTimeout(fadeTimeoutRef.current);
			fadeTimeoutRef.current = null;
		}
	}, []);

	const scheduleFadeOut = useCallback(() => {
		clearFadeTimeout();
		fadeTimeoutRef.current = setTimeout(() => {
			setShowLabels(false);
		}, 2500);
	}, [clearFadeTimeout]);

	const revealLabels = useCallback(() => {
		clearFadeTimeout();
		setShowLabels(true);
	}, [clearFadeTimeout]);

	const handleMouseEnter = useCallback(() => {
		isHoveredRef.current = true;
		revealLabels();
	}, [revealLabels]);

	const handleMouseLeave = useCallback(() => {
		isHoveredRef.current = false;
		scheduleFadeOut();
	}, [scheduleFadeOut]);

	useEffect(() => {
		if (!tocSections.length) return;
		if (!tocSections.some((section) => section.id === activeId)) {
			setActiveId(tocSections[0].id);
		}
	}, [tocSections, activeId]);

	useEffect(() => {
		if (!tocSections.length) return undefined;

		const sectionVisibility = new Map(
			tocSections.map((section) => [section.id, 0])
		);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					sectionVisibility.set(entry.target.id, entry.intersectionRatio);
				});

				const { id: nextActiveId, ratio } = Array.from(
					sectionVisibility.entries()
				).reduce(
					(currentMax, [id, nextRatio]) => {
						if (nextRatio > currentMax.ratio) {
							return { id, ratio: nextRatio };
						}
						return currentMax;
					},
					{ id: null, ratio: 0 }
				);

				if (nextActiveId && ratio > 0) {
					setActiveId((prev) => (prev === nextActiveId ? prev : nextActiveId));
				}
			},
			{
				rootMargin: "-45% 0px -45% 0px",
				threshold: Array.from({ length: 11 }, (_, index) => index / 10),
			}
		);

		const observedElements = tocSections
			.map((section) => document.getElementById(section.id))
			.filter(Boolean);

		observedElements.forEach((el) => observer.observe(el));

		return () => {
			observedElements.forEach((el) => observer.unobserve(el));
			observer.disconnect();
		};
	}, [tocSections]);

	useEffect(() => {
		revealLabels();
		if (!isHoveredRef.current) {
			scheduleFadeOut();
		}
	}, [activeId, revealLabels, scheduleFadeOut]);

	useEffect(
		() => () => {
			clearFadeTimeout();
		},
		[clearFadeTimeout]
	);

	return (
		<motion.aside
			className="fixed left-0 top-100  h-fit w-48 shrink-0 items-center sm:flex z-200 hidden"
			initial={{ opacity: 0, x: -24 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ type: "spring", stiffness: 210, damping: 26 }}
			role="navigation"
			aria-label="Section navigation"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onFocus={handleMouseEnter}
			onBlur={handleMouseLeave}
		>
			<div className="relative flex w-full flex-col justify-center pl-4 ">
				<span
					className=" absolute left-6 top-0 h-full w-px bg-gray-300 dark:bg-muted translate-x-1/2"
					aria-hidden="true"
				/>
				<ul className="flex flex-col gap-6 text-sm uppercase tracking-[0.25em]">
					{tocSections.map((section) => {
						const isActive = section.id === activeId;

						return (
							<li key={section.id} className="relative">
								<a
									href={`#${section.id}`}
									aria-current={isActive ? "location" : undefined}
									className={`relative flex items-center gap-4 text-left font-semibold transition-colors lg:h-5 text-md h-2 ${
										isActive ? "text-foreground" : "text-muted-foreground"
									}`}
								>
									<span className="relative block h-5 w-5">
										<span className="absolute left-1/2 top-1/2 lg:size-3 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-300 dark:bg-muted" />
										{isActive ? (
											<motion.span
												layoutId="toc-dot"
												className="absolute left-1/2 top-1/2 lg:size-4 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground "
												transition={{
													type: "spring",
													stiffness: 380,
													damping: 28,
												}}
												aria-hidden="true"
											/>
										) : null}
									</span>
									<span
										className={`duration-350 transition-all  lg:text-[15px] text-[10px] ${
											showLabels
												? isActive
													? "opacity-100 scale-120 "
													: "opacity-40 hover:scale-120 "
												: "opacity-0"
										}`}
									>
										{section.label}
									</span>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</motion.aside>
	);
}
