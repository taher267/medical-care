import MetaData from "./../../MetaData/MetaData";
import Footer from "./../Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import classes from "./adminLayout.module.css";
import useWindowWidth from "./../../../hooks/useWindowWidth";

export default function AdminLayout({ children, title }) {
  const { onSmallScreen: extendToggle, setOnSmallScreen: setExtendToggle } =
    useWindowWidth(900);
  const toggler = () =>
    setExtendToggle((p) => {
      sessionStorage.setItem("sidebarCtrl", !p);
      return !p;
    });
  return (
    <>
      {title && <MetaData title={title} />}
      <Sidebar extend={extendToggle} setExtend={toggler} />
      <section
        className={`${extendToggle && classes.expendContent} ${
          classes.content
        }`}
      >
        <Navbar toggler={toggler} />
        <main className={classes.main}>{children}</main>
      </section>

      <Footer />
    </>
  );
}
