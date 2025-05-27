import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      containerRef.current,
      { 
        opacity: 0, 
        y: 70, 
        scale: 0.95 
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 1, 
        delay: 0.2 
      } 
    );

    tl.fromTo(
      titleRef.current,
      { 
        opacity: 0, 
        y: 40, skewX: -10 
      },
      { 
        opacity: 1,
        y: 0, 
        skewX: 0, 
        duration: 0.8 
      },
      "-=0.7" 
    );

    tl.fromTo(
      introTextRef.current,
      { 
        opacity: 0, 
        y: 30 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.7 
      },
      "-=0.5"
    );

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