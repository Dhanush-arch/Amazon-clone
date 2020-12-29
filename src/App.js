import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import DeliveryDetails from './pages/DeliveryDetails';
import Checkout from './pages/Checkout';
import TotalOrders from './pages/TotalOrders';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
    <Sidebar/>
      <Navbar/>
      <TotalOrders/>
    </div>
  );
}

export default App;
