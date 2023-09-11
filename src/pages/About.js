import React from "react";
import Header from "../js/components/Header";
import Footer from "../js/components/Footer";
import Sidebar from "../js/components/Sidebar";
import MainAbout from "../js/components/MainAbout";
import DataWeather from "../js/components/FetchWeather";

export default function About() {
  
  return (
    <div className="container">
      <Header />
      <MainAbout />
      <Sidebar sidebarContent={DataWeather()}/>
      <Footer />
    </div>
  );
}
