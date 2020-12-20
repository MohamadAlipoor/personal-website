import React from "react";
import { Link } from "react-router-dom";
import getAdminNavLinks from "../../services/adminNavLinks";

class Sidebar extends React.Component {
  render() {
    const adminLinks = getAdminNavLinks();

    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            {adminLinks.map((nav) => (
              <li className="nav-item" key={nav.id}>
                <Link className="nav-link" to={nav.link}>
                  <span className={nav.icon} />
                  <span className="m-2">{nav.text}</span>
                </Link>
                <hr className="shadow" />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Sidebar;