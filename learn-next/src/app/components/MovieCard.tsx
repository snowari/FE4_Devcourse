export default function MovieCard({ movie }) {
  return (
    <div className="movie-list__item">
      <a href="#">
        <figure>
          <img src={movie.img} alt={movie.title} />
        </figure>
        <div className="movie-list__txt">
          <div className="progress-circle p50">
            <span>{movie.percent}</span>
            <div className="left-half-clipper">
              <div className="first50-bar"></div>
              <div className="value-bar"></div>
            </div>
          </div>
          <strong className="movie-list__title">{movie.title}</strong>
          <p className="movie-list__desc">{movie.desc}</p>
          <span className="movie-list__release">{movie.release}</span>
        </div>
      </a>
    </div>
  );
}
