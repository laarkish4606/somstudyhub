import { Route, Routes } from "react-router-dom";
import Header from "./components/home/header";
import Grade6Courses from "./components/courses/Grade6Courses";
import AddCourses from "./components/manage/AddCourses";
import ContactPage from "./pages/ContactPage";
import Developer from "./pages/Developer";
import Grade6Page from "./pages/Grade6Page";
import Grade8Page from "./pages/Grade8Page";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ManagePage from "./pages/ManagePage";
import Grade8Courses from "./components/courses/Grade8Courses";
import EntrancePage from "./pages/EntrancePage";
import Signup from "./components/principle/signup";

const App = () => {
  return (
    <>
      <Header /> 

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grade6" element={<Grade6Page />} />
        <Route path="/grade8" element={<Grade8Page />} />
        <Route path="/entranceexam" element={<EntrancePage />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/grade6/grade6courses" element={<Grade6Courses/>} />
        <Route path="/grade8/grade8courses" element={<Grade8Courses/>} />
        <Route path="/manage" element={<ManagePage />} />      
        <Route path="/manage/addcourses" element={<AddCourses />} />
        <Route path="/signup" element={<Signup/>} />

      </Routes>
    </>
  );
};

export default App;