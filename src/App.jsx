import { Button } from "./components/ui/button.jsx";
import { Card } from "./components/ui/card";
import { motion, AnimatePresence, scale } from "motion/react";
import { ThemeProvider } from "./components/theme-provider.jsx";
import DarkVeil from "./components/DarkVeil.jsx";
import { StickySideNav } from "./components/StickySideNav.jsx";
import AnoAI from "@/components/ui/animated-shader-background";
import { BlurFade } from "@/components/ui/blur-fade";
import { Github, Linkedin, Mail } from "lucide-react";
import { AnimatedThemeToggleButton } from "@/components/ui/animated-theme-toggle-button";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import AboutSection from "./components/AboutSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import ProjectSection from "./components/ProjectSection.jsx";

const SECTIONS = [
	{ id: "About", label: "Intro" },
	{ id: "Skills", label: "About me" },
	{ id: "Experience", label: "Experience" },
	{ id: "Projects", label: "Projects" },
];

function App() {
	return (
		<ThemeProvider>
			<div className="relative flex min-h-screen w-screen flex-col overflow-hidden bg-background text-foreground">
				<div className="relative z-30 flex h-screen w-full gap-8">
					<StickySideNav sections={SECTIONS} />
					<div className="h-full flex-1 overflow-y-scroll scroll-smooth pr-2 snap-y snap-mandatory">
						<section
							className="z-30 flex h-screen flex-col items-center justify-center gap-4 snap-start sm:px-[7%] sm:py-[5%] max-w-[1300px] w-full mx-auto"
							id="About"
						>
							<div className="z-30 m-auto h-screen w-full  md:p-3  flex flex-col justify-center sm:gap-10 md:px-0 px-[15%] gap-4">
								<div className="relative flex flex-row items-center justify-between">
									<h1 className="md:text-4xl font-bold text-center sm:text-3xl text-xl">
										Hi I'm Jude Castillo
									</h1>

									<AnimatedThemeToggleButton type="horizontal" />
								</div>
								<div className="flex md:flex-row md:items-start gap-6 md:justify-start w-full flex-col justify-center items-center">
									<motion.img
										className="lg:h-[450px] md:h-[300px] sm:h-[450px] h-[200px] md:w-fit rounded-lg md:object-contain w-full object-cover"
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
									<div className="flex flex-col md:gap-12 sm:justify-start items-center h-full w-full gap-5 justify-center">
										<div className="md:text-[40px] lg:text-[55px] font-semibold md:text-left sm:text-[33px] text-[24px] text-center w-full flex items-center justify-center md:justify-start">
											I build websites that work and wow🔥
										</div>
										<div className="w-full">
											<div className="font-bold lg:text-[40px] md:text-[35px] sm:text-[28px] text-[20px] sm:text-left text-center flex items-center justify-center md:justify-start">
												Web Developer
											</div>
											<div className="flex flex-row gap-3 items-center md:justify-start justify-center">
												<button
													variant="icon"
													className="cursor-pointer p-0 hover:scale-110 transition-all duration-300 hover:text-blue-400"
												>
													<a
														href="https://www.linkedin.com/in/jude-castillo-7469941b7/"
														target="_blank"
													>
														<Linkedin className="md:size-10 sm:size-8 size-5" />
													</a>
												</button>
												<button
													variant="icon"
													className="cursor-pointer p-0 hover:scale-110 transition-all duration-300 hover:text-slate-400"
												>
													<a
														href="https://github.com/judemcastillo"
														target="_blank"
													>
														<Github className="md:size-10 sm:size-8 size-5" />
													</a>
												</button>
												<button
													variant="icon"
													className="cursor-pointer p-0 hover:scale-110 transition-all duration-300 hover:text-red-500"
												>
													<a
														href="https://github.com/judemcastillo"
														target="_blank"
													>
														<Mail
															alt="email"
															className="md:size-10 sm:size-8 size-5"
														/>
													</a>
												</button>
											</div>
										</div>
									</div>
								</div>
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
									Welcome 👋
								</h2>
							</BlurFade>
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
