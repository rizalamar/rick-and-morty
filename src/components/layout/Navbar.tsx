import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="fixed top-0 z-50 w-full px-6 py-3 border-b-2 border-black bg-morty">
			<div className="container flex items-center justify-between mx-auto">
				<Link
					to={"/"}
					className="px-3 py-1 bg-white border-brutal shadow-brutal rotate-2 hover:rotate-0 transition-transform"
				>
					<h1 className="text-xl italic font-black tracking-tighter uppercase">Rick & Morty</h1>
				</Link>

				<div className="hidden gap-8 md:flex">
					<Link
						to={"/"}
						className="text-sm font-black uppercase hover:underline hover:underline-offset-4 transition-all"
					>
						Home
					</Link>
					<Link
						to={"/characters"}
						className="text-sm font-black uppercase hover:underline hover:underline-offset-4 transition-all"
					>
						Characters
					</Link>
					<Link
						to={"/locations"}
						className="text-sm font-black uppercase hover:underline hover:underline-offset-4 transition-all"
					>
						Locations
					</Link>
					<Link
						to={"/episodes"}
						className="text-sm font-black uppercase hover:underline hover:underline-offset-4 transition-all"
					>
						Episodes
					</Link>
				</div>

				<button className="p-1 bg-white md:hidden border-portal">
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4
      6h16M4 12h16m-7 6h7"
						></path>
					</svg>
				</button>
			</div>
		</nav>
	);
}
