import 'bootstrap/dist/css/bootstrap.css';
import Layout from './Components/Layout';
import {Routes,Route} from "react-router-dom"
function App() {
 
  return (
    <>
    <Routes>
          <Route path="/" element={<Layout />}>
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
      </>

  );
}

export default App;
