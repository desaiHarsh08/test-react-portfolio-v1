import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import { NavBar } from "./Components/NavBar";
import { Portfolio } from "./Components/Portfolio";
import { MyFooter } from "./Components/MyFooter";

function App() {
  return (
    <div>
      <div className="h-[90vh] flex flex-col justify-between ">
        <NavBar />
        <Home />
      </div>
      <About />
      <Portfolio />
      <Contact />
      <MyFooter />
    </div>
  );
}

export default App;
