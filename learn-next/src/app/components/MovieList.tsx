import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <section className="movie list">
      <h4 className="movie-subtext">현재 상영중인 영화</h4>
      <div className="movie-list">
        {movies.map((movie, i) => (
          <MovieCard movie={movie} key={i} />
        ))}
      </div>
    </section>
  );
}
