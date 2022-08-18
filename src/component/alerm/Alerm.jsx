import { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import DateTime from "react-datetime-picker";

import moment from "moment";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
const options = {
  minDate: new Date(Date.now()),
  format: "y-MM-dd h:mm:ss a",
};

// console.log(new Date().getMinutes() + 10);

export function Alerm() {
  const { currentUser, fireLoading } = useAuth();
  const alert = useAlert();
  const [schedules, setSchedules] = useState([]);
  const [newAlarm, setNewAlarm] = useState(false);
  const [message, setMessage] = useState("");
  const [datetime, setDataTime] = useState(
    new Date(moment().add(20, "seconds")._d)
  );
  const submitHander = (e) => {
    e.preventDefault();

    if (checkDateTime()) {
      axios
        .post(`http://localhost:1001/add-schedule`, {
          datetime,
          message: message || "Alerm",
          email: currentUser.email,
          name: currentUser.displayName,
        })
        .then(({ data }) => {
          console.dir(data);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };
  const checkDateTime = () => {
    if (!datetime) {
      alert.error(`Time Should be provide`);
      return false;
    }
    const add20 = moment(datetime);
    // console.dir(add20.diff(moment()));
    if (15000 > add20.diff(moment())) {
      alert.error(
        `Time Should be ${moment().add(20, "seconds").format("h:mm:ss")}`
      );
      return false;
    }
    return true;
  };
  if (schedules && schedules.length) {
    schedules.forEach((item) => {
      setTimeout(() => {
        alert.success(`${item.message} This is ${item.datetime}`);
      }, moment(item.datetime).diff(moment()));
    });
  }
  useEffect(() => {
    if (currentUser?.email) {
      axios
        .get(`http://localhost:1001/my-schedule/${currentUser.email}`)
        .then(({ data }) => {
          setSchedules(data);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [currentUser, newAlarm]);

  if (fireLoading) return "Check Authentication!";
  if (!fireLoading && !currentUser?.email)
    return "Should be logged in to access this resouce!";
  return (
    <>
      {currentUser?.email && (
        <form
          onSubmit={submitHander}
          style={{
            display: "grid",
            width: "30vw",
            margin: "auto",
            gap: "1rem",
          }}
        >
          <h3>Alerm</h3>
          <DateTime onChange={setDataTime} {...options} value={datetime} />
          <textarea
            type="text"
            placeholder="Write a message"
            name="message"
            onChange={({ target: { value } }) => {
              setMessage(value);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}
