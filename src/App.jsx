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
							className="z-30 flex h-screen flex-col items-center justify-center gap-4 snap-start"
							id="About"
						>
							<div className="z-30 m-auto h-full w-full max-w-[1300px] p-10  flex flex-col justify-center gap-10 px-20">
								<div className="relative flex flex-row items-center justify-between">
									<h1 className="text-4xl font-bold text-center">
										Hi I'm Jude Castillo
									</h1>
									<AnimatedThemeToggleButton type="horizontal" />
								</div>
								<div className="flex flex-row items-start gap-6 justify-start w-full">
									<motion.img
										className="lg:h-[450px] h-[300px] w-fit rounded-lg object-contain"
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
									<div className="flex flex-col gap-12 justify-start items-start h-full">
										<div className="text-[25px] xl:text-[50px] font-semibold">
											I build websites that work and wow🔥
										</div>
										<div>
											<div className="font-bold text-[50px]">Web Developer</div>
											<div className="flex flex-row gap-3 items-center">
												<button
													variant="icon"
													className="cursor-pointer p-0 hover:scale-110 transition-all duration-300 hover:text-blue-400"
												>
													<a
														href="https://www.linkedin.com/in/jude-castillo-7469941b7/"
														target="_blank"
													>
														<Linkedin className="size-10" />
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
														<Github className="size-10" />
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
														<Mail alt="email" className="size-10.5" />
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
						
						<section
							className="z-30 flex h-screen flex-col items-center justify-center gap-4 snap-start"
							id="Projects"
						>
							<Card className="z-30 m-auto h-80 w-150 bg-background p-5">
								<h1 className="text-4xl font-bold text-center">Projects</h1>
								<p>Timeline</p>
							</Card>
						</section>
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
