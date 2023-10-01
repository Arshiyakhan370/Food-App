
import './App.css';
import MainHeading from './components/MainHeading';
import Navbar from './components/Navbar';
import MostLoved from './components/MostLoved';
import SinglePageProduct from './components/SinglePageProduct';
import BrowseByCategory from './components/BrowseByCategory';
import HorizontalCard from './components/HorizontalCard';
import Map from './components/Map';
import ContactPage from './components/ContactPage';
import StayPage from './components/StayPage';
import Page1 from './components/Page1';
import Footer from './components/Footer';
import Menu from './components/mainPage/Menu';
import SmallBorder from './components/SmallBorder';
import About from './components/mainPage/About';
import GiftCard from './components/mainPage/GiftCard';
import Contact from './components/mainPage/Contact';
import LogInPage from "./components/LogInPage";
import FaqPage from './components/mainPage/FaqPage';
import ForgetPass from './components/ForgetPass';
import CreateAccount from './components/CreateAccount';
import CartPage from './components/mainPage/CartPage';
import Disscount from './components/mainPage/Disscount';




function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      {/* <MainHeading/>  
      <SmallBorder/> */}
        {/* <MostLoved/> */}
       
         {/* <BrowseByCategory/>  */}
        {/*<HorizontalCard />
        <Map/>
        <StayPage/>  */}
        <SinglePageProduct/>
        {/* <Page1/> */}
        {/* <Menu/> */}
         {/* <About/> */}
        
        {/* <Map/> */}
         {/* <GiftCard/> */}
    {/* <ContactPage/>  */}
        {/* <Contact/> */}
        {/* <FaqPage/> */}
         {/* <Map/> */}
         {/* <LogInPage/> */}
        {/* <CreateAccount/> */}
        {/* <ForgetPass/>  */}
        {/* <CartPage/> */}
        {/* <Disscount/> */}
      <ContactPage/> 
        <Footer/>

    </div>
    </>
  );
}

export default App;
