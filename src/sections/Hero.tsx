export const Hero = () => {
	return (
		<section className="px-6 pb-16 overflow-hidden pt-28">
			<div className="container mx-auto">
				<div className="relative flex flex-col items-center p-8 overflow-hidden text-center border-brutal bg-rick md:p-16 shadow-brutal-lg">
					{/* Aksen Dekorasi Khas Rick & Morty (Optional) */}
					<div className="absolute w-40 h-40 rounded-full -top-5 -right-5 bg-portal border-brutal opacity-20 animate-pulse"></div>
					<div className="relative z-10">
						<h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] leading-none">
							Wubba Lubba <br />
							<span className="text-portal">Dub Dub!</span>
						</h1>

						<div className="inline-block p-4 mt-8 bg-white border-brutal shadow-brutal rotate-1">
							<p className="text-lg font-black tracking-tight text-black uppercase md:text-2xl">
								The Most <span className="italic text-rick">Brutal</span> Multiverse Database
							</p>
						</div>

						<div className="flex flex-wrap justify-center gap-4 mt-10">
							<button className="px-8 py-3 text-xl font-black uppercase transition-all cursor-pointer border-brutal bg-portal shadow-brutal active:translate-x-1 active:translate-y-1 active:shadow-none">
								Get Started
							</button>
							<button className="px-8 py-3 text-xl font-black uppercase transition-all cursor-pointer border-brutal bg-morty shadow-brutal active:translate-x-1 active:translate-y-1 active:shadow-none">
								Randomize
							</button>
						</div>
					</div>

					{/* Label Kecil di pojok */}
					<div className="absolute bottom-4 right-4 border-brutal bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rotate-2">
						Dimension C-137 Approved
					</div>
				</div>
			</div>
		</section>
	);
};
