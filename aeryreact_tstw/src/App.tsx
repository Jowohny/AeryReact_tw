import Navbar from "./navbar/navbar";
import Info from "./Info/info";
import Team from "./team/team";
import Contact from './components/Contact';
import Projects from "./Projects/projects";
import Services from "./Services/services";
import Footer from "./Footer/footer";
import { useState, useRef } from "react";


function App() {
  const [pageRestarted, setPageRestarted] = useState(true);

  const appContainerRef = useRef<HTMLDivElement | null>(null);


  return (
    <div ref={appContainerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <Info
        restarted={pageRestarted}
      />
      <div className="container mx-auto">
        <Team
          restarted={pageRestarted}
        />

      </div>
      <Footer />
    </div>
  );
}

export default App;