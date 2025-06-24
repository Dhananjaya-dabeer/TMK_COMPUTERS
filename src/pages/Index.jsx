import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import About from "../components/About";
import Services from "../components/Services";
const Index = () => {
  const [activeContent, setActiveContent] = useState("home");
  const renderContentPages = () => {
    switch (activeContent) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      default:
        return <Home />;
    }
  };
  return (
    <div>
      <Navbar
        setActiveContent={setActiveContent}
        activeContent={activeContent}
      />
      <div>{renderContentPages()}</div>
      <Footer />
    </div>
  );
};

export default Index;
