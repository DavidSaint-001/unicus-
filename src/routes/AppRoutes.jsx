import { Routes, Route } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Courses from "../Pages/Courses";
import Contact from "../Pages/Contact";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";
import Faq from "../Pages/Faq";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
<Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Route>

      {/* Auth routes (no navbar/footer if you want) */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
