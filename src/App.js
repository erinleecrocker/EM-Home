import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductTitle from './components/ProductTitle/ProductTitle';
import Footer from './components/Footer/Footer';
import LargeCard from './components/LargeCard/LargeCard';

function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <div className="container">
        <ProductTitle/>
        <LargeCard/>
      </div>
      <Footer/>
      </>
    </div>
  );
}

export default App;
