import React from "react";
import { Link } from "react-router-dom";
import getNavLinks from "../services/navLinks";
import UserInfo from "./UserInfo";
import { getCourseCount } from "../services/userServices";

class Sidebar extends React.Component {
  state = {
    courseCount: "",
  };

  async componentDidMount() {
    const { data } = await getCourseCount();
    this.setState({ courseCount: data.count });
  }

  render() {
    const NavLinks = getNavLinks();
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <UserInfo />
          <hr className="shadow" />
          <ul className="nav flex-column">
            {NavLinks.map((nav) => (
              <li className="nav-item" key={nav.id}>
                <Link className="nav-link" to={nav.link}>
                  <span className={nav.icon} />
                  <span className="m-2">{nav.text}</span>
                  {nav.text === "دوره ها" ? (
                    <span className="badge-danger badge-pill">
                      {this.state.courseCount}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
