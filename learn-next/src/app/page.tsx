import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Navigator from "./components/Navigator";
export default async function page() {
  const movies = [
    {
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ww7jn7lv1YzTAGd5m0R6CP1VXAs.jpg",
      title: "릴로 & 스티치",
      release: "2025-05-21",
      percent: "71%",
    },
    {
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8vywrRg1wrY4fo7EqgrFmUJgchG.jpg",
      title: "드래곤 길들이기",
      release: "2024-06-06",
      percent: "80%",
    },
    {
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hwmwTFtMbzxAWbIOp1RyyiOCyx0.jpg",
      title: "모아나2",
      release: "2024-11-27",
      percent: "71%",
    },
  ];
  return (
    <>
      <Header />
      <Navigator />
      <MovieList movies={movies} />
      <Footer />
    </>
  );
}
