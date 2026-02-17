import { Route, Routes } from "react-router-dom";
import Header from "./components/home/header";

// Pages
import Grade6Courses from "./components/courses/Grade6Courses";
import AddCourses from "./components/manage/AddCourses";
import ContactPage from "./pages/ContactPage";
import Developer from "./pages/Developer";
import Grade6Page from "./pages/Grade6Page";
import Grade8Page from "./pages/Grade8Page";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ManagePage from "./pages/ManagePage";

const App = () => {
  return (
    <>
      <Header /> 

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