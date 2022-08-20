import classes from "./contentHead.module.css";
import { Link } from "react-router-dom";
// import { BsChevronRight } from "react-icons/bs";
import { MdOutlineCloudDownload } from "react-icons/md";

export default function ContentHead({ title, bread }) {
  return (
    <div className={classes.headTitle}>
      <div className={classes.left}>
        {title && <h1>{title}</h1>}

        <ul className={classes.breadcrumb}>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>{/* <BsChevronRight /> */}></li>
          <li>
            <Link className={classes.active} to="/">
              Home
            </Link>
          </li>
        </ul>
      </div>
      <Link to="#" className={classes.btnDownload}>
        <MdOutlineCloudDownload />
        <span>Download PDF</span>
      </Link>
    </div>
  );
}
