import { BsCalendar2CheckFill } from "react-icons/bs";
import { BiGroup } from "react-icons/bi";
import { AiFillDollarCircle } from "react-icons/ai";
import classes from "./boxinfo.module.css";

export default function BoxInfo() {
  return (
    <ul className={classes.boxInfo}>
      <li>
        <span className={classes.bx}>
          <BsCalendar2CheckFill />
        </span>
        <span className="text">
          <h3>1020</h3>
          <p>New Order</p>
        </span>
      </li>
      <li>
        <span className={classes.bx}>
          <BiGroup />
        </span>

        <span className="text">
          <h3>2834</h3>
          <p>Visitors</p>
        </span>
      </li>
      <li>
        <span className={classes.bx}>
          <AiFillDollarCircle />
        </span>
        <span className="text">
          <h3>$2543</h3>
          <p>Total Sales</p>
        </span>
      </li>
    </ul>
  );
}
