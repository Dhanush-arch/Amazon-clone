import React, {useEffect, useState} from 'react'
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
import Products from './pages/Products'
import LoadingScreen from 'react-loading-screen'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>setloading(false), 3000);
    }, [])

  return (
      <LoadingScreen
   loading={loading}
   bgColor='#f1f1f1'
   spinnerColor='#9ee5f8'
   textColor='#676767'
   logoSrc="https://seeklogo.com/images/A/amazon-logo-86547BFB54-seeklogo.com.png"
 >
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
                <Route path='/products/:category' exact  render={routerProps => (
                    <>
                    <Navbar/>
                    <Sidebar/>
                    <Products {...routerProps} />
                    </>
                ) }/>

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
    </LoadingScreen>
  );
}

export default App;
