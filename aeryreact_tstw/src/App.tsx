import Navbar from "./navbar/navbar";
import Info from "./Info/info";
import Team from "./team/team";
import Projects from "./Projects/projects";
import Services from "./Services/services";
import Footer from "./Footer/footer";
import { useState, useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  //boolean states
  const [pageRestarted, setPageRestarted] = useState(true);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const triggerAnimationRef = useRef(false);
  const [initialCooldown, setInitialCooldown] = useState(true);
  const [animationInProgress, setAnimationInProgress] = useState(false);

  //current page check
  const [currentPage, setCurrentPage] = useState("start");

  //component switches
  const [infoContainerOnRef, setInfoContainer] = useState(true);
  const [teamContainerOnRef, setTeamContainer] = useState(false);
  const [contactContainerOnRef, setContactContainer] = useState(false);
  const [projectsContainerOnRef, setProjectsContainer] = useState(false);
  const [servicesContainerOnRef, setServicesContainer] = useState(false);

  //animation refs
  const title = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const appContainerRef = useRef<HTMLDivElement | null>(null);

  //info.tsx references
  const birdRef = useRef<HTMLImageElement | null>(null);
  const side1 = useRef<HTMLDivElement | null>(null);
  const side2 = useRef<HTMLDivElement | null>(null);

  //team.tsx references
  const meetRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);

  //projects.tsx references
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  //services.tsx references
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const serviceItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Debug logging
  useEffect(() => {
    console.log("Current page:", currentPage);
    console.log("Container states:", {
      info: infoContainerOnRef,
      team: teamContainerOnRef,
      contact: contactContainerOnRef,
      projects: projectsContainerOnRef,
      services: servicesContainerOnRef
    });
  }, [currentPage, infoContainerOnRef, teamContainerOnRef, contactContainerOnRef, projectsContainerOnRef, servicesContainerOnRef]);

  useEffect(() => {
    const cooldownTimer = setTimeout(() => {
      setInitialCooldown(false);
    }, 5000);

    return () => clearTimeout(cooldownTimer);
  }, []);

  useEffect(() => {
    const cooldownTimer = setTimeout(() => {
      setPageRestarted(false);
    }, 2000);

    return () => clearTimeout(cooldownTimer);
  }, []);

  // Ensure Info component is shown on initial load
  useEffect(() => {
    console.log("Setting initial container states");
    setInfoContainer(true);
    setTeamContainer(false);
    setContactContainer(false);
    setProjectsContainer(false);
    setServicesContainer(false);
  }, []);

  const transitionTrigger1 = () => {
    const t1 = gsap.timeline();

    setAnimationInProgress(true);

    if (title.current && side1.current && side2.current) {
      gsap.to(
        [title.current, side1.current, side2.current],
        {
          opacity: 0,
          duration: 1,
          translateY: -10,
          ease: "power2.inOut"
        }
      );
    }

    if (birdRef.current) {
      t1.fromTo(
        birdRef.current,
        { scale: 1, rotation: 0 },
        {
          scale: 1.1,
          rotation: 360,
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
        },
      ).to(
        birdRef.current,
        {
          scale: 1,
          duration: 0.5,
          ease: "power1.out",
          rotation: 720
        }
      ).to(
        birdRef.current,
        {
          scale: 20,
          duration: 1.8,
          translateX: 1000,
          ease: "power1.out",
          delay: 0.2,
          onComplete: () => {
            setInfoContainer(false);
          }
        }
      );
    }

    if (appContainerRef.current) {
      t1.to(
        appContainerRef.current,
        {
          css: {
            background: "#ffffff",
          },
          duration: 1.5,
          ease: "power2.inOut"
        },
        "-=1"
      );
    }

    if (logoRef.current) {
      t1.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0, rotation: -180 },
        {
          scale: 0.7,
          opacity: 1,
          rotation: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
          onComplete: () => {
            setTeamContainer(true);
            requestAnimationFrame(() => {
              if (meetRef.current && profileRef.current) {
                gsap.fromTo(
                  [meetRef.current, profileRef.current],
                  {
                    opacity: 0,
                    translateX: -50,
                    scale: 0.8
                  },
                  {
                    opacity: 1,
                    translateX: 0,
                    scale: 1,
                    duration: 1.2,
                    stagger: 0.3,
                    ease: "back.out(1.7)"
                  }
                );
              }
              setAnimationInProgress(false);
            });
          }
        },
        "-=1.2"
      );
    }
  }

  const transitionTrigger2 = () => {
    const t2 = gsap.timeline();

    setAnimationInProgress(true);

    if (profileRef.current && meetRef.current) {
      t2.to(
        [profileRef.current, meetRef.current],
        {
          translateX: 20,
          opacity: 0,
          duration: 1,
          stagger: 0.2
        }
      );
    }

    if (logoRef.current) {
      t2.to(
        logoRef.current,
        {
          scale: 0,
          opacity: 0.5,
          ease: "bounce.in",
          duration: 1,
          onComplete: () => {
            setTeamContainer(false);
            setContactContainer(true);
            requestAnimationFrame(() => {
              setAnimationInProgress(false);
            });
          }
        },
        "-=0.05"
      );
    }
    setTriggerAnimation(false)
  }

  const transitionTrigger3 = () => {
    const t3 = gsap.timeline();

    setAnimationInProgress(true);

    if (appContainerRef.current) {
      t3.to(
        appContainerRef.current,
        {
          css: {
            background: "linear-gradient(to bottom, var(--aery-purple), #d6d3f8)",
          },
          duration: 1
        }
      );
    }

    if (logoRef.current) {
      t3.to(
        logoRef.current,
        {
          scale: 0,
          opacity: 0,
          duration: 1,
          onComplete: () => {
            setContactContainer(false);
            setInfoContainer(true);
            requestAnimationFrame(() => {
              if (title.current && birdRef.current) {
                const t4 = gsap.timeline();
                t4.fromTo(
                  birdRef.current,
                  {
                    scale: 20,
                    opacity: 1
                  },
                  {
                    scale: 1,
                    duration: 2,
                    ease: "bounce.out",
                  }
                ).to(
                  title.current,
                  {
                    opacity: 1,
                    duration: 3
                  }
                );
              }
              setAnimationInProgress(false);
            });
          }
        }
      );
    }
  }

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (initialCooldown || animationInProgress) { return; }

      console.log("Key pressed:", event.key, "Current page:", currentPage);

      if (event.key === "ArrowDown") {
        if (currentPage === "start") {
          console.log("Down arrow detected - moving to team page");
          transitionTrigger1();
          setCurrentPage("team");
        } else if (currentPage === "team") {
          console.log("Down arrow detected - moving to contact page");
          transitionTrigger2();
          setCurrentPage("contact");
        }
      } else if (event.key === "ArrowUp") {
        if (currentPage === "contact") {
          console.log("Up arrow detected - moving back to team");
          transitionTrigger3();
          setCurrentPage("team");
        } else if (currentPage === "team") {
          console.log("Up arrow detected - moving back to start");
          transitionTrigger2();
          setCurrentPage("start");
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [initialCooldown, currentPage, animationInProgress]);

  // Handle page transitions
  useEffect(() => {
    if (currentPage === "projects") {
      setInfoContainer(false);
      setTeamContainer(false);
      setContactContainer(false);
      setProjectsContainer(true);
      setServicesContainer(false);
      if (appContainerRef.current) {
        gsap.to(appContainerRef.current, {
          css: {
            background: "linear-gradient(to bottom, var(--aery-purple), #d6d3f8)",
          },
          duration: 1
        });
      }
    } else if (currentPage === "services") {
      setInfoContainer(false);
      setTeamContainer(false);
      setContactContainer(false);
      setProjectsContainer(false);
      setServicesContainer(true);
      if (appContainerRef.current) {
        gsap.to(appContainerRef.current, {
          css: {
            background: "linear-gradient(to bottom, var(--aery-purple), #d6d3f8)",
          },
          duration: 1
        });
      }
    }
  }, [currentPage]);

  return (
    <div ref={appContainerRef} className="min-h-screen bg-gradient-to-b from-[var(--aery-purple)] to-[#d6d3f8] transition-all duration-1000">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        animationInProgress={animationInProgress}
        transitionTrigger1={transitionTrigger1}
        transitionTrigger2={transitionTrigger2}
        transitionTrigger3={transitionTrigger3}
        setInfoContainer={setInfoContainer}
        setTeamContainer={setTeamContainer}
        setContactContainer={setContactContainer}
        setProjectsContainer={setProjectsContainer}
        setServicesContainer={setServicesContainer}
      />
      <div className="container mx-auto my-auto">
        {infoContainerOnRef && (
          <Info
            restarted={pageRestarted}
            containerOn={infoContainerOnRef}
            logoRef={logoRef}
            side1={side1}
            side2={side2}
          />
        )}
        {teamContainerOnRef && (
          <Team
            containerOn={teamContainerOnRef}
            meetRef={meetRef}
            profileRef={profileRef}
          />
        )}
        {projectsContainerOnRef && (
          <Projects
            projectsRef={projectsRef}
            projectCardsRef={projectCardsRef}
          />
        )}
        {servicesContainerOnRef && (
          <Services
            servicesRef={servicesRef}
            serviceItemsRef={serviceItemsRef}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;