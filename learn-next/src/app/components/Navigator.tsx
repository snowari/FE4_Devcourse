import Image from "next/image";

export default function Navigator() {
  const items = [
    { icon: "/icons/home.png", label: "홈" },
    { icon: "/icons/live.png", label: "상영중" },
    { icon: "/icons/video.png", label: "개봉예정" },
    { icon: "/icons/search.png", label: "검색" },
    { icon: "/icons/popluar.png", label: "인기콘텐츠" },
  ];
  return (
    <nav className="navigator">
      <ul className="navigator-list">
        {items.map((item, i) => (
          <li className="navigator-list__item" key={i}>
            <Image
              src={item.icon}
              alt={item.label}
              width={16}
              height={18}
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">{item.label}</strong>
          </li>
        ))}
      </ul>
    </nav>
  );
}
