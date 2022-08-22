import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import ClientSelection from "./ClientSelection/ClientSelection";
import Contact from "./Contact/Contact";
import ItemList from "./ItemList/ItemList";
import Layout from "./Layout/Layout";
import Layout2 from "./Layout/Layout2";
import SliderSection from "./SliderSection/SliderSection";

const Home = () => {
  return (
    <>
      <div className="hero_area">
        <div className="bg-box">
          <img src="Assets/images/hero-bg.jpg" alt="" />
        </div>
        <Header />
        <SliderSection />
      </div>

      <Layout />
      <ItemList />
      <Layout2 />
      <Contact />
      <ClientSelection />
      <Footer />
    </>
  );
};
export default Home;
