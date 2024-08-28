import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FreeBook from "../components/FreeBook";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="bg-white">
        <Navbar></Navbar>
        <Banner></Banner>
        <FreeBook></FreeBook>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
