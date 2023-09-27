
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


function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      {/* <MainHeading/> 
       <MostLoved/>
       
        <BrowseByCategory/> 
        <HorizontalCard />
        <Map/>
        <StayPage/> */}
        <SinglePageProduct/>
        <ContactPage/>

    </div>
    </>
  );
}

export default App;
