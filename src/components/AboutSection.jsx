import { useCallback, useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip.jsx";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import automationIcon from "../assets/automation.svg";
import awsIcon from "../assets/aws.svg";
import designIcon from "../assets/design.svg";
import expressIcon from "../assets/express.svg";
import framerMotionIcon from "../assets/framer-motion.svg";
import frontendIcon from "../assets/frontend.svg";
import fullstackIcon from "../assets/fullstack.svg";
import gitIcon from "../assets/git.svg";
import githubIcon from "../assets/github.svg";
import javascriptIcon from "../assets/javascript.svg";
import makeIcon from "../assets/make.svg";
import nextjsIcon from "../assets/nextjs.svg";
import nodejsIcon from "../assets/nodejs.svg";
import postgresqlIcon from "../assets/postgresql.svg";
import prismaIcon from "../assets/prisma.svg";
import reactIcon from "../assets/react.svg";
import shadcnIcon from "../assets/shadcn.png";
import tailwindIcon from "../assets/tailwindcss.svg";
import typescriptIcon from "../assets/typescript.svg";
import wordpressIcon from "../assets/wordpress.svg";
import pythonIcon from "../assets/python.svg";

export default function AboutSection() {
	const skills = [
		{
			name: "JavaScript",
			icon: javascriptIcon,
			category: "language",
		},
		{ name: "React", icon: reactIcon, category: "frontend" },
		{ name: "Python", icon: pythonIcon, category: "language" },
		{
			name: "TypeScript",
			icon: typescriptIcon,
			category: "language",
		},
		{ name: "Node.js", icon: nodejsIcon, category: "backend" },
		{ name: "Next.js", icon: nextjsIcon, category: "frontend" },
		{
			name: "Tailwind CSS",
			icon: tailwindIcon,
			category: "frontend",
		},
		{ name: "Express.js", icon: expressIcon, category: "backend" },
		{
			name: "PostgreSQL",
			icon: postgresqlIcon,
			category: "backend",
		},
		{ name: "Prisma ORM", icon: prismaIcon, category: "backend" },
		{ name: "ShadCN", icon: shadcnIcon, category: "frontend" },
		{ name: "WordPress", icon: wordpressIcon, category: "CMS" },
		{
			name: "GIT",
			icon: gitIcon,
			category: "version control",
		},
		{ name: "AWS", icon: awsIcon, category: "backend" },
		{ name: "Make", icon: makeIcon, category: "automation" },
		{
			name: "GitHub",
			icon: githubIcon,
			category: "version control",
		},
		{
			name: "Framer Motion",
			icon: framerMotionIcon,
			category: "frontend",
		},
	];
	const about = [
		{
			title: "Design",
			description:
				"I design clean, modern, and user-centered interfaces that focus on clarity, accessibility, and a seamless user experience.",
			icon: designIcon,
		},
		{
			title: "Frontend Development",
			description:
				"I build fast, responsive, and optimized UI components using React and Next.js, ensuring smooth performance across devices.",
			icon: frontendIcon,
		},
		{
			title: "Full-Stack",
			description:
				"I create complete end-to-end applications by combining scalable backend services (Node.js, Express, APIs, DBs) with intuitive frontend interfaces.",
			icon: fullstackIcon,
		},
		{
			title: "Automation",
			description:
				"I automate workflows and business processes using Make and AWS Lambda, helping reduce manual tasks and improve operational efficiency.",
			icon: automationIcon,
		},
	];

	const loopCount = 3;
	const marqueeItems = Array.from({ length: loopCount }, () => about).flat();
	const trackRef = useRef(null);
	const activeIndexRef = useRef(0);
	const [isPaused, setIsPaused] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const [selectedCategory, setSelectedCategory] = useState("all");

	const categories = ["all", ...new Set(skills.map((skill) => skill.category))];
	const filteredSkills =
		selectedCategory === "all"
			? skills
			: skills.filter((skill) => skill.category === selectedCategory);

	useEffect(() => {
		const track = trackRef.current;
		if (!track) return undefined;

		const tick = () => {
			if (isPaused) return;
			const loopWidth = track.scrollWidth / loopCount;
			if (!loopWidth) return;
			const next = track.scrollLeft + 0.6;
			track.scrollLeft = next >= loopWidth ? next - loopWidth : next;
		};

		const interval = window.setInterval(tick, 16);
		return () => window.clearInterval(interval);
	}, [isPaused]);

	const handleArrow = (direction) => {
		const track = trackRef.current;
		if (!track) return;
		const shift = track.clientWidth * 0.6 * (direction === "next" ? 1 : -1);
		const loopWidth = track.scrollWidth / loopCount;
		if (!loopWidth) return;
		setIsPaused(true);

		const next = track.scrollLeft + shift;
		const normalized = ((next % loopWidth) + loopWidth) % loopWidth;
		track.scrollTo({ left: normalized, behavior: "smooth" });

		window.setTimeout(() => setIsPaused(false), 800);
	};

	const getItemMetrics = useCallback(() => {
		const track = trackRef.current;
		const card = track?.querySelector("[data-card]");
		if (!track || !card) return null;

		const cardWidth = card.getBoundingClientRect().width;
		const gap =
			Number.parseFloat(getComputedStyle(track).columnGap || "0") || 0;
		const itemWidth = cardWidth + gap;
		const loopWidth = track.scrollWidth / loopCount;

		return { itemWidth, loopWidth };
	}, [loopCount]);

	useEffect(() => {
		const track = trackRef.current;
		if (!track) return undefined;

		let rafId = null;

		const updateActive = () => {
			const metrics = getItemMetrics();
			if (!metrics) return;

			const { itemWidth, loopWidth } = metrics;
			if (!itemWidth || !loopWidth) return;

			const center = track.scrollLeft + track.clientWidth / 2 - itemWidth / 2;
			const normalizedCenter = ((center % loopWidth) + loopWidth) % loopWidth;

			const nextIndex = Math.round(normalizedCenter / itemWidth) % about.length;
			if (nextIndex !== activeIndexRef.current) {
				activeIndexRef.current = nextIndex;
				setActiveIndex(nextIndex);
			}
		};

		const handleScroll = () => {
			if (rafId) return;
			rafId = window.requestAnimationFrame(() => {
				rafId = null;
				updateActive();
			});
		};

		updateActive();
		window.addEventListener("resize", updateActive);
		track.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("resize", updateActive);
			track.removeEventListener("scroll", handleScroll);
			if (rafId) window.cancelAnimationFrame(rafId);
		};
	}, [about.length, getItemMetrics]);

	const handleDotClick = (index) => {
		const track = trackRef.current;
		const metrics = getItemMetrics();
		if (!track || !metrics) return;

		const { itemWidth, loopWidth } = metrics;
		if (!itemWidth || !loopWidth) return;

		const target = index * itemWidth - track.clientWidth / 2 + itemWidth / 2;
		const normalized = ((target % loopWidth) + loopWidth) % loopWidth;

		setIsPaused(true);
		track.scrollTo({ left: normalized, behavior: "smooth" });
		window.setTimeout(() => setIsPaused(false), 800);
	};
	return (
		<section
			className="z-30 flex h-screen flex-col items-center justify-center sm:gap-4 gap-1 snap-start py-[5%] px-[7%] "
			id="Skills"
		>
			<div className=" h-full flex flex-col items-center sm:justify-start sm:gap-5 w-full  justify-center max-w-[1200px] gap-1">
				<div>
					<BlurFade inView delay={0.2}>
						<h1 className="sm:text-4xl font-bold text-center text-2xl">
							What I do
						</h1>
					</BlurFade>
					<BlurFade inView delay={0.4}>
						<p className="w-full text-center text-muted-foreground sm:text-md text-sm max-w-2xl">
							Some of the things I can help you with.
						</p>
					</BlurFade>
				</div>
				<BlurFade inView delay={0.5}>
					<div className="flex flex-col items-center gap-4 w-full sm:max-w-[1200px] max-w-[90vw]">
						<div className="relative w-full overflow-hidden">
							<div
								ref={trackRef}
								onMouseEnter={() => setIsPaused(true)}
								onMouseLeave={() => setIsPaused(false)}
								className="flex w-full flex-nowrap gap-4 overflow-hidden marquee-fade py-5"
							>
								{marqueeItems.map((item, idx) => (
									<Card
										className="z-30 flex flex-col p-6 border-foreground/10 border-2 lg:h-63  lg:w-80 gap-2 flex-shrink-0 transition-opacity duration-200 w-74"
										key={`${item.title}-${idx}`}
										data-card
									>
										<div className="sm:size-10 lg:size-14 sm:flex items-center justify-center transition-all duration-300 size-7 hidden ">
											<img src={item.icon} alt={item.title} />
										</div>

										<div className="w-full flex flex-row items-start justify-between ">
											<h3 className="font-semibold lg:text-[20px] whitespace-break-spaces p-0 m-0 sm:text-[16px] text-[14px]">
												{item.title}
											</h3>
										</div>

										<p className="text-primary dark:text-accent-foreground/60 lg:text-[15px] sm:text-[12px] text-[10px]">
											{item.description}
										</p>
									</Card>
								))}
							</div>

							<button
								type="button"
								onClick={() => handleArrow("prev")}
								className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full shadow-md border opacity-50 border-accent-foreground/20 bg-background/70 p-1.5 sm:p-3 text-sm font-semibold  backdrop-blur hover:bg-background ml-2 hover:opacity-100 cursor-pointer duration-150 transition-all"
								aria-label="Previous"
							>
								<ArrowLeft className="sm:size-5 size-3" />
							</button>
							<button
								type="button"
								onClick={() => handleArrow("next")}
								className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full shadow-md opacity-50 border border-accent-foreground/20 bg-background/70  text-sm font-semibold  p-1.5 sm:p-3 backdrop-blur hover:bg-background mr-2 hover:opacity-100 cursor-pointer duration-150 transition-all"
								aria-label="Next"
							>
								<ArrowRight className="sm:size-5 size-3" />
							</button>
							<div className="mt-2 flex w-full justify-center gap-2 sm:mb-4 mb-1">
								{about.map((item, idx) => (
									<button
										key={item.title}
										type="button"
										onClick={() => handleDotClick(idx)}
										className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
											activeIndex === idx
												? "bg-accent shadow-[0_0_0_4px] shadow-accent/20"
												: "bg-foreground/20 hover:bg-foreground/40"
										}`}
										aria-label={`Go to ${item.title}`}
										aria-pressed={activeIndex === idx}
									/>
								))}
							</div>
						</div>
					</div>
				</BlurFade>
			</div>
			<div className="h-full flex flex-col items-center justify-start sm:gap-5 w-full max-w-[1200px] gap-2">
				<div>
					<BlurFade inView delay={0.6}>
						<h1 className="text-2xl sm:text-4xl font-bold text-center">
							My Tech Stack
						</h1>
					</BlurFade>
					<BlurFade inView delay={0.7}>
						<p className="w-full text-center text-muted-foreground sm:text-md text-sm max-w-2xl">
							The current technologies I use for building awesome web
							applications.
						</p>
					</BlurFade>
				</div>

				<div className="flex flex-col  items-center justify-center w-full sm:gap-3 gap-1">
					<LayoutGroup>
						<div className="flex flex-wrap items-center justify-center gap-2">
							{categories.map((category, idx) => {
								const isActive = category === selectedCategory;
								return (
									<BlurFade inView delay={0.7 + idx * 0.1}>
										<motion.button
											key={category}
											type="button"
											onClick={() => setSelectedCategory(category)}
											className="relative sm:px-4 sm:py-2 sm:text-sm capitalize transition-all duration-200 border-3 border-transparent hover:-translate-y-0.5 cursor-pointer text-xs"
											whileTap={{ scale: 0.97 }}
										>
											{isActive && (
												<motion.span
													layoutId="tab-underline"
													className="absolute left-0 right-0 bottom-0 h-[2px] bg-accent"
													transition={{
														type: "spring",
														stiffness: 300,
														damping: 24,
													}}
												/>
											)}
											<span
												className={
													isActive ? "font-semibold" : "text-foreground/70"
												}
											>
												{category === "all" ? "All" : category}
											</span>
										</motion.button>
									</BlurFade>
								);
							})}
						</div>
					</LayoutGroup>

					<BlurFade
						inView
						delay={1.1}
						className="flex flex-row flex-wrap items-center justify-center  p-3 h-full max-w-[1200px] w-full gap-3 overflow-y-scroll sm:max-h-100 no-scrollbar "
					>
						{filteredSkills.map((skill, idx) => (
							<div
								layout
								key={skill.name}
								className="group flex flex-col items-center justify-center hover:-translate-y-1.5 transition-all duration-200 aspect-square "
							>
								<Tooltip key={skill.name}>
									<TooltipTrigger asChild>
										<div className="group flex flex-col w-full items-center justify-center">
											<Card className="z-30 md:p-3 sm:p-2 p-1 cursor-pointer border-foreground/10 border-2 flex items-center justify-start group-hover:border-accent-foreground/70 transition-all duration-300 group-hover:bg-accent dark:group-hover:bg-accent-foreground rounded-md">
												<div className="size-7 sm:size-7 lg:size-12 flex items-center justify-center sm:grayscale group-hover:grayscale-0 transition-all duration-300 grayscale-0">
													<img
														src={skill.icon}
														alt={skill.name}
														className="object-contain sm:rounded-[10px] rounded-sm"
													/>
												</div>
											</Card>
										</div>
									</TooltipTrigger>
									<TooltipContent>{skill.name}</TooltipContent>
								</Tooltip>
							</div>
						))}
					</BlurFade>
				</div>
			</div>
		</section>
	);
}
