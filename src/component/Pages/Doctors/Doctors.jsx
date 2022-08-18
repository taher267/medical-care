import Bread from "../Breadcrumb/Bread";
import MainLayout from "./../../Layouts/MainLayout";
import { Link } from "react-router-dom";
import useDatas from "./../../../hooks/useData";

export default function Doctors() {
  const { doctors } = useDatas("doctors");
  console.log;
  return (
    <MainLayout title="Doctors">
      <Bread title="Specalized Doctors" subtitle="All Doctors" />
      <section className="section doctors">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <h2>Doctors</h2>
                <div className="divider mx-auto my-4"></div>
                <p>
                  We provide a wide range of creative services adipisicing elit.
                  Autem maxime rem modi eaque, voluptate. Beatae officiis neque{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {doctors?.map(({ id, ...rest }) => (
              <DoctorCart key={id} {...rest} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
export function DoctorCart({ name, dept, image, specialist }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="team-block mb-5 mb-lg-0">
        <img src={image} alt="" className="img-fluid w-100" />

        <div className="content">
          <h4 className="mt-4 mb-0">
            <Link to="/">{name}</Link>
          </h4>
          <p>{dept || specialist}</p>
        </div>
      </div>
    </div>
  );
}
