import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function ProjectSection() {
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
			thumbnail: "src/assets/yapspace.svg",
			description: [
				"A full-stack social platform built with the Next.js App Router, showcasing real-time chat, social graph features, and modern UX patterns",
				"Real-time messaging with typing indicators, presence, DMs, group chats, and room membership powered by Socket.IO",
				"Secure authentication via NextAuth (GitHub OAuth and credentials) with role-based access, protected routes, and JWT sessions",
			],
			codeLink: "https://github.com/judemcastillo/social-media-clone",
		},
	];

	return (
		<section
			className="z-30 flex min-h-screen flex-col items-center justify-start gap-10 snap-start px-[7%] py-[5%]"
			id="Projects"
		>
			<div className="flex w-full max-w-[1200px] flex-col items-center gap-3">
				<div className="flex flex-col items-center gap-2">
					<h1 className="sm:text-4xl font-bold text-center text-2xl">
						Projects
					</h1>
					<p className="max-w-2xl text-center text-muted-foreground text-sm sm:text-md">
						Some of the projects I've worked on recently.
					</p>
				</div>
			</div>

			<div className="relative w-full max-w-[1200px] space-y-6 h-full overflow-y-scroll no-scrollbar">
				<div className="pointer-events-none absolute -left-10 top-8 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15)_0,_transparent_60%)] blur-2xl" />
				<div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,_rgba(180,107,255,0.16)_0,_transparent_55%)] blur-2xl" />

				{projects.map((project, index) => (
					<motion.div
						key={project.title}
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5, delay: index * 0.08 }}
						className="relative"
					>
						<Card className="relative overflow-hidden border-foreground/10 border-2 bg-background/80 backdrop-blur-xl shadow-[0_24px_120px_-60px_rgba(0,0,0,0.7)] p-0">
							<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.16),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(180,107,255,0.16),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.12),transparent_30%)] opacity-90" />
							<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />

							<div className="relative grid gap-6 p-6 sm:p-7 lg:grid-cols-[1.15fr_0.9fr]">
								<div className="flex flex-col gap-4">
									<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
										<div className="flex items-center gap-3">
											<div>
												<h3 className="text-xl font-semibold sm:text-2xl">
													{project.title}
												</h3>
											</div>
										</div>
										<a
											href={project.link}
											target="_blank"
											rel="noreferrer"
											className="group inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground transition-all duration-200  hover:border-foreground/30 hover:bg-foreground/10"
										>
											<span>Visit</span>
											<ArrowUpRight className="size-4 transition-transform duration-200" />
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

								<div className="relative">
									<div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0,_transparent_60%)] blur-xl" />
									<div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-br from-background/90 to-background/70 p-4 shadow-inner">
										<div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0)_45%,rgba(255,255,255,0.05)_70%)] opacity-60" />
										<img
											src={project.thumbnail}
											alt={`${project.title} preview`}
											className="relative z-10 h-full w-full rounded-xl object-contain"
										/>
									</div>
								</div>
							</div>
						</Card>
					</motion.div>
				))}
			</div>
		</section>
	);
}
