import Head from "./components/Header/Head.jsx";
import Home from "./pages/Home/Home.jsx";
import "./App.css"
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="app-wrapper">
      <div className="background-image"></div>
      <div className="content-wrapper">
        <Head />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
