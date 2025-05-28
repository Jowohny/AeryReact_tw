import {useEffect, useRef } from "react";
import logo from "../assets/images/logo2.png";
import gsap from 'gsap';


function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!navRef.current || !linksRef.current) return;

        gsap.fromTo(
            navRef.current,
            {
                y: -100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }
        );

        gsap.fromTo(
            linksRef.current.children,
            {
                opacity: 0,
                y: -20
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(1.7)",
                delay: 0.5
            }
        );
    }, []);

    return (
        <nav ref={navRef} className="bg-gray-900 bg-opacity-90 backdrop-blur-sm fixed w-full z-50">
            <div className="px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className="h-8 w-auto" />
                    </div>

                    <div ref={linksRef} className="hidden md:flex space-x-8">
                        <button className="text-white hover:text-purple-400 transition-colors">
                            Home
                        </button>
                        <button className="text-white hover:text-purple-400 transition-colors">
                            Team
                        </button>
                        <button className="text-white hover:text-purple-400 transition-colors">
                            Projects
                        </button>
                        <button className="text-white hover:text-purple-400 transition-colors">
                            Services
                        </button>
                        <button className="text-white hover:text-purple-400 transition-colors">
                            Contact
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button className="text-white hover:text-purple-400 transition-colors">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;