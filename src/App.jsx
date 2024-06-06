import React from "react";
import Pizza from "./Components/Pizza";
import Header from "./Components/Header";
import Menu from "./Components/Menu"; 
import "./index.css";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
