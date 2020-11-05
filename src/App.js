import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.css'
import Home from './Container/Pages/Home';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Shop from './Container/Pages/Shop';
import About from './Container/Pages/About';
import Query from './Container/Pages/Query';
import Categories from './Container/Pages/Categories';
import Cart from './Container/Pages/Cart';
import Product from './Container/Pages/Product';
import Blogs from './Container/Pages/Blogs';
import Profile from './Container/Pages/Profile';
import myProfile from './Container/Pages/myProfile';
import Address from './Container/Pages/Address';
import Admin from './Container/Pages/Admin';
import AdminBilling from './Container/Pages/AdminBilling';
import payment from './Container/Pages/payment';
function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/query" component={Query}></Route>
        <Route path="/categories" component={Categories}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/product" component={Product}></Route>
        <Route path="/blogs" component={Blogs}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/address" component={Address}></Route>
        <Route path="/myprofile" component={myProfile}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/adminbilling" component={AdminBilling}></Route>
        <Route path="/payment" component={payment}></Route>
        </Switch>
    </div>
    </Router>

  );
}

export default App;