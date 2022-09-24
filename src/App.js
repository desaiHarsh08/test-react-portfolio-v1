import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import { NavBar } from "./Components/NavBar";
import { Portfolio } from "./Components/Portfolio";
import { MyFooter } from "./Components/MyFooter";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <MyFooter />
    </div>
  );
}

export default App;
