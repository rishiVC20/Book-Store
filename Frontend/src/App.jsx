import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white"></div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Courses />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
