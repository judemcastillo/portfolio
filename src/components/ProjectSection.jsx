import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import fakeShopGif from "../assets/fakeshop.webp";
import fakeShopThumbnail from "../assets/fakeshop.jpg";
import waldoGif from "../assets/whereswaldo.webp";
import waldoThumbnail from "../assets/whereswaldo.svg";
import yapspaceGif from "../assets/yapspace.webp";
import yapspaceThumbnail from "../assets/yapspace.svg";

export default function ProjectSection() {
	const [hoveredProject, setHoveredProject] = useState(null);
	const hoverTimeout = useRef(null);

	// Clear any queued hover timers when component unmounts
	useEffect(() => {
		return () => {
			if (hoverTimeout.current) {
				clearTimeout(hoverTimeout.current);
			}
		};
	}, []);

	const projects = [
		{
			title: "Yap space",
			link: "https://social-media-clone-snowy.vercel.app/",
			stack: [
				"Next.js",
				"Tailwind CSS",
				"Supabase",
				"Vercel",
				"Socket.io",
				"PostgreSQL",
				"Prisma",
				"Shadcn UI",
			],
			thumbnail: yapspaceThumbnail,
			description: [
				"A full-stack social platform built with the Next.js App Router, showcasing real-time chat, social graph features, and modern UX patterns",
				"Real-time messaging with typing indicators, presence, DMs, group chats, and room membership powered by Socket.IO",
				"Secure authentication via NextAuth (GitHub OAuth and credentials) with role-based access, protected routes, and JWT sessions",
			],
			codeLink: "https://github.com/judemcastillo/social-media-clone",
			gif: yapspaceGif,
		},
		{
			title: "Wheres Waldo",
			link: "https://wheres-waldo-cyan.vercel.app/",
			stack: [
				"React",
				"Vite",
				"Tailwind CSS",
				"Passport (JWT)",
				"Vercel",
				"PostgreSQL",
				"Prisma",
				"Node.js",
				"Express",
			],
			thumbnail: waldoThumbnail,
			description: [
				"A full-stack “Where's Waldo?” game built with React + Vite + Tailwind on the frontend and Node.js + Express + Prisma + PostgreSQL on the backend.",
				"Players can play as Guest or log in, click the image to place a targeting box with a character dropdown, get instant feedback, and race the timer to the leaderboard",
				"Secure authentication via Passport.js with role-based access, admin dashboard, protected routes, and JWT sessions",
			],
			codeLink: "https://github.com/judemcastillo/wheres-waldo",
			gif: waldoGif,
		},
		{
			title: "Fake/Shop - Modern E-Commerce Platform",
			link: "https://e-commerce-shop-self.vercel.app/",
			stack: [
				"React",
				"Tailwind CSS",
				"React Router DOM",
				"Vercel",
				"Framer Motion",
			],
			thumbnail: fakeShopThumbnail,
			description: [
				"Fake/Shop is a sophisticated, fully-responsive e-commerce web application built with modern web technologies.",
				"This project demonstrates advanced React development skills, state management, API integration, and contemporary UI/UX design principles.",
				"Real-time Data: Integration with FakeStore API for dynamic content",
			],
			codeLink: "https://github.com/judemcastillo/e-commerce-shop",
			gif: fakeShopGif,
		},
	];

	return (
		<section
			className="z-30 flex max-h-screen flex-col items-center justify-start gap-10 snap-start px-[7%] py-[5%] h-full"
			id="Projects"
		>
			<div className="flex w-full max-w-[1200px] flex-col items-center gap-3">
				<div className="flex flex-col items-center gap-2">
					<BlurFade inView delay={0.2}>
						<h1 className="sm:text-4xl font-bold text-center text-2xl">
							Projects
						</h1>
					</BlurFade>
					<BlurFade inView delay={0.4}>
						<p className="max-w-2xl text-center text-muted-foreground text-sm sm:text-md">
							Some of the projects I've worked on recently.
						</p>
					</BlurFade>
				</div>
			</div>

			<div className="flex flex-col   space-y-6 h-full overflow-y-scroll no-scrollbar w-full items-center justify-start pt-2 "style={{
				WebkitMaskImage:
					"linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
				maskImage:
					"linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
			}}>
				<BlurFade inView delay={0.6}>
					{projects.map((project, index) => (
						<motion.div className="relative" key={index}>
							<Card className="relative  border-foreground/10 border-2 bg-card/80 backdrop-blur-xl  p-0 max-w-[1200px] mb-3">
								<div className="relative grid gap-6 p-6 sm:p-7 lg:grid-cols-[1.15fr_0.7fr]">
									<div className="flex flex-col gap-4">
										<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
											<div className="flex items-center gap-3">
												<div className="hover:underline cursor-pointer">
													<a
														href={project.link}
														target="_blank"
														rel="noreferrer"
													>
														<h3 className="text-xl font-semibold sm:text-2xl">
															{project.title}
														</h3>
													</a>
												</div>
											</div>
											<div className="sm:relative sm:hidden block pb-4">
												<motion.img
													src={project.thumbnail}
													alt={`${project.title} preview`}
													className="relative z-10 h-full w-full rounded-2xl object-contain"
													animate={{
														opacity: hoveredProject === project.title ? 0 : 1,
													}}
													transition={{ duration: 0.35 }}
												/>

												<AnimatePresence>
													{hoveredProject === project.title && (
														<motion.img
															key={`${project.title}-gif`}
															src={project.gif}
															alt={`${project.title} preview animated`}
															className="absolute inset-0 z-20 h-full w-full rounded-2xl object-contain"
															initial={{ opacity: 0 }}
															animate={{ opacity: 1 }}
															exit={{ opacity: 0 }}
															transition={{ duration: 0.35 }}
														/>
													)}
												</AnimatePresence>
											</div>
											<a
												href={project.codeLink}
												target="_blank"
												rel="noreferrer"
												className="group inline-flex items-center w-fit gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground transition-all duration-200  hover:border-foreground/30 hover:bg-foreground/10"
											>
												<span>Code</span>
												<Github className="size-4 transition-transform duration-200" />
											</a>
										</div>

										<ul className="grid gap-2 text-sm text-muted-foreground">
											{project.description.map((line) => (
												<li key={line} className="flex gap-2 leading-relaxed">
													<span>• {line}</span>
												</li>
											))}
										</ul>

										<div className="flex flex-wrap gap-2 pt-2">
											{project.stack.map((tech) => (
												<Badge
													key={tech}
													variant="outline"
													className="border-foreground/15 bg-background/80 text-foreground/80 backdrop-blur hover:border-foreground/40 hover:text-foreground"
												>
													{tech}
												</Badge>
											))}
										</div>
									</div>

									<div className="relative flex  w-full items-center justify-center ">
										<div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0,_transparent_60%)] blur-xl" />
										<div className="m-auto">
											<a
												href={project.link}
												target="_blank"
												rel="noreferrer"
												className="group relative block overflow-hidden rounded-2xl"
												onMouseEnter={() => {
													if (hoverTimeout.current) {
														clearTimeout(hoverTimeout.current);
													}
													hoverTimeout.current = setTimeout(() => {
														setHoveredProject(project.title);
													}, 500);
												}}
												onMouseLeave={() => {
													if (hoverTimeout.current) {
														clearTimeout(hoverTimeout.current);
													}
													setHoveredProject(null);
												}}
											>
												<div className="sm:relative hidden sm:block">
													<motion.img
														src={project.thumbnail}
														alt={`${project.title} preview`}
														className="relative z-10 h-full w-full rounded-2xl object-contain"
														animate={{
															opacity: hoveredProject === project.title ? 0 : 1,
														}}
														transition={{ duration: 0.35 }}
													/>

													<AnimatePresence>
														{hoveredProject === project.title && (
															<motion.img
																key={`${project.title}-gif`}
																src={project.gif}
																alt={`${project.title} preview animated`}
																className="absolute inset-0 z-20 h-full w-full rounded-2xl object-contain"
																initial={{ opacity: 0 }}
																animate={{ opacity: 1 }}
																exit={{ opacity: 0 }}
																transition={{ duration: 0.35 }}
															/>
														)}
													</AnimatePresence>
												</div>

												<div
													className={`absolute left-3 bottom-3 z-30 flex items-center gap-2 rounded-full bg-foreground/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-background transition-all duration-300 ${
														hoveredProject === project.title
															? "translate-y-0 opacity-100"
															: "translate-y-2 opacity-0"
													}`}
												>
													<span>Visit site</span>
													<ArrowUpRight className="size-4" />
												</div>
											</a>
										</div>
									</div>
								</div>
							</Card>
						</motion.div>
					))}
				</BlurFade>
			</div>
		</section>
	);
}
