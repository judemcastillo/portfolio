export default function ProjectSection() {
	return (
		<section
			className="z-30 flex min-h-screen flex-col items-center justify-start gap-8 snap-start px-[7%] py-[5%]"
			id="Projects"
		>
			<div className="flex w-full max-w-[1200px] flex-col items-center gap-4">
				<div className="flex flex-col items-center gap-2">
					<h1 className="text-4xl font-bold text-center">Projects</h1>
					<p className="max-w-2xl text-center text-muted-foreground">
						A snapshot of builds where I solved real problems—shipping polished UI, automating workflows, and keeping performance sharp.
					</p>
				</div>
			</div>
		</section>
	);
}
