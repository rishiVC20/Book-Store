import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";

function Courses() {
  return (
    <>
      <Navbar className="bg-white"></Navbar>
      <div className="min-h-screen bg-white dark:bg-slate-900 dark:text-white">
        <Course></Course>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Courses;
