import Navbar from "./navbar/navbar";
import Info from "./Info/info";
import { useState, useEffect, useRef } from "react";
import gsap from 'gsap';

function App() {
  //boolean states
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const triggerAnimationRef = useRef(false);
  const [initialCooldown, setInitialCooldown] = useState(false);

  //navbar.tsx references
  const title = useRef(null);
  const logoRef = useRef(null);
  const appContainerRef = useRef(null);

  //info.tsx references
  const birdRef = useRef(null);
  const side1 = useRef(null);
  const side2 = useRef(null);

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
      {
        scale: 1.1,
        duration: 1,
        ease: "bounce.in()",
      },
    ).to(
      birdRef.current,
      {
        scale: 1,
        duration: 0.5,
        ease: "power1.out",
      }
    ).to(
      birdRef.current,
      {
        scale: 40,
        duration: 3,
        translateX: 1000,
        ease: "power1.out",
      }
    );
  }


  const transitionTrigger2 = () => {
    if (appContainerRef.current) {
      gsap.to(appContainerRef.current, {
        backgroundColor: "#ffffff",
        duration: 1.5,
        ease: "power2.inOut"
      });

      if (logoRef.current && triggerAnimationRef.current && initialCooldown) {
        console.log("this be working tho");
        gsap.fromTo(
          logoRef.current,
          { opacity: 0, scale: 0 },
          { scale: 0.8, opacity: 1, duration: 1.5, ease: "power4.out", delay: 2 }
        );
      }

      if (title.current && triggerAnimationRef.current && !initialCooldown) {
        gsap.to(title.current, {
          opacity: 0,
          duration: 1,
          ease: "linear"
        });
      }
    }
  }

  // Scroll attempt handler
  const handleScrollAttempt = () => {
    setTriggerAnimation(true);
    triggerAnimationRef.current = true;

    transitionTrigger1();
    transitionTrigger2();

  };

  // Event listeners
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (["ArrowDown"].includes(event.key) && initialCooldown) {
        handleScrollAttempt();
      } else {
        return;
      }
    };
    window.addEventListener("touchmove", handleScrollAttempt);
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("touchmove", handleScrollAttempt);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [initialCooldown]);

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
      <Info
        logoRef={birdRef}
        side1={side1}
        side2={side2}
      />
    </div>
  );
}

export default App;