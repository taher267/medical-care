import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GoThreeBars } from "react-icons/go";
import { AiFillBell } from "react-icons/ai";
export default function Navbar({ toggler }) {
  const darkLight = () => {
    const ele = document.querySelector("body");
    ele.classList.toggle("dark");
  };
  return (
    <nav className={classes.nav}>
      <GoThreeBars onClick={toggler} />
      <Link to="#" className={classes.navLink}>
        Category
      </Link>
      <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
        <div className={classes.formInput}>
          <input type="search" placeholder="Search..." />
          <button type="submit">
            <FiSearch />
          </button>
        </div>
      </form>
      <input
        type="checkbox"
        id="switchId"
        className={classes.switchModes}
        hidden
      />
      <label
        onClick={darkLight}
        htmlFor="switchId"
        className={classes.switchMode}
      ></label>
      <Link to="#" className={classes.notification}>
        <AiFillBell />
        <span className={classes.notificationNum}>8</span>
      </Link>
      <Link to="#" className={classes.profile}>
        <img src="https://img.freepik.com/free-vector/red-clipart-flower-t-shirt-print_1305-5002.jpg?w=740&t=st=1660933387~exp=1660933987~hmac=f03085bafec5e1b7ecce203820995c7e4e6b5aaf3e2b552e5351a0c76d00ef73z" />
      </Link>
    </nav>
  );
}
