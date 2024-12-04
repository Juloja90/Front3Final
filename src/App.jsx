import { ContextProvider } from "./Components/utils/global.context";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";



function App() {
  return (
    <ContextProvider>
      <Router futureFlags={{ v7_relativeSplatPath: true }}>
      <div className="App">
          <Navbar/>
          <main>
          <Routes>
            <Route path="/" element={< Navigate to="/home"/>} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/dentist/:id" element={<Detail/>}/>
            <Route path="/favs" element={<Favs/>}/>
          </Routes>
          </main>
          <Footer/>
      </div>
    </Router>
    </ContextProvider>
  );
}

export default App;
