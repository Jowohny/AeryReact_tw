import { useState, useEffect, useRef, useCallback, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import sanskar from "../assets/images/sanskar.png";
import joshua from "../assets/images/joshua.jpg";
import kaelyn from "../assets/images/kaelyn.jpg";
import johny from "../assets/images/johny.jpg";
import peng from "../assets/images/peng.jpg";

gsap.registerPlugin(ScrollTrigger);


interface Members {
    name: string;
    image: string;
    description: string;
}

const teamMembers: Members[] = [
    {
        name: "Sanskar Thapa",
        image: sanskar,
        description: "Backend specialist focusing on system architecture and API development."
    },
    {
        name: "Joshua Sorteras",
        image: joshua,
        description: "Full-stack developer skilled in both frontend and backend technologies."
    },
    {
        name: "Kaelyn Taing",
        image: kaelyn,
        description: "Frontend developer with expertise in React and UI/UX design."
    },
    {
        name: "Johny Vu",
        image: johny,
        description: "Webmaster and animator with experience in frontend technologies."
    },
    {
        name: "Peng",
        image: peng,
        description: "Marketing and Research"
    }
];

function Team({ teamRef } : { teamRef:RefObject<HTMLDivElement | null> }) {


    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const meetRef = useRef<HTMLDivElement | null>(null);
    const profileRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const nameRef = useRef<HTMLHeadingElement | null>(null);
    const descriptionRef = useRef<HTMLParagraphElement | null>(null);
    const currentIndexRef = useRef(currentIndex);

    useEffect(() => {
        currentIndexRef.current = currentIndex;
    }, [currentIndex]);

    useEffect(() => {
        if (meetRef.current && profileRef.current) {

                const tl = gsap.timeline({ 
                    defaults: {
                        duration: 1.3, 
                        ease: "expo.out" 
                    },
                    scrollTrigger: {
                        trigger: meetRef.current,
                        toggleActions: "play pause resume none",
                        start: "top 50%"
                    }
                });
                tl.fromTo(
                    meetRef.current,
                    {
                        opacity: 0,
                        x: -120,
                        skewX: -10                    
                    },
                    {
                        opacity: 1,
                        x: 0,
                        skewX: 0
                    }
                ).fromTo(
                    profileRef.current,
                    {
                        opacity: 0,
                        x: 120,
                        scale: 0.8,
                        rotationY: -60                    
                    },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        rotationY: 0
                    },
                    "-=1.0"
                );
            }

    }, [meetRef, profileRef]);

    const changeProfile = useCallback((newIndex: number) => {
        if (isAnimating || newIndex === currentIndexRef.current) return;
        setIsAnimating(true);

        if (!imageRef.current || !nameRef.current || !descriptionRef.current) {
            setCurrentIndex(newIndex);
            setIsAnimating(false);
            return;
        }

        const tlOut = gsap.timeline({
            onComplete: () => {
                setCurrentIndex(newIndex);
                setTimeout(() => setIsAnimating(false), 150);
            }
        });

        tlOut.to(
            imageRef.current, 
            {
                opacity: 0, 
                scale: 0.3, 
                rotationY: 180, 
                y: -30, 
                duration: 0.6, 
                ease: "power3.in",
            }
        )
        .to(
            nameRef.current, 
            {
                opacity: 0, 
                y: -50, 
                skewX: -15, 
                duration: 0.5, 
                ease: "back.in(1.6)",
            }, 
            "<0.1"
        )
        .to(
            descriptionRef.current,    
            {
                opacity: 0, 
                y: -40, 
                scaleX: 0.6, 
                filter: "blur(3px)", 
                duration: 0.45, 
                ease: "power2.in",
            }, 
            "<0.05"
        );

    }, [isAnimating]);

    useEffect(() => {
        if (!imageRef.current || !nameRef.current || !descriptionRef.current) {
            if (imageRef.current) {
                gsap.set(imageRef.current, { opacity: 0 });
            }
            if (nameRef.current) {
                gsap.set(nameRef.current, { opacity: 0 });
            }
            if (descriptionRef.current) {
                gsap.set(descriptionRef.current, { opacity: 0 });
            }
            return;
        }
        
        gsap.set(imageRef.current, { opacity: 0, scale: 0.4, rotationY: -180, y: 30 });
        gsap.set(nameRef.current, { opacity: 0, y: 50, skewX: 15 });
        gsap.set(descriptionRef.current, { opacity: 0, y: 40, scaleX: 0.6 });

        const tlIn = gsap.timeline({ defaults: { duration: 0.8, ease: "power3.out" } });

        tlIn.to(imageRef.current, {
            opacity: 1, scale: 1, rotationY: 0, y: 0, duration: 1.0, ease: "elastic.out(1, 0.7)",
        })
        .to(nameRef.current, {
            opacity: 1, y: 0, skewX: 0, duration: 0.75, ease: "back.out(1.7)",
        }, "-=0.7")
        .to(descriptionRef.current, {
            opacity: 1, y: 0, scaleX: 1, duration: 0.7, ease: "power2.out",
        }, "-=0.6");

    }, [currentIndex]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndexToDisplay = (currentIndexRef.current + 1) % teamMembers.length;
            changeProfile(nextIndexToDisplay);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [changeProfile, teamMembers.length]);


    return (
        <div ref={ teamRef } className="h-fit flex flex-col lg:flex-row ml-4 md:ml-8 mb-10 md:mb-20 gap-4 md:gap-8 justify-center items-center lg:items-start overflow-hidden antialiased text-white pt-20 md:pt-40 px-4 md:px-8">
            <div ref={meetRef} className="w-full lg:w-1/2 flex-col justify-center content-start lg:pl-8 xl:pl-32 pt-10 lg:pt-40 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                    Meet The Team!
                </h1>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                    Our talented team brings together diverse skills and perspectives to deliver
                    exceptional results. We're passionate about creating innovative solutions and
                    driving success for our clients. We are a group of {teamMembers.length} people gathered by Sanskar
                    over the course of 4 months.
                </p>
            </div>

            <div ref={profileRef} className="w-full lg:w-1/2 flex justify-center items-center">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto py-4 md:py-8 h-fit">
                    <div className="relative mb-6">
                        <img
                            ref={imageRef}
                            key={`profile-image-${teamMembers[currentIndex].name}`}
                            src={teamMembers[currentIndex].image}
                            alt={`${teamMembers[currentIndex].name} profile`}
                            className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 object-cover rounded-full shadow-2xl border-4 mx-auto"
                        />
                    </div>

                    <div className="text-center min-h-[6rem] sm:min-h-[7rem] md:min-h-[8rem] lg:min-h-[8.5rem] px-2"> 
                        <h2 ref={nameRef} key={`profile-name-${teamMembers[currentIndex].name}`} className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
                            {teamMembers[currentIndex].name}
                        </h2>
                        <p ref={descriptionRef} key={`profile-desc-${teamMembers[currentIndex].name}`} className="text-sm md:text-base text-gray-300 leading-relaxed opacity-90 px-2">
                            {teamMembers[currentIndex].description}
                        </p>
                    </div>

                    <div className="flex justify-center mt-6 md:mt-8 gap-2 md:gap-3">
                        {teamMembers.map((_, index) => (
                            <button
                                key={index}
                                aria-label={`View profile of ${teamMembers[index].name}`}
                                className={`h-3 w-3 md:h-3.5 md:w-3.5 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-sky-400
                                    ${currentIndex === index ? 'bg-sky-500 scale-125 shadow-lg' : 'bg-slate-500 hover:bg-sky-400 transform hover:scale-110'}`}
                                onClick={() => changeProfile(index)}
                                disabled={isAnimating && currentIndex !== index}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;