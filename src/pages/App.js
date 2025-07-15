import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import About from "./About";
import Team from "./Team";
import Board from "./Board";
import Volunteer from "./Volunteer";
import VolunteerApplication from "./VolunteerApplication";
import VolunteerResources from "./VolunteerResources";
import Donate from "./Donate";
import Events from "./Events";
import News from "./News";
import Shop from "./Shop";
import Blog from "./Blog";
import Newsletter from "./Newsletter";
import Contact from "./Contact";
import Privacy from "./Privacy";
import Careers from "./Careers";
import FindCASA from "./FindCASA";

export default function App() {
  // Determine basename based on environment
  // Use "/casa-project-worcester" for GitHub Pages, "/" for local development
  const basename = process.env.NODE_ENV === 'production' ? '/casa-project-worcester' : '/';
  
  return (
    <Router basename={basename}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/board" element={<Board />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/volunteer/application" element={<VolunteerApplication />} />
            <Route path="/volunteer/resources" element={<VolunteerResources />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/find-casa" element={<FindCASA />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
} 