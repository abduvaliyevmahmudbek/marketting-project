import Navbar from './../../components/navbar/Navbar';
import Footer from './../../components/footer/Footer';
import Header from '../../components/header/Header';
// import Banner from '../../components/banner/Banner';
import ExtraPages from '../../components/extraOrderSections/ExtraPages';


function Home() {
  return (
    <div className="home">
      {/* header */}
      <Header />
      
      {/* navbar */}
      <Navbar />
      
      {/* hero section */}
      {/* <Banner /> */}
      
      {/* collection */}
      {/* <Collection /> */}
      {/* <Products /> */}
      
      {/* testimonials */}
      {/* <Testimonials /> */}
      
      <ExtraPages />
      <Footer />
    </div>
  );
}

export default Home;
