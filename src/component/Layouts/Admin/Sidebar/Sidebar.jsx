import { Link } from "react-router-dom";
import classes from "./sidebar.module.css";
import { MdDashboard } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { GrSettingsOption } from "react-icons/gr";
import { BiLogOutCircle } from "react-icons/bi";
import { useLocation } from "react-router-dom";
export default function Sidebar({ extend }) {
  const { pathname } = useLocation();

  return (
    <section className={classes.sidebar + (extend ? " " + classes.hide : "")}>
      <Link to="#" className={classes.brand}>
        <FaLayerGroup />
        <span className="text">AdminHub</span>
      </Link>
      <ul className={classes.sideMenu + " " + classes.top}>
        <li className={pathname === "/dashboard" ? classes.active : ""}>
          <Link to="/dashboard">
            <MdDashboard />
            <span className="text">Dashboard</span>
          </Link>
        </li>
        <li className={pathname === "/dashboard/users" ? classes.active : ""}>
          <Link to="/dashboard/users">
            <MdDashboard />
            <span className="text">Users</span>
          </Link>
        </li>
        <li>
          <Link to="/analytics">
            <MdDashboard />
            <span className="text">Analytics</span>
          </Link>
        </li>
        <li>
          <Link to="/message">
            <MdDashboard />
            <span className="text">Message</span>
          </Link>
        </li>
        <li>
          <Link to="/team">
            <MdDashboard />
            <span className="text">Team</span>
          </Link>
        </li>
      </ul>
      <ul className={classes.sideMenu}>
        <li>
          <Link to="/settings">
            <GrSettingsOption />
            <span className="text">Settings</span>
          </Link>
        </li>
        <li>
          <Link to="" className={classes.logout}>
            <BiLogOutCircle />
            <span className="text">Logout</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
