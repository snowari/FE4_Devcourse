export default async function Header() {
  return (
    <>
      <h1 className="header__logo">Wave</h1>
      <ul className="header__navi">
        <li>
          <a href="#">홈</a>
        </li>
        <li>
          <a href="#">카테고리</a>
        </li>
        <li>
          <a href="#">Movie</a>
        </li>
        <li>
          <a href="#">Tv</a>
        </li>
      </ul>
      <div className="header-search">
        <input
          type="text"
          className="header-search__input"
          placeholder="제목으로 찾아보세요."
        />
        <span className="material-symbols-outlined icon"> search </span>
      </div>
    </>
  );
}
