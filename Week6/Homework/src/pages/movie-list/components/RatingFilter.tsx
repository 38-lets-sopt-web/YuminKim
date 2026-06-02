type RatingFilterProps = {
  rating: number;
  onChangeRating: (rating: number) => void;
};

function RatingFilter({ rating, onChangeRating }: RatingFilterProps) {
  return (
    <label className="mb-6 block">
      <span className="mb-2 block text-sm text-gray-300">최소 평점</span>

      <select
        value={rating}
        onChange={(event) => onChangeRating(Number(event.target.value))}
        className="rounded-md bg-gray-800 px-4 py-2 text-white"
      >
        <option value={0}>전체 별점</option>
        <option value={5}>5점 이상</option>
        <option value={6}>6점 이상</option>
        <option value={7}>7점 이상</option>
        <option value={8}>8점 이상</option>
        <option value={9}>9점 이상</option>
      </select>
    </label>
  );
}

export default RatingFilter;
