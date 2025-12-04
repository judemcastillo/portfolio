import { Card } from "./ui/card";
import { Timeline } from "./ui/timeline";
import { BlurFade } from "@/components/ui/blur-fade";
import businesswebbingIcon from "../assets/businesswebbing.svg";
import lendistryIcon from "../assets/lendistry.svg";
import ninelabsIcon from "../assets/ninelabs.svg";

export default function ExperienceSection() {
	const experiences = [
		{
			company: "Business Webbing Systems",
			location: "remote",
			role: "Technical Specialist",
			duration: "Aug 2022 - Sep 2025",
			years: 3,
			months: 1,
			icon: businesswebbingIcon,
			description: [
				"Developed and maintained responsive, high-performance web applications using React.js, Next.js, HTML, CSS, and JavaScript.",
				"Optimized website performance through code reviews and debugging, improving page load speed and reducing bounce rates.",
				"Implemented CI/CD pipelines using GitHub Actions and AWS CodePipeline to automate deployment and testing workflows, reducing release time by 40%.",
				"Customized WordPress themes and developed plugins to enhance website functionality while ensuring design consistency and performance.",
				"Deployed and managed applications on AWS services (S3, EC2, Lambda), ensuring scalability and reliability",
				"Automated business workflows using Make and AWS Lambda, reducing manual processes and improving operational efficiency.",
			],
		},
		{
			company: "Lendistry",
			location: "remote",
			role: "Virtual Assistant",
			duration: "April 2021 - April 2022",
			years: 1,
			months: 0,
			icon: lendistryIcon,
			description: [
				"Improved productivity by implementing digital tools and automation, streamlining administrative workflows.",
				"Supported business development through lead generation and social media research.",
				"Coordinated calls, schedules, and client communications across departments.",
			],
		},
		{
			company: "Nine Labs",
			location: "remote",
			role: "Virtual Assistant",
			duration: "March 2020 - April 2021",
			years: 1,
			months: 1,
			icon: ninelabsIcon,
			description: [
				"Managed social media content and brand visuals to enhance client engagement and online presence.",
				"Designed digital content and optimized CRM database management for project reporting.",
				"Streamlined email communications and prioritized client correspondence efficiently.",
			],
		},
	];

	const formattedExperiences = experiences.map((exp) => {
		const durationLabel = `${exp.duration} • ${exp.years} ${
			exp.years > 1 ? "years" : "year"
		}${
			exp.months > 0
				? ` ${exp.months} ${exp.months > 1 ? "months" : "month"}`
				: ""
		}`;

		return {
			title: exp.company,
			content: (
				<Card className="relative border-foreground/10 border-2 backdrop-blur-sm shadow-xl overflow-hidden py-2">
					<div className="absolute inset-0 " />
					<div className="relative z-10 flex flex-col gap-4 p-6">
						<div className="flex items-start justify-between gap-4 md:flex-col sm:flex-row flex-col">
							<div className="flex items-center gap-3 flex-row ">
								<div className="rounded-sm bg-transparent ">
									<img
										src={exp.icon}
										alt={`${exp.company} logo`}
										className="size-14 object-contain "
									/>
								</div>
								<div>
									<p className="text-sm uppercase tracking-[0.08em] text-muted-foreground">
										{exp.location}
									</p>
									<h3 className="text-xl font-semibold">{exp.role}</h3>
								</div>
							</div>
							<div className="flex flex-col items-end text-sm text-muted-foreground">
								<span className="rounded-full sm:border sm:border-foreground/10 sm:px-3 sm:py-1 sm:bg-background/60">
									{durationLabel}
								</span>
							</div>
						</div>

						<ul className="grid gap-2 text-muted-foreground text-sm md:text-base">
							{exp.description.map((line, idx) => (
								<li key={idx} className="flex gap-2 leading-relaxed">
									<span>• {line}</span>
								</li>
							))}
						</ul>
					</div>
				</Card>
			),
		};
	});

	return (
		<section
			className="z-30 flex min-h-screen flex-col items-center justify-between gap-8 snap-start px-[7%] py-[5%]"
			id="Experience"
		>
			<div className="flex w-full max-w-[1200px] flex-col items-center gap-4 justify-between h-full">
				<div className="flex flex-col items-center gap-2 h-full">
					<BlurFade inView delay={0.2}>
						<h1 className="sm:text-4xl font-bold text-center text-2xl">
							Experience
						</h1>
					</BlurFade>
					<BlurFade inView delay={0.4}>
						<p className="max-w-2xl text-center text-muted-foreground text-sm sm:text-md">
							A timeline of the roles where I shipped products, automated
							workflows, and supported teams with pragmatic execution.
						</p>
					</BlurFade>
				</div>
			</div>
			<div className="w-full h-full overflow-y-hidden max-w-[1200px]">
				<BlurFade inView delay={0.6}>
					<Timeline data={formattedExperiences} />
				</BlurFade>
			</div>
		</section>
	);
}
