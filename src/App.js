import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductTitle from './components/ProductTitle/ProductTitle';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <div className="container">
        <ProductTitle/>
        <Footer/>
      </div>
      </>
    </div>
  );
}

export default App;
