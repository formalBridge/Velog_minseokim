import { Link, NavLink } from "react-router";
import "./posts.css";

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
      <div className="VelogPosts_block">
        <aside className="VelogTagVerticalList_block">
          <div className="VelogTagVerticalList_title">태그 목록</div>
          <ul>
            <li className="VelogTagVerticalList_listItem">
              <NavLink to={"/posts"}>전체 보기</NavLink>
              <span>(0)</span>
            </li>
          </ul>
        </aside>
        <div className="VelogPosts_content">
          <div className="VelogPosts_empty">
            <img
              src="public/emptyPost.svg"
              height={320}
              width={320}
              title="emptyPost"
            />
            <div className="VelogPosts_message">포스트가 없습니다.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
