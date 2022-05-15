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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HOME, ABOUT, HISTORY, WORK, SKILLS, OTHER, CONTACT } from "./router";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={ABOUT} element={<About />} />
          <Route path={HISTORY} element={<History />} />
          <Route path={WORK} element={<Work />} />
          <Route path={SKILLS} element={<Skills />} />
          <Route path={OTHER} element={<Other />} />
          <Route path={CONTACT} element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
