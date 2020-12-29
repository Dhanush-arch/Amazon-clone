import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
    <Sidebar/>
      <Navbar/>
      <CheckOut/>
    </div>
  );
}

export default App;
