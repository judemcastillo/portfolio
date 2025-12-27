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
			role: "Web Developer",
			duration: "Aug 2022 - Sep 2025",
			years: 3,
			months: 1,
			icon: businesswebbingIcon,
			description: [
				"Built and maintained production React and Next.js applications used by 200+ users",
				"Optimized frontend and backend performance, reducing page load times and improving bounce rates",
				"Implemented CI/CD pipelines using GitHub Actions and AWS CodePipeline, reducing release cycles by 40%",
				"Designed and integrated RESTful APIs, improving API response times by 30%",
				"Deployed and managed applications on AWS services (S3, EC2, Lambda), ensuring scalability and reliability",
				"Developed custom WordPress themes and plugins, ensuring performance, maintainability, and design consistency",
				"Automated internal workflows using Make and AWS Lambda, significantly reducing manual operational tasks",
				"Used AWS Lambda for event-driven automation to reduce server costs and improve scalability",
			],
		},
		{
			company: "Lendistry",
			location: "remote",
			role: "Business Operations Assistant",
			duration: "April 2021 - April 2022",
			years: 1,
			months: 0,
			icon: lendistryIcon,
			description: [
				"Automated administrative workflows using digital tools, improving operational efficiency",
				"Supported business development through data research, lead generation, and CRM organization",
				"Coordinated calls, schedules, and client communications across departments.",
			],
		},
		{
			company: "Nine Labs",
			location: "remote",
			role: "Operations & Automation Assistant",
			duration: "March 2020 - April 2021",
			years: 1,
			months: 1,
			icon: ninelabsIcon,
			description: [
				"Managed and optimized digital content workflows for client social media platforms",
				"Designed visual assets and improved CRM data accuracy and reporting processes",
				" Streamlined email and client communication pipelines",
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
			className="z-30 flex h-screen flex-col items-center sm:justify-between justify-start sm:gap-8 snap-start px-[7%] py-[3%] "
			id="Experience"
		>
			<div className="flex w-full max-w-[1200px] flex-col items-center gap-4 justify-between h-[15%] ">
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
			<div
				className="w-full h-[85%] overflow-y-auto no-scrollbar max-w-[1200px] "
				style={{
					WebkitMaskImage:
						"linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
					maskImage:
						"linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
				}}
			>
				<BlurFade inView delay={0.6}>
					<Timeline data={formattedExperiences} />
				</BlurFade>
			</div>
		</section>
	);
}
