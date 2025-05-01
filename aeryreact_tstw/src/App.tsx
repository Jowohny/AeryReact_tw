import Navbar from "./navbar/navbar";
import Info from "./Info/info";
import Team from "./team/team";
import { useState, useEffect, useRef } from "react";
import gsap from 'gsap';

function App() {
  //boolean states
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const triggerAnimationRef = useRef(false);
  const [initialCooldown, setInitialCooldown] = useState(false);

  //current page check
  let currentPageRef = "start";

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
  const sanskarRef = useRef(null);
  const joshuaRef = useRef(null);
  const kaelynRef = useRef(null);
  const johnyRef = useRef(null);
  const derekRef = useRef(null);
  const pengRef = useRef(null);
  const meetRef = useRef(null);
  const profileRef = useRef(null);

  // Initial 15-second cooldown
  useEffect(() => {
    const cooldownTimer = setTimeout(() => {
      setInitialCooldown(true);
    }, 5000);

    return () => clearTimeout(cooldownTimer);
  }, []);

  // Animation effect
  const transitionTrigger1 = () => {
    const t1 = gsap.timeline();

    gsap.fromTo(
      [side1.current, side2.current],
      { opacity: 1 },
      { opacity: 0, duration: 0.5 }
    );

    t1.fromTo(
      birdRef.current,
      { scale: 1 },
      { scale: 1.1, duration: 1, ease: "bounce.in" },
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
        duration: 1.5,
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
          });
        }
      },
      "-=1.1"
    )
  }



  const transitionTrigger2 = () => {
    // if (overlayRef.current) {
    //   gsap.fromTo(
    //     overlayRef.current,
    //     { opacity: 0 },
    //     {
    //       opacity: 1,
    //       duration: 1.5,
    //       ease: "power2.inOut",
    //       onComplete: () => {
    //         gsap.to(appContainerRef.current, {
    //           css: {
    //             background: "#ffffff",
    //           }
    //         }
    //         );

    //         // Make the overlay invisible again
    //         gsap.to(overlayRef.current, {
    //           opacity: 0,
    //           duration: 0.1
    //         });
    //       }
    //     }
    //   );
    // }

    // if (logoRef.current && triggerAnimationRef.current && initialCooldown) {
    //   gsap.fromTo(
    //     logoRef.current,
    //     { opacity: 0, scale: 0 },
    //     {
    //       scale: 0.8, opacity: 1, duration: 1.5, ease: "power4.out", delay: 2,
    //       onComplete: () => {
    //         setInfoContainer(false);
    //         setTeamContainer(true);
    //       }
    //     }
    //   );


    //   if (title.current && triggerAnimationRef.current && !initialCooldown) {
    //     gsap.to(title.current, {
    //       opacity: 0,
    //       duration: 1,
    //       ease: "linear"
    //     });
    //   }
    // }
  }

  // Scroll attempt handler
  const handleScrollAttempt = () => {
    setTriggerAnimation(true);
    triggerAnimationRef.current = true;
    if (currentPageRef == "start" && (recentButtonRef == "" || recentButtonRef == "down")) {
      transitionTrigger1();
    } else if (currentPageRef == "team" && recentButtonRef == "up") {
      transitionTrigger2();
    }
  };

  // Event listeners
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (["ArrowDown"].includes(event.key) && initialCooldown && currentPageRef == "start") {
        handleScrollAttempt();
        currentPageRef = "team";
        recentButtonRef = "down";
      } else if (["ArrowUp"].includes(event.key) && initialCooldown && currentPageRef == "team") {
        currentPageRef = "start";
        recentButtonRef = "up";
        return;
      }
    };

    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.addEventListener("keyup", handleKeydown);
    };
  }, [initialCooldown]);

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
        containerOn={infoContainerOnRef}
        logoRef={birdRef}
        side1={side1}
        side2={side2}
      />
      <Team
        containerOn={teamContainerOnRef}
        sanskarRef={sanskarRef}
        joshuaRef={joshuaRef}
        kaelynRef={kaelynRef}
        johnyRef={johnyRef}
        derekRef={derekRef}
        pengRef={pengRef}
        meetRef={meetRef}
        profileRef={profileRef}
      />
    </div>
  );
}

export default App;