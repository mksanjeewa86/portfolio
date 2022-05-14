import {
  Navbar,
  Home,
  About,
  Skills,
  Contact,
  Footer,
  History,
  Other,
  Work,
} from "./components";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter> */}
      <Navbar />
      <Home />
      <About />
      <History />
      <Work />
      <Skills />
      <Other />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
