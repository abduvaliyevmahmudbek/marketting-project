import Navbar from './../../components/navbar/Navbar';
import Footer from './../../components/footer/Footer';
import Header from '../../components/header/Header';
// import Banner from '../../components/banner/Banner';
import ExtraPages from '../../components/extraOrderSections/ExtraPages';
import Testimonials from '@/components/testimonials/Testimonials';
import Products from '../products/Products';
import ProductFilters from '../products/ProductFilters';


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
      <ProductFilters/>
      
      <Products />
      
      {/* testimonials */}
      <Testimonials />
      
      <ExtraPages />
      <Footer />
    </div>
  );
}

export default Home;
