import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introTextRef = useRef<HTMLParagraphElement>(null);
  const contactGridRef = useRef<HTMLDivElement>(null);
  const socialsSectionRef = useRef<HTMLDivElement>(null);
  const socialIconsContainerRef = useRef<HTMLDivElement>(null); // For animating individual icons

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Main container animation
    tl.fromTo(containerRef.current,
      { opacity: 0, y: 70, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.2 } // Added a small delay for page load
    );

    // Title animation
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 40, skewX: -10 },
      { opacity: 1, y: 0, skewX: 0, duration: 0.8 },
      "-=0.7" // Overlap with container animation
    );

    // Intro text animation
    tl.fromTo(introTextRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.5"
    );

    // Contact items animation (staggered)
    // Ensure contact-item-anim elements are direct children or use appropriate selector
    if (contactGridRef.current) {
      tl.fromTo(gsap.utils.toArray(contactGridRef.current.querySelectorAll('.contact-item-anim')),
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.2,
          ease: 'back.out(1.4)' // Adds a slight bounce
        },
        "-=0.4"
      );
    }
    
    // Socials section title animation
    if (socialsSectionRef.current) {
        const sectionTitle = socialsSectionRef.current.querySelector('.section-title-anim');
        if (sectionTitle) {
            tl.fromTo(sectionTitle,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                "-=0.3" 
            );
        }
    }

    // Social icons animation (staggered)
    if (socialIconsContainerRef.current) {
      tl.fromTo(gsap.utils.toArray(socialIconsContainerRef.current.querySelectorAll('.social-icon-anim')),
        { opacity: 0, y: 30, scale: 0.7 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.15,
          ease: 'elastic.out(1, 0.65)' // Fun elastic effect
        },
        "-=0.4" // Overlap slightly with previous animation
      );
    }

  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 text-white overflow-hidden">
      <div 
        ref={containerRef} 
        className="w-full max-w-2xl p-8 space-y-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20">
        <h1 
          ref={titleRef} 
          className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 py-2"
        >
          Reach out!
        </h1>

        <p ref={introTextRef} className="text-slate-300 text-lg text-center">
          If you have any inquries or questions, don't hesitate to reach out to us. We are always open to feedback are looking for any ways to improve. Hope to get in touch with you soon!
        </p>


      </div>
    </div>
  );
};

export default Contact;