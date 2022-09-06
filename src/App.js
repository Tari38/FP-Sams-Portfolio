import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, NotFound, POne, PTwo, PThree, PFour } from "./components/containers/";
import Layout from "./components/layout/index.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="pone" element={<POne />}></Route>
          <Route path="ptwo" element={<PTwo />}></Route>
          <Route path="pthree" element={<PThree />}></Route>
          <Route path="pfour" element={<PFour />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
