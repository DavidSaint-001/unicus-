import { Routes, Route } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Courses from "../Pages/Courses";
import Contact from "../Pages/Contact";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";
import CourseRegister from "../Pages/CourseRegister";
import Faq from "../Pages/Faq";

// Course Detail Pages
import FrontendDetails from "../pages/courseDetails/FrontendDetails";
import DigitalMarketingDetails from "../pages/courseDetails/DigitalMarketingDetails";
import MotionGraphicsDetails from "../pages/courseDetails/MotionGraphicsDetails";
import ProjectManagementDetails from "../pages/courseDetails/ProjectManagementDetails";
import DataAnalysisDetails from "../pages/courseDetails/DataAnalysisDetails";
import CybersecurityDetails from "../pages/courseDetails/CybersecurityDetails";
import PythonProgrammingDetails from "../pages/courseDetails/PythonProgrammingDetails";
import MobileAppDevelopmentDetails from "../pages/courseDetails/MobileAppDevelopmentDetails";
import GraphicDesignDetails from "../pages/courseDetails/GraphicDesignDetails";
import VideoEditingDetails from "../pages/courseDetails/VideoEditingDetails";
import ComputerAppreciationDetails from "../pages/courseDetails/ComputerAppreciationDetails";
import IntroductionToAIDetails from "../pages/courseDetails/IntroductionToAIDetails";
import UIUXDesignDetails from "../pages/courseDetails/UIUXDesignDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        
        {/* Course Detail Routes */}
        <Route path="/courses/frontend" element={<FrontendDetails />} />
        <Route path="/courses/digital-marketing" element={<DigitalMarketingDetails />} />
        <Route path="/courses/motion-graphics" element={<MotionGraphicsDetails />} />
        <Route path="/courses/project-management" element={<ProjectManagementDetails />} />
        <Route path="/courses/data-analysis" element={<DataAnalysisDetails />} />
        <Route path="/courses/cybersecurity" element={<CybersecurityDetails />} />
        <Route path="/courses/python-programming" element={<PythonProgrammingDetails />} />
        <Route path="/courses/mobile-app-development" element={<MobileAppDevelopmentDetails />} />
        <Route path="/courses/graphic-design" element={<GraphicDesignDetails />} />
        <Route path="/courses/video-editing" element={<VideoEditingDetails />} />
        <Route path="/courses/computer-appreciation" element={<ComputerAppreciationDetails />} />
        <Route path="/courses/introduction-to-ai" element={<IntroductionToAIDetails />} />
        <Route path="/courses/ui-ux-design" element={<UIUXDesignDetails />} />
      </Route>

      {/* Auth routes (no navbar/footer) */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      
      {/* Course Registration - requires auth */}
      <Route path="/course-register" element={<CourseRegister />} />
    </Routes>
  );
};

export default AppRoutes;
