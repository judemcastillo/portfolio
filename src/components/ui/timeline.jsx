"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
	const ref = useRef(null);
	const containerRef = useRef(null);
	const itemRefs = useRef([]);
	const [height, setHeight] = useState(0);
	const [activeIndex, setActiveIndex] = useState(0);
	const [lineMax, setLineMax] = useState(0);

	useEffect(() => {
		if (!ref.current) return;
		const resize = () => {
			const blockHeight = ref.current?.getBoundingClientRect().height || 0;
			setHeight(blockHeight);

			const last = itemRefs.current[itemRefs.current.length - 1];
			if (last && ref.current) {
				const offset = last.offsetTop + last.clientHeight *0.339;
				setLineMax(offset);
			}
		};

		resize();
		window.addEventListener("resize", resize);
		return () => window.removeEventListener("resize", resize);
	}, [data.length]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 0%", "end 80%"],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, lineMax || height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0.2, 1]);

	useEffect(() => {
		if (!containerRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (visible[0]) {
					const idx = Number.parseInt(
						visible[0].target.getAttribute("data-index") || "0",
						10,
					);
					setActiveIndex(idx);
				}
			},
			{
				root: containerRef.current,
				threshold: [0.35, 0.6, 0.75],
			},
		);

		itemRefs.current.forEach((el) => el && observer.observe(el));
		return () => observer.disconnect();
	}, [data.length]);

	return (
		<div
			ref={containerRef}
			className="max-h-[78vh] w-full overflow-y-auto no-scrollbar bg-transparent  md:px-10"
			style={{
				WebkitMaskImage:
					"linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
				maskImage:
					"linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
			}}
		>
			<div ref={ref} className="relative mx-auto max-w-7xl pb-12">
				{data.map((item, index) => (
					<div
						key={index}
						data-index={index}
						ref={(el) => (itemRefs.current[index] = el)}
						className="flex justify-start pt-10  md:pt-28"
					>
						<div className="sticky top-28 z-40 flex max-w-xs flex-col items-center self-start md:max-w-sm md:w-full md:flex-row">
							<div className="absolute sm:left-3 left-4.5 flex sm:size-10 size-8 items-center justify-center rounded-full border border-foreground/15 bg-background shadow-[0_0_12px_rgba(0,0,0,0.3)]">
								<div
									className={`h-4 w-4 rounded-full border transition-all duration-300 ${
										activeIndex === index
											? "bg-foreground shadow-[0_0_16px_rgba(99,102,241,0.55)] border-foreground"
											: "bg-muted border-foreground/30"
									}`}
								/>
							</div>
							<h3 className="hidden text-xl font-bold md:block md:pl-20 md:text-4xl">
								{item.title}
							</h3>
						</div>

						<div className="relative w-full sm:pl-20 md:pl-4 pl-16">
							<h3 className="mb-4 block text-left text-2xl font-bold md:hidden">
								{item.title}
							</h3>
							{item.content}{" "}
						</div>
					</div>
				))}

				<div
					style={{
						height: `${lineMax || height}px`,
						WebkitMaskImage:
							"linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
						maskImage:
							"linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
					}}
					className="absolute left-[32px] top-0 w-[3px] overflow-hidden rounded-full bg-black/40"
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0 w-full rounded-full bg-[linear-gradient(to_bottom,#0a0f1a,#1f4fff,#b46bff)] shadow-[0_0_24px_rgba(99,102,241,0.45)]"
					/>
					<motion.div
						style={{
							y: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c6a2ff] blur-[1px] shadow-[0_0_18px_rgba(180,107,255,0.8)]"
					/>
				</div>
			</div>
		</div>
	);
};
