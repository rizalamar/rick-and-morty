import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const closeMenu = () => setIsOpen(false);

	return (
		<nav className="fixed top-0 z-50 w-full px-6 py-3 border-b-2 border-black bg-morty">
			<div className="container flex items-center justify-between mx-auto">
				<Link
					to={"/"}
					className="px-3 py-1 transition-transform bg-white border-brutal shadow-brutal rotate-2 hover:rotate-0"
				>
					<h1 className="text-xl italic font-black tracking-tighter uppercase">Rick & Morty</h1>
				</Link>

				<div className="hidden gap-8 md:flex">
					{["Home", "Characters", "Locations", "Episodes"].map((item) => (
						<Link
							key={item}
							to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
							className="text-sm font-black uppercase transition-all hover:underline hover:underline-offset-4"
						>
							{item}
						</Link>
					))}
				</div>

				{/* humburger button */}
				<button
					className="p-1 transition-transform duration-300 bg-white md:hidden border-brutal shadow-brutal active:shadow-none active:translate-x-1 active:translate-y-1"
					onClick={() => setIsOpen(!isOpen)}
				>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{isOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4
							6h16M4 12h16m-7 6h7"
							></path>
						)}
					</svg>
				</button>
			</div>

			{/* Menu mobile overlay */}
			<div
				className={`absolute top-full left-0 w-full bg-white border-b-4 border-black transition-all duration-300 overflow-hidden md:hidden ${
					isOpen ? "max-h-72 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
				}`}
			>
				<div className="flex flex-col items-center justify-center gap-4 px-6">
					{["Home", "Characters", "Locations", "Episodes"].map((item) => (
						<Link
							key={item}
							to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
							onClick={closeMenu}
							className="w-full py-2 overflow-hidden text-lg font-black text-center uppercase transition-colors bg-white border-brutal shadow-brutal active:bg-portal"
						>
							{item}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
}
