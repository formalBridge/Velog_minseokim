import { Link } from "react-router";
import "./header.css";

export function Header() {
  return (
    <header className="header_block">
      <div className="header_inner_block">
        <div className="header_logo_block">
          <Link className="header_logo" to="/">
            <img
              src="app/components/header/Velog-Icons_light.svg"
              title="Velog logo"
              alt="Velog logo"
            />
          </Link>
          <Link className="header_user_name" to="/">
            <span>Minoes.Log</span>
          </Link>
        </div>
      </div>
      <div className="header_right">
        <Link className="header_notification" to="/">
          <img
            src="app/components/header/notifications.svg"
            alt="notifications"
            title="notifications"
          />
        </Link>
        <Link className="header_search" to="/">
          <img
            src="app/components/header/search.svg"
            alt="search"
            title="search"
          />
        </Link>
        <Link className="header_write" to="/">
          <button className="round_button">새 글 작성</button>
        </Link>
        <Link className="header_profile" to="/">
          <img
            src="app/components/header/profile.svg"
            alt="profile"
            title="profile"
          />
        </Link>
      </div>
    </header>
  );
}
