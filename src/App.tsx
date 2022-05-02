import { Navbar, Home, About, Skills, Contact, Footer } from "./components";
import { History, Other, Work } from "./components/history";

function App() {
  return (
    <div>
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
