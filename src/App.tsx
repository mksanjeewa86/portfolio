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
  NotFound,
  Maintenance,
} from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HOME,
  ABOUT,
  EDUCATION,
  WORK,
  SKILLS,
  OTHER,
  CONTACT,
  MAINTENANCE,
} from "./router";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={ABOUT} element={<About />} />
          <Route path={EDUCATION} element={<History />} />
          <Route path={WORK} element={<Work />} />
          <Route path={SKILLS} element={<Skills />} />
          <Route path={OTHER} element={<Other />} />
          <Route path={CONTACT} element={<Contact />} />
          <Route path={MAINTENANCE} element={<Maintenance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
