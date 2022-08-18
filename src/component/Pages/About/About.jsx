import img1 from "/assets/images/service/service-1.jpg";
import img2 from "/assets/images/service/service-2.jpg";
import img3 from "/assets/images/service/service-3.jpg";
import img4 from "/assets/images/service/service-4.jpg";
import sign from "/assets/images/about/sign.png";
import team1 from "/assets/images/team/1.jpg";
import team2 from "/assets/images/team/3.jpg";
import logo1 from "/assets/images/about/1.png";
import logo2 from "/assets/images/about/2.png";
import logo3 from "/assets/images/about/3.png";
import logo4 from "/assets/images/about/4.png";
import logo5 from "/assets/images/about/5.png";
import logo6 from "/assets/images/about/6.png";

import "./about.css";
import gblCass from "../../css/style.module.css";
import MainLayout from "./../../Layouts/MainLayout";
import Bread from "./../Breadcrumb/Bread";
import { ServiceCart } from "../Services/Services";
import { DoctorCart } from "../Doctors/Doctors";
import useDatas from "./../../../hooks/useData";
import { v4 } from "uuid";
const serviceItems = [
  {
    id: v4(),
    image: img1,
    title: "Child care",
    desc: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    id: v4(),
    image: img2,
    title: "Personal Care",
    desc: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    id: v4(),
    image: img3,
    title: "CT scan",
    desc: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    id: v4(),
    image: img4,
    title: "Joint replacement",
    desc: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
];

const doctiors = [
  {
    id: v4(),
    image: team1,
    name: "John Marshal",
    dept: "Cardiology",
    specialist: "Internist, Emergency Physician",
    degree: "professor",
  },
  {
    id: v4(),
    image: team2,
    name: "Harrision Samuel",
    specialist: "Surgeon, Сardiologist",
    dept: "Radiology",
  },
  {
    id: v4(),
    image: team2,
    name: "Alexandar James",
    specialist: "Internist, General Practitioner",
    dept: "Dental",
    degree: "professor",
  },
  {
    id: v4(),
    image: team2,
    name: "Edward john",
    specialist: "Orthopedic Surgeon",
    dept: "Pediatry",
  },
  {
    id: v4(),
    image: team2,
    name: "Thomas Henry",
    specialist: "Orthopedic Surgeon",
    dept: "Neurology",
    degree: "professor",
  },
  {
    id: v4(),
    image: team2,
    name: "Henry samuel",
    specialist: "Orthopedic Surgeon",
    dept: "Palmology",
  },
  {
    id: v4(),
    image: team2,
    name: "Thomas alexandar",
    specialist: "Orthopedic Surgeon",
    dept: "Cardiology",
  },
  {
    id: v4(),
    image: team2,
    name: "Harisson Thomas",
    specialist: "Orthopedic Surgeon",
    dept: "Traumatology",
  },
  {
    id: v4(),
    image: team2,
    name: "Jonas Thomson",
    specialist: "Orthopedic Surgeon",
    dept: "Cardiology",
  },
  {
    id: v4(),
    image: team2,
    name: "Henry Forth",
    specialist: "Orthopedic Surgeon",
    dept: "Hematology",
  },

  {
    id: v4(),
    image: team2,
    name: "Thomas Henry",
    specialist: "Orthopedic Surgeon",
    dept: "Dental",
    degree: "professor",
  },
];

export default function About() {
  const { services } = useDatas("services");
  return (
    <MainLayout title="About">
      <Bread title="About Us" />
      <section
        className={`${gblCass.section} about-page`}
        style={{ background: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="title-color">
                Personal care for your healthy living
              </h2>
            </div>
            <div className="col-lg-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt, quod laborum alias. Vitae dolorum, officia sit! Saepe
                ullam facere at, consequatur incidunt, quae esse, quis ut
                reprehenderit dignissimos, libero delectus.
              </p>
              <img src={sign} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="fetaure-page ">
        <div className="container">
          <div className="row">
            {services?.slice(0, 4)?.map(({ id, ...rest }) => (
              <ServiceCart
                className="col-lg-3 col-md-6 service-item"
                key={id}
                {...rest}
              />
            ))}
          </div>
        </div>
      </section>
      <Achievements />
      <Team />
    </MainLayout>
  );
}

export const Team = () => {
  const { doctors } = useDatas("doctors");
  const allSpecialist = doctors?.reduce((acc, cur) => {
    if (cur.degree === "professor") {
      delete cur.dept;
      acc.push(cur);
    }
    return acc;
  }, []);
  // console.dir(allSpecialist);
  return (
    <section className="section team">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h2 className="mb-4">Meet Our Specialist</h2>
              <div className="divider mx-auto my-4"></div>
              <p>
                Today’s users expect effortless experiences. Don’t let essential
                people and processes stay stuck in the past. Speed it up, skip
                the hassles
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {allSpecialist?.map(({ id, ...rest }) => (
            <DoctorCart key={id} {...rest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Achievements = () => {
  const achievements = {
    title: "Our Doctors achievements",
    award: [
      { id: v4(), logo: logo1 },

      { id: v4(), logo: logo2 },

      { id: v4(), logo: logo3 },
      { id: v4(), logo: logo4 },

      { id: v4(), logo: logo5 },

      { id: v4(), logo: logo6 },
    ],
  };
  return (
    <section className="section awards">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h2 className="title-color">{achievements.title}</h2>
            <div className="divider mt-4 mb-5 mb-lg-0"></div>
          </div>

          <div className="col-lg-8">
            <div className="row">
              {achievements.award.map(({ logo, id }) => (
                <AchievementCart key={id} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export function AchievementCart({ logo }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="award-img">
        <img src={logo} alt="" className="img-fluid" />
      </div>
    </div>
  );
}
