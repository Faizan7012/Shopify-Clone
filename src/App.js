import './App.css';
import AllRoutes from './Pages/AllRoutes';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <AllRoutes />
        <Footer />
    </div>
  );
}

export default App;

