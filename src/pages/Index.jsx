import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import About from "../components/About";
const Index = () => {
  const [activeContent, setActiveContent] = useState("home");
  const renderContentPages = () => {
    switch (activeContent) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      default:
        return <Home />;
    }
  };
  return (
    <div>
      <Navbar setActiveContent={setActiveContent} />
      <div>{renderContentPages()}</div>
      <Footer />
    </div>
  );
};

export default Index;
