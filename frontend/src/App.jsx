import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./components/Layout.jsx";
import PageLoader from "./components/PageLoader.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ContactModal from "./components/ContactModal.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Website pages
const HomeLayout = lazy(() => import("./pages/Home/HomeLayout.jsx"));
const About = lazy(() => import("./pages/about/About.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const ServiceDetails = lazy(() =>
  import("./pages/services/ServiceDetails.jsx")
); 
const Portfolio = lazy(() => import("./pages/portfolio/Portfolio.jsx"));
const ProjectDetail = lazy(() => import("./pages/portfolio/ProjectDetail.jsx"));
const Blogs = lazy(() => import("./pages/blogs/Blogs.jsx"));
const BlogDetails = lazy(() => import("./pages/blogs/BlogDetails.jsx"));
const Contact = lazy(() => import("./pages/contact/Contact.jsx"));
const OurTeam = lazy(() => import("./pages/ourteam/OurTeam.jsx"));

function App() {
  const [openContactModal, setOpenContactModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
      offset: 50,
      disable: "mobile",
    });
  }, []);

  return (
    <div>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route
            path="/"
            element={<Layout setOpenContactModal={setOpenContactModal} />}
          >
            <Route index element={<HomeLayout />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:id" element={<ServiceDetails />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route
              path="portfolio/:category/:projectId"
              element={<ProjectDetail />}
            />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="our-team" element={<OurTeam />} />
          </Route>
        </Routes>
      </Suspense>

      <ScrollToTop />
      <ContactModal
        openModal={openContactModal}
        setOpenModal={setOpenContactModal}
      />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default App;
