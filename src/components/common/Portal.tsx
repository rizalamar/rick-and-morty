export const Portal = () => {
	return (
		<div className="flex flex-col items-center justify-center p-10">
			<div className="relative flex items-center justify-center w-32 h-32">
				{/* Layer 1: Glow Luar (Cahaya Hijau di belakang) */}
				<div className="absolute inset-0 rounded-full bg-portal blur-xl opacity-40 animate-pulse"></div>

				{/* Layer 2: Ring Hitam Luar (Border Neobrutalism) */}
				<div className="absolute inset-0 border-4 border-black rounded-full shadow-brutal"></div>

				{/* Layer 3: Cairan Portal (Pusaran) */}
				<div className="absolute inset-2 border-2 border-black rounded-full overflow-hidden bg-[#4ab44a]">
					{/* Efek Pusaran pakai Gradient */}
					<div
						className="w-full h-full animate-spin-slow opacity-80"
						style={{
							background: `radial-gradient(circle, #97ce4c 10%, #4ab44a 40%, #1a4d1a 90%)`,
							backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://w3.org fill='%23000' d='M40,-62C54,-54,67,-42,75,-28C83,-13,86,3,81,17C76,31,63,43,49,53C35,63,20,71,3,74C-14,77,-29,75,-43,67C-57,59,-70,45,-76,29C-82,13,-81,-5,-74,-21C-67,-37,-54,-51,-40,-59C-26,-67,-13,-70,0,-71C13,-71,26,-69,40,-62Z' transform='translate(100 100)' /%3E%3C/svg%3E")`,
							backgroundSize: "200%",
							backgroundPosition: "center",
						}}
					></div>
				</div>

				{/* Layer 4: Partikel Tengah (Titik-titik berputar) */}
				<div className="absolute inset-0 flex items-center justify-center animate-[spin_5s_linear_infinite]">
					<div className="w-full h-full scale-75 border-dotted rounded-full border-12 border-black/20"></div>
				</div>

				{/* Layer 5: Highlight Putih (Efek Glossy) */}
				<div className="absolute w-4 h-2 -rotate-45 rounded-full top-4 left-6 bg-white/40"></div>
			</div>

			{/* Text dengan gaya Rick and Morty */}
			<p className="mt-6 font-black tracking-[0.2em] uppercase  animate-bounce">Teleporting data...</p>
		</div>
	);
};
