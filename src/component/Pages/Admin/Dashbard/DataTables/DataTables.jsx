import classes from "./dataTables.module.css";
export default function DataTabels() {
  return (
    <div className={classes.tableData}>
      <div className={classes.order}>
        <div className={classes.head}>
          <h3>Recent Orders</h3>
          <i className="bx bx-search"></i>
          <i className="bx bx-filter"></i>
        </div>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Date Order</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="https://img.freepik.com/free-vector/red-clipart-flower-t-shirt-print_1305-5002.jpg?w=740&t=st=1660933387~exp=1660933987~hmac=f03085bafec5e1b7ecce203820995c7e4e6b5aaf3e2b552e5351a0c76d00ef73z" />
                <p>John Doe</p>
              </td>
              <td>01-10-2021</td>
              <td>
                <span className={`${classes.status} ${classes.completed}`}>
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://img.freepik.com/free-vector/red-clipart-flower-t-shirt-print_1305-5002.jpg?w=740&t=st=1660933387~exp=1660933987~hmac=f03085bafec5e1b7ecce203820995c7e4e6b5aaf3e2b552e5351a0c76d00ef73z" />
                <p>John Doe</p>
              </td>
              <td>01-10-2021</td>
              <td>
                <span className={`${classes.status} ${classes.pending}`}>
                  Pending
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://img.freepik.com/free-vector/red-clipart-flower-t-shirt-print_1305-5002.jpg?w=740&t=st=1660933387~exp=1660933987~hmac=f03085bafec5e1b7ecce203820995c7e4e6b5aaf3e2b552e5351a0c76d00ef73z" />
                <p>John Doe</p>
              </td>
              <td>01-10-2021</td>
              <td>
                <span className={`${classes.status} ${classes.process}`}>
                  Process
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://img.freepik.com/free-vector/red-clipart-flower-t-shirt-print_1305-5002.jpg?w=740&t=st=1660933387~exp=1660933987~hmac=f03085bafec5e1b7ecce203820995c7e4e6b5aaf3e2b552e5351a0c76d00ef73z" />
                <p>John Doe</p>
              </td>
              <td>01-10-2021</td>
              <td>
                <span className={`${classes.status} ${classes.pending}`}>
                  Pending
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://img.freepik.com/free-vector/red-clipart-flower-t-shirt-print_1305-5002.jpg?w=740&t=st=1660933387~exp=1660933987~hmac=f03085bafec5e1b7ecce203820995c7e4e6b5aaf3e2b552e5351a0c76d00ef73z" />
                <p>John Doe</p>
              </td>
              <td>01-10-2021</td>
              <td>
                <span className={`${classes.status} ${classes.completed}`}>
                  Completed
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Todo />
    </div>
  );
}

export function Todo() {
  return (
    <div className={classes.todo}>
      <div className={classes.head}>
        <h3>Todos</h3>
        <i className="bx bx-plus"></i>
        <i className="bx bx-filter"></i>
      </div>
      <ul className={classes.todoList}>
        <li className={classes.todoCompleted}>
          <p>Todo List</p>
          <i className="bx bx-dots-vertical-rounded"></i>
        </li>
        <li className={classes.todoCompleted}>
          <p>Todo List</p>
          <i className="bx bx-dots-vertical-rounded"></i>
        </li>
        <li className={classes.notCompleted}>
          <p>Todo List</p>
          <i className="bx bx-dots-vertical-rounded"></i>
        </li>
        <li className={classes.todoCompleted}>
          <p>Todo List</p>
          <i className="bx bx-dots-vertical-rounded"></i>
        </li>
        <li className={classes.notCompleted}>
          <p>Todo List</p>
          <i className="bx bx-dots-vertical-rounded"></i>
        </li>
      </ul>
    </div>
  );
}
