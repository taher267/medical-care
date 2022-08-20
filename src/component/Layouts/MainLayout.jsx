import Footer from "./Footer/Footer";
import MetaData from "./../MetaData/MetaData";

export default function MainLayout({ children, title }) {
  return (
    <>
      {title && <MetaData title={title} />}
      {children}
      <Footer />
    </>
  );
}
