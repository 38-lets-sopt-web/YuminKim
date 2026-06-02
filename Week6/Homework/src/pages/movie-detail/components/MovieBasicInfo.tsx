import type { MovieDetail } from "../../../types/movie";

type MovieBasicInfoProps = {
  movie: MovieDetail;
};

function MovieBasicInfo({ movie }: MovieBasicInfoProps) {
  const countries = movie.production_countries
    .map((country) => country.name)
    .join(", ");

  const languages = movie.spoken_languages
    .map((language) => language.english_name)
    .join(", ");

  const formatMoney = (value: number) =>
    value === 0 ? "정보 없음" : `US$${value.toLocaleString()}`;

  const basicInfoList = [
    { label: "원제", value: movie.original_title },
    { label: "원어", value: movie.original_language },
    { label: "제작 국가", value: countries || "정보 없음" },
    { label: "사용 언어", value: languages || "정보 없음" },
    { label: "예산", value: formatMoney(movie.budget) },
    { label: "수익", value: formatMoney(movie.revenue) },
  ];

  return (
    <section className="rounded-lg bg-gray-800 p-6">
      <h2 className="mb-6 text-2xl font-bold">기본 정보</h2>

      <dl className="divide-y divide-gray-700">
        {basicInfoList.map((info) => (
          <div
            key={info.label}
            className="grid grid-cols-[120px_1fr] gap-4 py-4"
          >
            <dt className="font-semibold text-gray-400">{info.label}</dt>
            <dd>{info.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default MovieBasicInfo;
