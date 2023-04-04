import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Head from "./Components/Head/Head";
import Body from "./Components/ScrollHeader/ScrollHeader";
import Pages from "./Pages/Pages";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Entertainment from "./Entertainment/Entertainment";
import Travel from "./Travel/Travel";
import Blog from "./Blog/Blog";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/news" element={<Pages />}></Route>
              <Route path="/entertainment" element={<Entertainment />}></Route>
              <Route path="/travel" element={<Travel />}></Route>
              <Route path="/blog" element={<Blog />}></Route>
            </Routes>
            <Footer />
          </>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
