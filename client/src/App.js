import Head from "./components/Header/Head.jsx";
import Home from "./pages/Home/Home.jsx";
import "./App.css"
import Footer from "./components/Footer/Footer.jsx";
import BackToTop from "./components/BackToTop/BackToTop.jsx";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="app-wrapper">
      <div className="background-image"></div>
      <div className="content-wrapper">
        <Head scrollToSection={scrollToSection} />
        <Home />
        <Footer scrollToSection={scrollToSection} />
      </div>
      <BackToTop />
    </div>
  );
}

export default App;
