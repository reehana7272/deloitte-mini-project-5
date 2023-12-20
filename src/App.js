import 'bootstrap/dist/css/bootstrap.css';
import Layout from './Components/Layout';
import {Routes,Route} from "react-router-dom"
import Login from './Components/login';
function App() {
 
  return (
    <>
    <Routes>
          <Route path="/" element={<Layout />}> </Route>
            <Route path="/Login" element={<Login/>}></Route>
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
      </>

  );
}

export default App;
