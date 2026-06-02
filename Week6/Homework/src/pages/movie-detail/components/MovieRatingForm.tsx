type MovieRatingFormProps = {
  movieId: number;
};

function MovieRatingForm({ movieId }: MovieRatingFormProps) {
  return (
    <section className="rounded-lg bg-gray-800 p-6">
      <h2 className="mb-4 text-2xl font-bold">별점 남기기</h2>
      <p className="text-gray-300">영화 ID: {movieId}</p>
    </section>
  );
}

export default MovieRatingForm;