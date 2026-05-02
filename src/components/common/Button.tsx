import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "portal" | "morty" | "rick" | "white";
	size?: "sm" | "md" | "xl";
	children: ReactNode;
}

export default function Button({ variant = "white", size = "md", children, className = "", ...props }: ButtonProps) {
	const variants = {
		portal: "bg-portal",
		morty: "bg-morty",
		rick: "bg-rick",
		white: "bg-white",
	};

	const sizes = {
		sm: "px-3 py-1 text-[10px]",
		md: "px-6 py-2 text-sm",
		xl: "px-8 py-3 text-xl",
	};
	return (
		<button
			className={`
        border-brutal font-black uppercase transition-all cursor-pointer shadow-brutal active:translate-x-1 active:translate-y-1 active:shadow-none disabled:bg-gray-200 disabled:shadow-none disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}
        `}
			{...props}
		>
			{children}
		</button>
	);
}
