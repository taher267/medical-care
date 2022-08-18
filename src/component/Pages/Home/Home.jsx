import MainLayout from "../../Layouts/MainLayout";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import HService from "./HService";
import HAbout from "./HAbout";

export default function Home() {
  return (
    <>
      <MainLayout title="Home">
        <Banner />
        <Features />
        <HAbout />
        <HService />
      </MainLayout>
    </>
  );
}
