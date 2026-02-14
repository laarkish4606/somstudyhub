import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/home/header";

// Pages
import HomePage from "./pages/HomePage";
import Grade6Page from "./pages/Grade6Page";
import Grade8Page from "./pages/Grade8Page";
import Developer from "./pages/Developer";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import Grade6CoursePage from "./pages/Grade6CoursePage";
import Grade8CoursePage from "./pages/Grade8CoursePage";
import ManagePage from "./pages/ManagePage";
import AddCourses from "./components/manage/AddCourses";
import Grade6Courses from "./components/courses/Grade6Courses";

const App = () => {
  return (
    <>
      <Header /> {/* ✅ Always visible */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grade6" element={<Grade6Page />} />
        <Route path="/grade8" element={<Grade8Page />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/grade6courses/:year" element={<Grade6Courses />} />        <Route path="/manage" element={<ManagePage />} />
        <Route path="/manage/addcourses" element={<AddCourses />} />
      </Routes>
    </>
  );
};

export default App;