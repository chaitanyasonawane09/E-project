import './App.css';
import Home from './Screen/Home';
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import Login from './Screen/Login';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import '../node_modules/bootstrap/dist/js/bootstap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstap.bundle.min.js'; 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Signup from './Screen/Signup';
import { CartProvider } from './Component/ContextReducer';
import MyOrder from './Screen/MyOrder'
import About from './Screen/About';

function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/createuser" element={<Signup/>}/>
        <Route exact path="/myOrder" element={<MyOrder/>}/>
        </Routes>
      </div>
    </Router>
    </CartProvider>
    
  );
}

export default App;
