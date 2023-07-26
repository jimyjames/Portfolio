import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const HomeThree = React.lazy(() => import("pages/HomeThree"));
const HomeFour = React.lazy(() => import("pages/HomeFour"));
const HomeOne = React.lazy(() => import("pages/HomeOne"));
const HomeTwo = React.lazy(() => import("pages/HomeTwo"));
const AboutTwo = React.lazy(() => import("pages/AboutTwo"));
const HomeFive = React.lazy(() => import("pages/HomeFive"));
const Banner = React.lazy(() => import("pages/Banner"));
const About = React.lazy(() => import("pages/About"));
const HomeSeven = React.lazy(() => import("pages/HomeSeven"));
const Imagine = React.lazy(() => import("pages/Imagine"));
const Home1 = React.lazy(() => import("pages/Home1"));
const GetInTouch = React.lazy(() => import("pages/GetInTouch"));
const Services = React.lazy(() => import("pages/Services"));
const MyWork = React.lazy(() => import("pages/MyWork"));
const AboutOne = React.lazy(() => import("pages/AboutOne"));
const HomeNine = React.lazy(() => import("pages/HomeNine"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const LandingPageFour = React.lazy(() => import("pages/LandingPageFour"));
const LandingPageTwo = React.lazy(() => import("pages/LandingPageTwo"));
const LandingPageOne = React.lazy(() => import("pages/LandingPageOne"));
const LandingPageThree = React.lazy(() => import("pages/LandingPageThree"));
const HomeSix = React.lazy(() => import("pages/HomeSix"));
const HomeEight = React.lazy(() => import("pages/HomeEight"));
const LandingPageFive = React.lazy(() => import("pages/LandingPageFive"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPageFive />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homeeight" element={<HomeEight />} />
          <Route path="/homesix" element={<HomeSix />} />
          <Route path="/landingpagethree" element={<LandingPageThree />} />
          <Route path="/landingpageone" element={<LandingPageOne />} />
          <Route path="/landingpagetwo" element={<LandingPageTwo />} />
          <Route path="/landingpagefour" element={<LandingPageFour />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/homenine" element={<HomeNine />} />
          <Route path="/aboutone" element={<AboutOne />} />
          <Route path="/mywork" element={<MyWork />} />
          <Route path="/services" element={<Services />} />
          <Route path="/getintouch" element={<GetInTouch />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/imagine" element={<Imagine />} />
          <Route path="/homeseven" element={<HomeSeven />} />
          <Route path="/about" element={<About />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/homefive" element={<HomeFive />} />
          <Route path="/abouttwo" element={<AboutTwo />} />
          <Route path="/hometwo" element={<HomeTwo />} />
          <Route path="/homeone" element={<HomeOne />} />
          <Route path="/homefour" element={<HomeFour />} />
          <Route path="/homethree" element={<HomeThree />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
