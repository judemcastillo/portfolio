import { useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeProvider } from "./components/theme-provider.jsx";
import { StickySideNav } from "./components/StickySideNav.jsx";
import AnoAI from "@/components/ui/animated-shader-background";
import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import resumePdf from "./assets/Resume.pdf";
import { AnimatedThemeToggleButton } from "@/components/ui/animated-theme-toggle-button";
import AboutSection from "./components/AboutSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import { Button } from "@/components/ui/button.jsx";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { RiArrowDownWideLine } from "react-icons/ri";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip.jsx";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTrigger,
} from "@/components/ui/dialog";
import { TextScramble } from "@/components/ui/text-scramble";

const SECTIONS = [
	{ id: "About", label: "Intro" },
	{ id: "Skills", label: "About me" },
	{ id: "Experience", label: "Experience" },
	{ id: "Projects", label: "Projects" },
];

function App() {
	const scrollContainerRef = useRef(null);

	return (
		<ThemeProvider>
			<div className="relative flex min-h-screen w-screen flex-col overflow-hidden bg-background text-foreground">
				<div className="relative z-30 flex h-screen w-full gap-8">
					<StickySideNav
						sections={SECTIONS}
						scrollContainerRef={scrollContainerRef}
					/>
					<div
						ref={scrollContainerRef}
						className="h-full flex-1 overflow-y-scroll scroll-smooth pr-2 snap-y snap-mandatory"
					>
						<section
							className="relative z-30 flex h-screen flex-col items-center justify-center gap-4 snap-start sm:px-[7%] sm:py-[5%] max-w-[1300px] w-full mx-auto"
							id="About"
						>
							<div className="z-30 m-auto h-screen w-full  md:p-3  flex flex-col justify-center sm:gap-10 md:px-0 px-[15%] gap-4">
								<div className="relative flex flex-row items-center justify-between">
									<BlurFade inView delay={2}>
										<h1 className="md:text-4xl font-bold text-center sm:text-3xl text-xl">
											Hi I'm Jude Castillo
										</h1>
									</BlurFade>
									<BlurFade inView delay={3}>
										<AnimatedThemeToggleButton type="horizontal" />
									</BlurFade>
								</div>
								<div className="flex md:flex-row md:items-start gap-6 md:justify-start w-full flex-col justify-center items-center">
									<motion.img
										className="lg:h-[400px] md:h-[300px] sm:h-[450px] h-[250px] md:w-fit rounded-lg md:object-contain w-full object-cover"
										initial={{ opacity: 0, y: 50 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											type: "spring",
											stiffness: 100,
											damping: 20,
											delay: 2.4,
										}}
										src="src/assets/profile2.jpg"
									></motion.img>
									<div className="flex flex-col md:gap-12 sm:justify-center items-center h-full w-full gap-5 justify-center">
										<motion.div
											className="relative md:text-[40px] lg:text-[55px] font-semibold md:text-left sm:text-[33px] text-[28px] text-center w-full flex items-center justify-center md:justify-start leading-tight"
											initial={{ opacity: 0, y: 20, scale: 0.97 }}
											animate={{ opacity: 1, y: 0, scale: 1 }}
											transition={{
												type: "spring",
												stiffness: 90,
												damping: 12,
												delay: 2.3,
											}}
										>
											<span className="">
												I build{" "}
												<span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-300 bg-clip-text text-transparent">
													web applications
												</span>{" "}
												that work and{" "}
												<span>
													<span className="bg-gradient-to-r from-amber-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
														WOW
													</span>
													🔥
												</span>
											</span>
										</motion.div>
										<div className="w-full">
											<BlurFade inView delay={2.2}>
												<div className="font-bold lg:text-[40px] md:text-[35px] sm:text-[28px] text-[26px] sm:text-left text-center flex items-center justify-center md:justify-start">
													Web Developer
												</div>
											</BlurFade>
											<BlurFade inView delay={2.4}>
												<div className="flex flex-row gap-3 items-center md:justify-start justify-center">
													<Tooltip>
														<TooltipTrigger>
															<button
																variant="icon"
																className="cursor-pointer p-0 hover:scale-110 transition-all duration-300 hover:text-blue-400"
															>
																<a
																	href="https://www.linkedin.com/in/jude-castillo-7469941b7/"
																	target="_blank"
																	title="LinkedIn profile"
																>
																	<Linkedin className="md:size-10 sm:size-8 size-6" />
																</a>
															</button>
														</TooltipTrigger>
														<TooltipContent>LinkedIn</TooltipContent>
													</Tooltip>
													<Tooltip>
														<TooltipTrigger>
															<button
																variant="icon"
																className="cursor-pointer p-0 hover:scale-110 transition-all duration-300 hover:text-slate-400"
															>
																<a
																	href="https://github.com/judemcastillo"
																	target="_blank"
																	title="GitHub portfolio"
																>
																	<Github className="md:size-10 sm:size-8 size-6" />
																</a>
															</button>
														</TooltipTrigger>
														<TooltipContent>GitHub</TooltipContent>
													</Tooltip>{" "}
													<Dialog className="border-accent-foreground/30 border-2 ">
														<DialogTrigger>
															<Tooltip>
																<TooltipTrigger>
																	<button
																		variant="icon"
																		className="cursor-pointer p-0 hover:scale-110 transition-all duration-300 hover:text-red-500"
																	>
																		<div
																			target="_blank"
																			title="Send me an email"
																		>
																			<Mail
																				alt="email"
																				className="md:size-10  sm:size-8 size-6"
																			/>
																		</div>
																	</button>
																</TooltipTrigger>
																<TooltipContent>Email</TooltipContent>
															</Tooltip>
														</DialogTrigger>
														<DialogContent>
															<DialogDescription>
																<div className="sm:text-xl dark:text-white text-lg">
																	<span className="font-bold">Email:</span>
																	judemcastillo@gmail.com
																</div>
															</DialogDescription>
														</DialogContent>
													</Dialog>
												</div>
												<BlurFade inView delay={2.6}>
													<div className="flex flex-col md:justify-start justify-center mt-5 items-center md:items-start">
														<motion.a
															href={resumePdf}
															target="_blank"
															rel="noreferrer"
															title="View my resume"
															className="w-60 flex items-center justify-center "
														>
															<InteractiveHoverButton
																text="Download Resume"
																className="sm:w-full border-accent-foreground/30 sm:p-3 text-md p-1 w-[80%]"
															/>
														</motion.a>
													</div>
												</BlurFade>
											</BlurFade>
										</div>
									</div>
								</div>
								<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ delay: 3, duration: 0.8 }}
								>
									<motion.div
										className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center md:text-sm text-muted-foreground text-xs"
										animate={{ y: [0, -3, 0] }}
										transition={{
											duration: 1.3,
											repeat: Infinity,
											repeatType: "loop",
											ease: "easeInOut",
										}}
									>
										<span className="uppercase tracking-wide text-center font-semibold">
											Scroll down for more info
										</span>
										<RiArrowDownWideLine className="md:text-3xl w-full font-bold text-xl" />
									</motion.div>
								</motion.div>
							</div>
						</section>
						<AboutSection />
						<ExperienceSection />
						<ProjectSection />
					</div>
				</div>
				<AnimatePresence>
					<motion.div
						className="fixed bg-background h-full w-full z-100"
						initial={{ opacity: 1 }}
						animate={{ y: "100%" }}
						transition={{ type: "spring", delay: 2, duration: 1.5 }}
						exit={{ opacity: 0, y: "100%" }}
					>
						<section
							id="header"
							className="flex items-center justify-center h-full flex-col gap-4"
						>
							<BlurFade delay={0.25} inView>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
									Hello World👋
								</h2>
							</BlurFade>
							{/* <TextScramble className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-[sans-serif]">
								Hello World!
							</TextScramble> */}
						</section>
					</motion.div>
				</AnimatePresence>
				<div style={{ width: "100%", height: "100%", position: "fixed" }}>
					<AnoAI />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
