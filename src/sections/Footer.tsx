import Button from "../components/common/Button";

export default function Footer() {
	return (
		<footer className="mt-10 bg-white border-t-4 border-black">
			<div className="container px-6 py-12 mx-auto">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-3">
					{/* Quote */}
					<div className="space-y-6">
						<div className="inline-block px-4 py-2 border-brutal bg-portal shadow-brutal rotate-2">
							<h2 className="text-2xl italic font-black uppercase">Rick & Morty</h2>
						</div>
						<div className="relative p-4 bg-gray-100 border-brutal shadow-brutal">
							<p className="text-sm italic font-bold leading-tight">
								"Nobody exist on purpose. Nobody belongs anywhere. Everybody's gonna die. Come watch
								TV."
							</p>
							<span className="absolute text-white bg-black -bottom-3 right-4 text-[10px] px-2 py-1 font-black uppercase">
								- Morty Smith
							</span>
						</div>
					</div>

					{/* Links */}
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-black underline uppercase decoration-rick decoration-4 underline-offset-4">
							The Multiverse
						</h3>

						<ul className="space-y-2 text-sm font-bold uppercase">
							<li>
								<a href="#" className="transition-colors hover:text-rick">
									→ Characters
								</a>
							</li>
							<li>
								<a href="#" className="transition-colors hover:text-portal">
									→ Locations
								</a>
							</li>
							<li>
								<a href="#" className="transition-colors hover:text-morty">
									→ Episodes
								</a>
							</li>
							<li>
								<a href="#" className="transition-colors hover:text-rose-300">
									→ API Docs
								</a>
							</li>
						</ul>
					</div>

					{/* Social & Build info */}
					<div className="flex flex-col gap-6">
						<h3 className="text-xl font-black uppercase">Built by human</h3>
						<div className="flex gap-4">
							<Button size="sm">
								<span className="text-xs font-black uppercase">Portfolio</span>
							</Button>
						</div>

						<p className="text-[10px] font-black uppercase opacity-50">
							Data provided by Rick and Morty API <br />
							&copy; 2026 Dimension C-137
						</p>
					</div>
				</div>
			</div>

			{/* bottom bar */}
			<div className="py-4 text-center bg-black">
				<p className="text-portal font-black text-xs uppercase tracking-[0.2em]">Wubba Lubba Dub Dub!</p>
			</div>
		</footer>
	);
}
