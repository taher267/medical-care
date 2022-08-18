import "./features.css";
import { RiServiceLine, RiTimeLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import useDatas from "./../../../hooks/useData";
export default function Features() {
  const { timeSchedule } = useDatas("timeSchedule");
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="feature-block d-lg-flex">
              {timeSchedule?.map(({ id, ...rest }) => (
                <FeatureBlock key={id} {...rest} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const FeatureBlock = ({
  icon,
  title,
  heading,
  schedule,
  link,
  description,
}) => {
  const icons = {
    serviceLine: <RiServiceLine />,
    timeLine: <RiTimeLine />,
    support: <BiSupport />,
  };
  return (
    <div className="feature-item mb-5 mb-lg-0">
      <div className="feature-icon mb-4">{icons[icon]}</div>
      <span>{title}</span>
      <h4 className="mb-3">{heading}</h4>
      {description && <p className="mb-4">{description}</p>}
      {link && (
        <a href="/appoinment" className="btn btn-main btn-round-full">
          Make a appoinment
        </a>
      )}
      {schedule.length ? (
        <ul className="w-hours list-unstyled">
          {schedule.map(({ id, day, time }) => (
            <li key={id} className="d-flex justify-content-between">
              {day} : <span>{time}</span>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};
