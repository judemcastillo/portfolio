import { Card } from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip.jsx";

export default function AboutSection() {
	const skills = [
		{ name: "JavaScript", icon: "src/assets/javascript.svg" },
		{ name: "React", icon: "src/assets/react.svg" },
		{ name: "Python", icon: "src/assets/python.svg" },
		{ name: "TypeScript", icon: "src/assets/typescript.svg" },
		{ name: "Node.js", icon: "src/assets/nodejs.svg" },
		{ name: "Next.js", icon: "src/assets/nextjs.svg" },
		{ name: "Tailwind CSS", icon: "src/assets/tailwindcss.svg" },
		{ name: "Express.js", icon: "src/assets/express.svg" },
		{ name: "PostgreSQL", icon: "src/assets/postgresql.svg" },
		{ name: "Prisma ORM", icon: "src/assets/prisma.svg" },
		{ name: "ShadCN", icon: "src/assets/shadcn.png" },
		{ name: "WordPress", icon: "src/assets/wordpress.svg" },
		{ name: "GIT", icon: "src/assets/git.svg" },
		{ name: "AWS", icon: "src/assets/aws.svg" },
		{ name: "Make", icon: "src/assets/make.svg" },
		{ name: "GitHub", icon: "src/assets/github.svg" },
		{ name: "Framer Motion", icon: "src/assets/framer-motion.svg" },
	];
	const about = [
		{
			title: "Design",
			description:
				"I design clean, modern, and user-centered interfaces that focus on clarity, accessibility, and a seamless user experience.",
			icon: "src/assets/design.svg",
		},
		{
			title: "Frontend Development",
			description:
				"I build fast, responsive, and optimized UI components using React and Next.js, ensuring smooth performance across devices.",
			icon: "src/assets/frontend.svg",
		},
		{
			title: "Full-Stack",
			description:
				"I create complete end-to-end applications by combining scalable backend services (Node.js, Express, APIs, DBs) with intuitive frontend interfaces.",
			icon: "src/assets/fullstack.svg",
		},
		{
			title: "Automation",
			description:
				"I automate workflows and business processes using Make and AWS Lambda, helping reduce manual tasks and improve operational efficiency.",
			icon: "src/assets/automation.svg",
		},
	];
	return (
		<section
			className="z-30 flex h-screen flex-col items-center justify-center gap-6 snap-start p-4"
			id="Skills"
		>
			<div className="h-full flex flex-col items-center justify-center gap-8 w-full px-[5%] ">
				<h1 className="text-4xl font-bold text-center ">What I do</h1>

				<div className="flex flex-row w-full max-w-[1400px] items-center justify-between gap-4">
					{about.map((item, idx) => (
						<Card
							className="z-30 flex flex-col p-6 border-foreground/10 border-2 h-65 cursor-pointer w-80 gap-2"
							key={idx}
						>
							<div className="size-12">
								<img src={item.icon} alt={item.title} />
							</div>

							<div className="w-full flex flex-row items-start justify-between ">
								<h3 className="font-semibold text-[20px] whitespace-break-spaces p-0 m-0 ">
									{item.title}
								</h3>
							</div>

							<p className="text-primary dark:text-accent-foreground/60 text-[15px]">
								{item.description}
							</p>
						</Card>
					))}
				</div>
			</div>
			<div className="h-full flex flex-col items-center justify-start gap-10 w-full px-[5%] ">
				<h1 className="text-4xl font-bold text-center">My Tech Stack</h1>

				<div className="flex flex-row flex-wrap items-center justify-center w-full gap-3 max-w-[1200px]">
					{skills.map((skill) => (
						<Tooltip>
							<TooltipTrigger>
								<div
									className="group flex flex-col w-full items-center justify-center hover:-translate-y-1.5 transition-all duration-200  aspect-square"
									key={skill.name}
								>
									<Card className="z-30 p-4 cursor-pointer border-foreground/10 border-2 flex items-center justify-start group-hover:border-accent-foreground/70 transition-all duration-300 group-hover:bg-accent dark:group-hover:bg-accent-foreground">
										<div className="size-18 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 ">
											<img
												src={skill.icon}
												alt={skill.name}
												className="object-contain rounded-2xl  "
											/>
										</div>
									</Card>
								</div>
							</TooltipTrigger>{" "}
							<TooltipContent>{skill.name}</TooltipContent>
						</Tooltip>
					))}
				</div>
			</div>
		</section>
	);
}
