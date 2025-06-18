import { RefObject, useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo2.png";
import gsap from 'gsap';


function Navbar({ teamRef, servicesRef, projectsRef, contactRef }: {
    teamRef: RefObject<HTMLDivElement | null>;
    servicesRef: RefObject<HTMLDivElement | null>;
    projectsRef: RefObject<HTMLDivElement | null>;
    contactRef: RefObject<HTMLDivElement | null>;
}) {
    const navRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
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

    // Mobile menu animation
    useEffect(() => {
        if (!mobileMenuRef.current) return;

        if (isMobileMenuOpen) {
            // Open animation
            gsap.set(mobileMenuRef.current, { display: 'flex' });
            gsap.fromTo(
                mobileMenuRef.current,
                {
                    opacity: 0,
                    x: '100%',
                    scale: 0.95
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.out"
                }
            );

            // Animate menu items
            const menuItems = mobileMenuRef.current.querySelectorAll('.mobile-menu-item');
            gsap.fromTo(
                menuItems,
                {
                    opacity: 0,
                    x: 50,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 0.3,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    delay: 0.2
                }
            );
        } else {
            // Close animation
            gsap.to(mobileMenuRef.current, {
                opacity: 0,
                x: '100%',
                scale: 0.95,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    if (mobileMenuRef.current) {
                        gsap.set(mobileMenuRef.current, { display: 'none' });
                    }
                }
            });
        }
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav ref={navRef} className="bg-gray-900 bg-opacity-90 backdrop-blur-sm fixed w-full z-50">
                <div className="px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <img src={logo} alt="logo" className="h-8 w-auto" />
                        </div>

                        <div ref={linksRef} className="hidden md:flex space-x-8">
                            <button className="text-white hover:text-purple-400 transition-colors" onClick={() => {
                                window.scroll({
                                    top: 0,
                                    behavior: 'smooth'
                                })
                            }}>
                                Home
                            </button>
                            <button className="text-white hover:text-purple-400 transition-colors" onClick={() => {
                                teamRef.current?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}>
                                Team
                            </button>
                            <button className="text-white hover:text-purple-400 transition-colors" onClick={() => {
                                (servicesRef as React.RefObject<HTMLDivElement>)?.current?.scrollIntoView({
                                    behavior:  'smooth'
                                })
                            }}>
                                Services
                            </button>
                            <button className="text-white hover:text-purple-400 transition-colors" onClick={() => {
                                 (projectsRef as React.RefObject<HTMLDivElement>)?.current?.scrollIntoView({
                                    behavior:  'smooth'
                                })                           
                            }}>
                                Projects
                            </button>
                            <button className="text-white hover:text-purple-400 transition-colors" onClick={() => {
                                contactRef.current?.scrollIntoView({
                                    behavior: 'smooth'
                                })                                  
                            }}>
                                Contact
                            </button>
                        </div>

                        <div className="md:hidden">
                            <button 
                                className="text-white hover:text-purple-400 transition-colors p-2"
                                onClick={toggleMobileMenu}
                                aria-label="Toggle mobile menu"
                            >
                                <div className="w-6 h-6 flex flex-col justify-center items-center">
                                    <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                                    <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                    <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>


            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={closeMobileMenu}
                ></div>
            )}
            <div 
                ref={mobileMenuRef}
                className="fixed top-0 right-0 h-full w-80 bg-gray-900 bg-opacity-95 backdrop-blur-md z-50 transform md:hidden hidden flex-col justify-start items-center pt-20 px-6 shadow-2xl"
            >
                <div className="w-full space-y-6">
                    <button 
                        className="mobile-menu-item w-full text-left text-white hover:text-purple-400 transition-colors text-xl font-medium py-3 border-b border-gray-700"
                        onClick={() => {
                            window.scroll({
                                top: 0,
                                behavior: 'smooth'
                            })
                        }}
                    >
                        Home
                    </button>
                    <button 
                        className="mobile-menu-item w-full text-left text-white hover:text-purple-400 transition-colors text-xl font-medium py-3 border-b border-gray-700"
                        onClick={() => {
                            teamRef.current?.scrollIntoView({
                                behavior: 'smooth'
                            })
                        }}
                    >
                        Team
                    </button>
                    <button 
                        className="mobile-menu-item w-full text-left text-white hover:text-purple-400 transition-colors text-xl font-medium py-3 border-b border-gray-700"
                        onClick={() => {
                            (servicesRef as React.RefObject<HTMLDivElement>)?.current?.scrollIntoView({
                                behavior:  'smooth'
                            })
                        }}
                    >
                        Services
                    </button>
                    <button 
                        className="mobile-menu-item w-full text-left text-white hover:text-purple-400 transition-colors text-xl font-medium py-3 border-b border-gray-700"
                        onClick={() => {
                            (projectsRef as React.RefObject<HTMLDivElement>)?.current?.scrollIntoView({
                               behavior:  'smooth'
                           })                           
                       }}
                    >
                        Projects
                    </button>
                    <button 
                        className="mobile-menu-item w-full text-left text-white hover:text-purple-400 transition-colors text-xl font-medium py-3 border-b border-gray-700"
                        onClick={() => {
                            contactRef.current?.scrollIntoView({
                                behavior: 'smooth'
                            })                                  
                        }}
                    >
                        Contact
                    </button>
                </div>

                <button 
                    className="mobile-menu-item absolute top-6 right-6 text-white hover:text-purple-400 transition-colors p-2"
                    onClick={closeMobileMenu}
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default Navbar;