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
import { useSelector } from "react-redux";

function App() {
  const { value } = useSelector((state: any) => state.lang);

  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home value={value} />} />
          <Route path={ABOUT} element={<About value={value} />} />
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
