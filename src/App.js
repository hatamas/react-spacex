import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Item from './components/Item';
import Logo from './assets/SpaceX_logo.png';
import Menu from './assets/menu.png';
import Pic1 from './assets/Ax-3-mission.jpg';
import Pic2 from './assets/Starlink1.jpg';
import Pic3 from './assets/Starlink2.jpg';
import Pic4 from './assets/Flight.jpg';

function App() {
  return (
    <div className="App">
      <Header logo={Logo} menu={Menu}/>
      <div className='item-container'>
        <Item heading1="Current mission" heading2="AX-3 mission" button='Rewatch' image={Pic1}/>
        <Item heading1="Upcoming launch" heading2="Starlink mission" button='Watch' image={Pic2}/>
        <Item heading1="Recent launch" heading2="Starlink mission" button='Rewatch' image={Pic3}/>
        <Item heading1="Recent launch" heading2="Starship's second flight test" button='Learn more' image={Pic4}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
