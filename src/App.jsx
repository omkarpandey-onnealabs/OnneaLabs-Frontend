import Footer from "./components/footer";
import HeroSection from "./components/herosection";
import HeroSectionCompanies from "./components/herosection-2";
import HeroSectionWork from "./components/herosection-3";
import Navbar2 from "./components/Navbar2";
import PriceQuoteSection from "./components/priceQuote";


export default function App() {
  return (
    <>
    <Navbar2/>
    <HeroSection/>
    <HeroSectionCompanies/>
    <HeroSectionWork/>
    <PriceQuoteSection/>
    <Footer/>
    </>
  )
}