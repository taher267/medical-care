import img1 from "/assets/images/about/img-1.jpg";
import img2 from "/assets/images/about/img-2.jpg";
import img3 from "/assets/images/about/img-3.jpg";
import "./h_about.css";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
const gallery = [
  {
    id: v4(),
    className: "",
    image: img1,
  },

  {
    id: v4(),
    className: "vertical",
    image: img3,
  },
  {
    id: v4(),
    className: "",
    image: img2,
  },
];
const aboutContent = {
  title: "Personal care & healthy living",
  description:
    "We provide best leading medicle service Nulla perferendis veniam  deleniti ipsum officia dolores repellat laudantium obcaecati neque.",
  btnTxt: "Services",
  link: "",
};
export default function HAbout() {
  return (
    <section className="section about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-sm-12">
            <div className="aboutGallery">
              {gallery.map(({ id, ...rest }) => (
                <GridGallery key={id} {...rest} />
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-content pl-4 mt-4 mt-lg-0">
              <h2 className="title-color">{aboutContent.title}</h2>
              <p className="mt-4 mb-5">{aboutContent.description}</p>

              <Link
                to={aboutContent.link}
                className="btn btn-main-2 btn-round-full btn-icon"
              >
                {aboutContent.btnTxt}
                <AiOutlineRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const GridGallery = ({ className, image }) => {
  return (
    <div className={className}>
      <img src={image} />
    </div>
  );
};
