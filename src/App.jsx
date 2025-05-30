import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar/Index";
import Header from "./pages/Header/Index";
import About from "./pages/About/Index";
import Services from "./pages/Services/Index";
import Teams from "./pages/Teams/Index";
import Project from "./pages/Project/Index";
import Testimonial from "./pages/Testimonial/Index";
import Blog from "./pages/Blog/Index";
import Contact from "./pages/Contact/Index";
import Footer from "./pages/Footer/Index";

import AboutDetail from "./pages/About/AboutDetail/index";
import Service_detail from "./pages/Services/ServiceDetail";
import TeamDetails from "./pages/Teams/TeamDetails";
import ProjectDetails from "./pages/Project/ProjectDetails";
import BlogDetail from "./pages/Blog/BlogDetails";
import ContactDetail from "./pages/Contact/ContactDetail";
import useConfigCompanyStore from "./store/configCompany.store";
import { useEffect } from "react";
import DetailTestimonial from "./pages/Testimonial/detail/Index";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      {/* <Teams /> */}
      <Project />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

// atur tiap fitur
function App() {
  const { fetchCompanyData } = useConfigCompanyStore();

  useEffect(() => {
    fetchCompanyData();
  }, [fetchCompanyData]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<AboutDetail />} />
        <Route path="/tim-kami" element={<TeamDetails />} />
        <Route path="/layanan-kami" element={<Service_detail />} />
        <Route path="/project-kami" element={<ProjectDetails />} />
        <Route path="/blog-kami" element={<BlogDetail />} />
        <Route path="/testimonial" element={<DetailTestimonial />} />
        <Route path="/contact-detail" element={<ContactDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
