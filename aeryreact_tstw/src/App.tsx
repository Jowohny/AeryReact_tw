import Navbar from "./navbar/navbar";
import Info from "./Info/info";
import { useState, useEffect, useCallback, useRef } from "react";
import gsap from 'gsap';

function App() {
  // Start with both states as false to prevent immediate animation
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  const title = useRef(null);
  const logoRef = useRef(null);
  const appContainerRef = useRef(null);

  // Initial setup - optional cooldown period
  useEffect(() => {
    // If you want an initial cooldown period, uncomment this

    setIsCooldown(true);
    const cooldownTimer = setTimeout(() => {
      setIsCooldown(false);
    }, 15000);

    return () => clearTimeout(cooldownTimer);
  }, []);

  useEffect(() => {
    if (triggerAnimation && appContainerRef.current) {
      gsap.to(appContainerRef.current, {
        backgroundColor: "#ffffff",
        duration: 1.5,
        ease: "power2.inOut"
      });

      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { opacity: 0, scale: 0 },
          { scale: 0.8, opacity: 1, duration: 1.5, ease: "power4.out", delay: 2 }
        );
      }

      if (title.current) {
        gsap.to(title.current, {
          opacity: 0,
          duration: 1,
          ease: "linear"
        });
      }
    }
  }, [triggerAnimation]);

  const handleScrollAttempt = useCallback(() => {
    console.log("Handle scroll attempt, cooldown:", isCooldown);

    if (isCooldown) return;

    console.log("Triggering animation!");

    setTriggerAnimation(true);
    setIsCooldown(true);

    setTimeout(() => {
      setIsCooldown(false);
    }, 3000);
  }, [isCooldown]); // Only depend on isCooldown

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", "End", "Space"].includes(event.key)) {
        handleScrollAttempt();
      }
    };

    window.addEventListener("wheel", handleScrollAttempt);
    window.addEventListener("touchmove", handleScrollAttempt);
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("wheel", handleScrollAttempt);
      window.removeEventListener("touchmove", handleScrollAttempt);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleScrollAttempt]); // This will re-add listeners if handleScrollAttempt changes

  return (
    <div
      ref={appContainerRef}
      className={`h-screen min-h-full overflow-hidden smooth-scroll bg-gradient-to-b from-aery-purple to-[#d6d3f8]`}
    >
      <Navbar
        triggerAnimation={triggerAnimation}
        title={title}
        logoRef={logoRef}
      />
      <Info />
    </div>
  );
}

export default App;