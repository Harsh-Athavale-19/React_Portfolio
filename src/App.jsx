import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </>
  );
};

export default App;
