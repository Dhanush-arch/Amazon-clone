import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import DeliveryDetails from './pages/DeliveryDetails';
import Checkout from './pages/Checkout';
import TotalOrders from './pages/TotalOrders';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
     <Router>
        <div className="App">
            <Switch>
                <Route path='/login' exact component={Login}/>
                <Route path='/register' exact component={Register}/>
                <Route path='/' exact>
                    <Navbar/>
                    <Sidebar/>
                    <Home/>
                </Route>
                <Route path='/cart' exact>
                    <Navbar/>
                    <Sidebar/>
                    <Cart/>
                </Route>
                <Route path="/delivery" exact>
                    <Navbar/>
                    <Sidebar/>
                    <DeliveryDetails/>
                </Route>
                <Route path="/checkout" exact>
                    <Navbar/>
                    <Sidebar/>
                    <Checkout/>
                </Route>
                <Route path="/total-orders" exact>
                    <Navbar/>
                    <Sidebar/>
                    <TotalOrders/>
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
