import './App.css';
import About from './components/about/About';
import Cards from './components/card/Cards';
import MyCarousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Yandex from './components/map/Map';
import { Statistics } from './components/statistics/Statistics';

function App() {
  return (
    <div className="App">
      <Header/>
      <MyCarousel/>
      <About/>
      <h1 style={{marginTop:'3rem'}}>E'lonlar</h1>
      <Cards/>
      <Statistics />
      <div style={{width:'100%', height: '500px'}}>

      <Yandex/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
