import NavBar from "./inc/NavBar";
import Home from "./component/Home";
import Products from "./component/Products";
import ViewProduct from "./component/ViewProduct";
import "./App.css"
import {Route,Routes} from 'react-router-dom'
import SingleProduct from "./component/SingleProduct";


function App() {
 
  return (
  <div>
  <NavBar/>
  <Routes>
  <Route exact path="/" Component={Home}/>
  <Route exact path="/products" Component={Products}/>
  <Route exact path="/products/:id" Component={SingleProduct}/>
  <Route exact path="/cart" Component={ViewProduct}/>
  </Routes>
  </div>
)
}

export default App;
