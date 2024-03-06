import "./App.css";
import Companies from "./components/Companies/Companies";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/getStarted/GetStarted";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Properties from "./components/properties/Properties";
import Value from "./components/value/Value";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Properties/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
      </div>
      );
    }
    
    export default App;
    
    
    {/*
      
      */}