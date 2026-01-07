export default function Posts() {
  return (
    <section className="VelogLayout_section">
      <div className="VelogSearchInput_block">
        <div className="VelogSearchInput_search">
          <img
            className="VelogSearchInput_icon"
            src="app/components/header/search.svg"
            alt="search"
            title="search"
          />
          <input placeholder="검색어를 입력하세요" />
        </div>
      </div>
    </section>
  );
}
