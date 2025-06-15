import Navbar from "./navbar/navbar";
import Info from "./Info/info";
import Team from "./team/team";
import Contact from './components/Contact';
import Projects from "./Projects/projects";
import Services from "./Services/services";
import Footer from "./Footer/footer";
import ppNavbar from "./privacypolicy/ppnavbar"
import { useState, useRef, useEffect } from "react";


function App() {
  const [pageRestarted, setPageRestarted] = useState(true);

  const appContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setPageRestarted(true); //only here for vercel bs
  })

  //container references for smooth scroll
  const teamRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);


  return (
    <div ref={appContainerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar 
        teamRef={teamRef}
        servicesRef={servicesRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Info
        restarted={pageRestarted}
      />
      <div className="container mx-auto">
        <Team teamRef={teamRef} />

        <Services ref={servicesRef} />

        <Projects ref={projectsRef} />
        
        <Contact contactRef={contactRef} />

      </div>
      <Footer />
    </div>
  );
}

export default App;