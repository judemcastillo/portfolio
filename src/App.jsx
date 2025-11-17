import Particles from "./components/ui/Particles";
import { Card } from "./components/ui/card";
import { motion, AnimatePresence } from "motion/react";
import { ThemeProvider } from "./components/theme-provider.jsx";
import { ModeToggle } from "./components/mode-toggle.jsx";
import AnoAI from "@/components/ui/animated-shader-background";
import { BlurFade } from "@/components/ui/blur-fade";

function App() {
	return (
		<ThemeProvider>
			<div className="flex min-h-screen flex-col  bg-background h-full overflow-hidden">
				<div>
					<section className="z-30 flex flex-col items-center gap-4 h-screen justify-center">
						<Card className="m-auto w-150 h-80 bg-background z-30 p-5">
							<div className="flex flex-row justify-between items-center">
								<h1 className="text-4xl font-bold text-center">Intro</h1>
								<ModeToggle />
							</div>
							<p>Jude Castillo</p>
							<p>Web Developer</p>
							<p>Socials</p>
						</Card>
					</section>
					<section className="z-30 flex flex-col items-center gap-4 h-screen justify-center">
						<Card className="m-auto w-150 h-80 bg-background z-30 p-5">
							<h1 className="text-4xl font-bold text-center">About me</h1>
							<p>Skills</p>
							<p>Tech stack</p>
						</Card>
					</section>
					<section className="z-30 flex flex-col items-center gap-4 h-screen justify-center">
						<Card className="m-auto w-150 h-80 bg-background z-30 p-5">
							<h1 className="text-4xl font-bold text-center">Experience</h1>
							<p>Timeline</p>
						</Card>
					</section>
					<section className="z-30 flex flex-col items-center gap-4 h-screen justify-center">
						<Card className="m-auto w-150 h-80 bg-background z-30 p-5">
							<h1 className="text-4xl font-bold text-center">Projects</h1>
							<p>Timeline</p>
						</Card>
					</section>
				</div>
				<AnimatePresence>
					<motion.div
						className="fixed bg-background h-full w-full z-100"
						initial={{ opacity: 1 }}
						animate={{ y: "100%" }}
						transition={{ type: "spring", delay: 2, duration: 1.5 }}
						exit={{ opacity: 0, y: "100%" }}
					>
						<section id="header" className="flex items-center justify-center h-full flex-col gap-4">
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

				{/* <div style={{ width: "100%", height: "100%", position: "fixed" }}>
					<Particles
						particleColors={["#8be9e7", "#50fa7b", "#ff79c6", "#f1fa8c"]}
						particleCount={300}
						particleSpread={10}
						speed={0.1}
						particleBaseSize={100}
						moveParticlesOnHover={true}
						alphaParticles={false}
						disableRotation={false}
						className="text-black"
					/>
				</div> */}
			</div>
		</ThemeProvider>
	);
}

export default App;
