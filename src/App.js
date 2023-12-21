import 'bootstrap/dist/css/bootstrap.css';
import Layout from './Components/Layout';
import {Routes,Route} from "react-router-dom"
import Login from './Components/login';
import Navbar from './Components/Navbar';
import Posts from './Components/Posts';
import Register from './Components/Register';

function App() {
  return (
    <>
    <Routes>
            <Route path="/" element={<Layout />}> </Route>
            <Route path="/Layout" element={<Layout />}> </Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Navbar" element={<Navbar/>}></Route>
            <Route path="/Posts" element={<Posts/>}></Route>
            <Route path="/Register" element={<Register/>}></Route>
    </Routes>
      </>

  );
}

export default App;
