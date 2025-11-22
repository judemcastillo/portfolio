import { Card } from "@/components/ui/card";

export default function AboutSection() {
	const skills = [
		{ name: "JavaScript", icon: "src/assets/javascript.svg" },
		{ name: "React", icon: "src/assets/react.svg" },
        { name: "Python", icon: "src/assets/python.svg" },
	];
	return (
		<section
			className="z-30 flex h-screen flex-col items-center justify-center gap-6 snap-start p-4"
			id="Skills"
		>
			<div className="h-full flex flex-col items-center justify-center gap-10">
				<h1 className="text-4xl font-bold text-center ">What I do</h1>
				<Card className="z-30  h-60 w-150  p-5 border-foreground/10 border-2">
					<h3>I Build websites</h3>
				</Card>
			</div>
			<div
				className="h-full flex flex-col items-center justify-center gap-10 w-full
            px-[5%]"
			>
				<h1 className="text-4xl font-bold text-center">My Tech Stack</h1>
				<div className="grid grid-cols-6 w-full gap-5">
					{skills.map((skill) => (
						<div className="flex flex-col items-center justify-center">
							<Card
								className="z-30  h-40  p-5 border-foreground/10 border-2 flex items-center justify-start w-40 self-center"
								key={skill.name}
							>
								<div className="size-18 flex items-center justify-center">
									<img
										src={skill.icon}
										alt={skill.name}
										className="object-contain rounded-2xl"
									/>
								</div>
								<p>{skill.name}</p>
							</Card>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
