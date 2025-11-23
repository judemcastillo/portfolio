import { Card } from "./ui/card";

export default function ExperienceSection() {
	const experiences = [
		{
			company: "Business Webbing",
			location: "remote",
			role: "Web Developer",
			duration: "Aug 2022 - Oct 2025",
			years: 3,
            description:[]
		},
	];
	return (
		<section
			className="z-30 flex h-screen flex-col items-center justify-center gap-6 snap-start p-5"
			id="Experience"
		>
			<div className="h-fit flex flex-col items-center justify-center gap-6 w-full px-[8%] max-w-[1400px]">
				<h1 className="text-4xl font-bold text-center">Experience</h1>
                {experiences.map((exp, idx) => (
				<Card className="z-30 m-auto h-60 w-full p-5 border-foreground/10 border-2 flex flex-col gap-2" key={idx}>
					<div className="flex flex-row items-center justify-between">
						<h1 className="text-[30px] font-bold">
							{exp.company}{" "}
							<span className="text-[18px] font-normal text-muted-foreground">
								({exp.location})
							</span>
							<div className="flex flex-row items-center justify-between">
								<h3 className="text-[20px] font-semibold">{exp.role}</h3>
							</div>
						</h1>
						<div className="text-[18px] font-normal text-muted-foreground flex flex-col items-end justify-center">
							<div>{exp.duration}</div>
							<div>{exp.years} years</div>
						</div>
					</div>
				</Card>))}
				
			</div>
		</section>
	);
}
