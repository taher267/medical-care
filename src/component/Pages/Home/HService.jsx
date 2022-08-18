import "./h_service.css";
import { ImLab } from "react-icons/im";
import { RiHeartPulseFill } from "react-icons/ri";
import { FaTooth } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { BiBody, BiDna } from "react-icons/bi";
import useDatas from "./../../../hooks/useData";

export default function HService() {
  const { awards } = useDatas("awards");
  // console.log(awards);
  return (
    <section className="section service gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className="section-title">
              <h2>{awards?.title}</h2>
              <div className="divider mx-auto my-4"></div>
              <p>{awards?.desc}</p>
            </div>
          </div>
        </div>

        <div className="row">
          {awards?.departments?.map(({ id, ...rest }) => (
            <ServiceItem key={id} {...rest} />
          ))}
        </div>
      </div>
    </section>
  );
}

export const ServiceItem = ({ icon, title, desc }) => {
  const icons = {
    lab: <ImLab />,
    heartPulse: <RiHeartPulseFill />,
    dental: <FaTooth />,
    dental: <FaTooth />,
    body: <BiBody />,
    brain: <GiBrain />,
    dna: <BiDna />,
  };
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
          <span className="text-lg">
            {icons[icon]}
            &nbsp;
          </span>
          <h4 className="mt-3 mb-3">{title}</h4>
        </div>

        <div className="content">
          <p className="mb-4">{desc}</p>
        </div>
      </div>
    </div>
  );
};
