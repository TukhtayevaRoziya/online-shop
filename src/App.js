import './App.css';
import Cards from './components/card/Cards';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1 style={{marginTop:'3rem'}}>E'lonlar</h1>
      <Cards/>
    </div>
  );
}

export default App;
