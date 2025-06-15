import { LabelHTMLAttributes, RefObject, useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function Contact({contactRef} : { contactRef:RefObject<HTMLDivElement | null>}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introTextRef = useRef<HTMLParagraphElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {

    if(containerRef.current) {
      const labels = gsap.utils.toArray<HTMLLabelElement>(containerRef.current?.querySelectorAll('.fish'));
      gsap.set(
        [containerRef.current, titleRef.current, introTextRef.current, nameInputRef.current, emailInputRef.current, messageInputRef.current, ...labels],
        {opacity: 0}
      )    

      ScrollTrigger.create({    
        trigger: containerRef.current,
        start: "top 30%",
        end: "bottom",
        toggleActions: "play pause resume none",
  
        onEnter: () => {        
          const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
          tl.fromTo(
            containerRef.current,
            { 
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
          ).fromTo(
            titleRef.current,
            { 
              y: 40, 
              skewX: -10 
            },
            { 
              opacity: 1,
              y: 0, 
              skewX: 0, 
              duration: 0.8 
            },
            "-=0.7" 
          ).fromTo(
            introTextRef.current,
            { 
              y: 30 
            },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.7 
            },
            "-=0.5"
          ).fromTo(
              labels,
              {
                y: 20
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2
              },
              "-=0.5"
            ).fromTo(
              [nameInputRef.current, emailInputRef.current, messageInputRef.current],
              {
    
                y: 20
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2
              },
              "-=0.5"
            )
  
        },
        once: true
      })
  
    }
  }, []);

  return (
    <div ref={contactRef} className="flex items-center justify-center min-h-screen p-4 text-white overflow-hidden">
      <div 
        ref={containerRef} 
        className="w-full max-w-2xl p-8 space-y-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 ">
        <h1 
          ref={titleRef} 
          className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 py-2"
        >
          Reach out!
        </h1>

        <p ref={introTextRef} className="text-slate-300 text-lg text-center">
          If you have any inquries or questions, don't hesitate to reach out to us. We are always open to feedback are looking for any ways to improve. Hope to get in touch with you soon!
        </p>

        <div className="space-y-6">
          <div>
            <label className="fish block text-slate-300 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              ref={nameInputRef}
              type="text"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/80 border-white/30"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="fish block text-slate-300 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              ref={emailInputRef}
              type="email"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/80 border-white/30"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label className="fish block text-slate-300 text-sm font-bold mb-2">
              Message:
            </label>
            <textarea
              ref={messageInputRef}
              rows={6}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/80 border-white/30 resize-none"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
            ></textarea>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;