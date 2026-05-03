import { useEffect } from "react";
import { useCharacters } from "../../hooks/useCharacters";
import Button from "../common/Button";
import { Portal } from "../common/Portal";
import CharacterCard from "../cards/CharacterCard";
import { useSearchParams } from "react-router-dom";

export default function CharacterPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentPage = Number(searchParams.get("page")) || 1;
	const { data, loading, error } = useCharacters(currentPage);

	const handlePageChange = (newPage: number) => {
		setSearchParams({ page: newPage.toString() });
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (error) return <div className="pt-32 font-black text-center text-red-500">ERROR: {error}</div>;

	return (
		<div className="container px-6 pt-32 pb-20 mx-auto">
			<div className="flex flex-col items-center justify-between gap-4 mb-10 md:flex-row">
				<h2 className="text-4xl font-black uppercase border-b-4 border-portal">All Characters</h2>

				<div className="flex items-center gap-4">
					<Button
						size="sm"
						variant="portal"
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
					>
						Prev
					</Button>
					<span className="px-4 py-1 font-black bg-white border-brutal shadow-brutal">
						PAGE {currentPage} OF {data?.info.pages}
					</span>
					<Button
						size="sm"
						variant="portal"
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={!data?.info.next}
					>
						Next
					</Button>
				</div>
			</div>

			{loading ? (
				<Portal />
			) : (
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
					{data?.results.map((char) => (
						<CharacterCard key={char.id} character={char} />
					))}
				</div>
			)}
		</div>
	);
}
