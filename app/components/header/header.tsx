import { Link } from "react-router";
import "./header.css";

export function Header() {
  return (
    <header className="Header_block">
      <div className="Header_inner_block">
        <div className="Header_logo_block">
          <Link className="Header_logo" to="/">
            <img
              src="app/components/header/Velog-Icons_light.svg"
              title="Velog logo"
              alt="Velog logo"
            />
          </Link>
          <Link className="Header_user_name" to="/">
            <span>Minoes.Log</span>
          </Link>
        </div>
      </div>
      <div className="Header_right">
        <Link className="Header_notification" to="/">
          <img
            src="app/components/header/notifications.svg"
            alt="notifications"
            title="notifications"
          />
        </Link>
        <Link className="Header_search" to="/">
          <img
            src="app/components/header/search.svg"
            alt="search"
            title="search"
          />
        </Link>
        <Link className="Header_write" to="/">
          <button className="round_button">새 글 작성</button>
        </Link>
        <Link className="Header_profile" to="/">
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
