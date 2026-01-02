import { Link, NavLink } from "react-router";
import "./index.css";

export function Index() {
  return (
    <div className="Layout_block">
      <div className="UserProfile_block">
        <div className="UserProfile_section">
          <div className="UserProfile_left">
            <Link to="/">
              <img
                src="app/components/header/profile.svg"
                width={128}
                height={128}
                alt="profile"
                title="profile"
              />
            </Link>
            <div className="UserProfile_userInfo">
              <Link to="/">김민서</Link>
              <div className="UserProfile_description">안녕하세용가리</div>
            </div>
          </div>
        </div>
        <div className="UserProfile_separator"></div>
        <div className="UserProfile_bottom">
          <div className="UserProfile_followInfo">
            <Link to="/" className="UserProfile_info">
              {/* followers로 이동 */}
              <span className="UserProfile_number">0</span>
              <span className="UserProfile_text">팔로워</span>
            </Link>
            <Link to="/" className="UserProfile_info">
              {/* followings로 이동 */}
              <span className="UserProfile_number">0</span>
              <span className="UserProfile_text">팔로잉</span>
            </Link>
          </div>
        </div>
        <div className="UserProfile_bottomSection"></div>
      </div>
      <div className="VelogTab_block">
        <div className="VelogTab_wrapper">
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? "VelogTab_item active" : "VelogTab_item"
            }
          >
            글
          </NavLink>
          <NavLink
            to="/series"
            className={({ isActive }) =>
              isActive ? "VelogTab_item active" : "VelogTab_item"
            }
          >
            시리즈
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "VelogTab_item active" : "VelogTab_item"
            }
          >
            소개
          </NavLink>
          <div className="VelogTab_indicator" style={{ left: "0%" }}></div>
        </div>
      </div>
    </div>
  );
}
