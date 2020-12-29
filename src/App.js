import './App.css';
import Home from './pages/Home';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
    <Sidebar/>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
