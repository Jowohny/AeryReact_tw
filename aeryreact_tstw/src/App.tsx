import Navbar from "./navbar/navbar";
import Info from "./Info/info";
import Team from "./team/team";
import { useState, useEffect, useRef } from "react";
import gsap from 'gsap';

function App() {
  //boolean states
  const [pageRestarted, setPageRestarted] = useState(true);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const triggerAnimationRef = useRef(false);
  const [initialCooldown, setInitialCooldown] = useState(true);
  const [animationInProgress, setAnimationInProgress] = useState(false);

  //current page check
  const [currentPage, setCurrentPage] = useState("start");

  //recent button press check
  let recentButtonRef = "";

  //component switches
  const [infoContainerOnRef, setInfoContainer] = useState(true);
  const [teamContainerOnRef, setTeamContainer] = useState(false);

  //navbar.tsx references
  const title = useRef(null);
  const logoRef = useRef(null);
  const appContainerRef = useRef(null);

  //info.tsx references
  const birdRef = useRef(null);
  const side1 = useRef(null);
  const side2 = useRef(null);

  //team.tsx references
  const meetRef = useRef(null);
  const profileRef = useRef(null);

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

  const transitionTrigger1 = () => {
    const t1 = gsap.timeline();

    setAnimationInProgress(true);

    gsap.to(
      [title.current, side1.current, side2.current],
      {
        opacity: 0,
        duration: 1,
        translateY: -10,
      }
    );

    t1.fromTo(
      birdRef.current,
      { scale: 1 },
      {
        scale: 1.1,
        duration: 1,
        ease: "bounce.in",
        onComplete: () => {
        }
      },
    ).to(
      birdRef.current,
      { scale: 1, duration: 0.5, ease: "power1.out" }
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
    ).to(
      appContainerRef.current,
      {
        css: {
          background: "#ffffff",
        }
      },
      "-=1"
    ).fromTo(
      logoRef.current,
      { opacity: 0, scale: 0 },
      {
        scale: 0.7,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        onComplete: () => {
          setTeamContainer(true);
          requestAnimationFrame(() => {
            if (meetRef.current && profileRef.current) {
              gsap.fromTo(
                [meetRef.current, profileRef.current],
                {
                  opacity: 0,
                  translateX: -20
                },
                {
                  opacity: 1,
                  translateX: 20,
                  duration: 1,
                  stagger: 0.3
                }
              );
            }

            setAnimationInProgress(false);

          });
        }
      },
      "-=1.2"
    )
  }

  const transitionTrigger2 = () => {
    const t2 = gsap.timeline();

    setAnimationInProgress(true);

    t2.to(
      [profileRef.current, meetRef.current],
      {
        translateX: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      }
    ).to(
      logoRef.current,
      {
        scale: 0,
        opacity: 0.5,
        ease: "bounce.in",
        duration: 1,
        onComplete: () => {
          setTeamContainer(false);
          setInfoContainer(true);
          requestAnimationFrame(() => {
            if (title.current && birdRef.current) {
              const t3 = gsap.timeline();
              t3.to(
                appContainerRef.current,
                {
                  clearProps: "background",
                  duration: 0
                }
              ).fromTo(
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
      },
      "-=0.05"
    )
    setTriggerAnimation(false)
  }

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (initialCooldown || animationInProgress) { return; }

      console.log("Key pressed:", event.key, "Current page:", currentPage);

      if (event.key === "ArrowDown" && currentPage === "start") {
        console.log("Down arrow detected - moving to team page");
        transitionTrigger1();
        setCurrentPage("team");
        recentButtonRef = "down";
      } else if (event.key === "ArrowUp" && currentPage === "team") {
        console.log("Up arrow detected - moving back to start");
        transitionTrigger2();
        setCurrentPage("start");
        recentButtonRef = "up";
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [initialCooldown, currentPage, animationInProgress]);

  return (
    <div
      ref={appContainerRef}
      className={`h-screen min-h-full overflow-hidden smooth-scroll bg-gradient-to-b from-aery-purple to-[#d6d3f8] align-items-center justify-content-center`}
    >
      <Navbar
        triggerAnimation={triggerAnimation}
        title={title}
        logoRef={logoRef}
      />
      <Info
        restarted={pageRestarted}
        containerOn={infoContainerOnRef}
        logoRef={birdRef}
        side1={side1}
        side2={side2}
      />
      <Team
        containerOn={teamContainerOnRef}
        meetRef={meetRef}
        profileRef={profileRef}
      />
    </div>
  );
}

export default App;