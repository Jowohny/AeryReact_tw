import {useEffect, useRef } from "react";
import logo from "../assets/images/logo2.png";
import gsap from 'gsap';

interface NavbarProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
    animationInProgress: boolean;
    setInfoContainer: (value: boolean) => void;
    setTeamContainer: (value: boolean) => void;
    setContactContainer: (value: boolean) => void;
    setProjectsContainer: (value: boolean) => void;
    setServicesContainer: (value: boolean) => void;
}

function Navbar({ currentPage, setCurrentPage, animationInProgress, setInfoContainer, setTeamContainer, setContactContainer, setProjectsContainer, setServicesContainer }: NavbarProps) {
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

    const handleNavigation = (page: string) => {
        if (animationInProgress) return;

        switch (page) {
            case "start":
                setCurrentPage(page);
                setInfoContainer(true);
                setTeamContainer(false);
                setContactContainer(false);
                setProjectsContainer(false);
                setServicesContainer(false);
                break;
            case "team":
                setCurrentPage(page);
                setInfoContainer(false);
                setTeamContainer(true);
                setContactContainer(false);
                setProjectsContainer(false);
                setServicesContainer(false);
                break;
            case "contact":
                setCurrentPage(page);
                setInfoContainer(false);
                setTeamContainer(false);
                setContactContainer(true);
                setProjectsContainer(false);
                setServicesContainer(false);
                break;
            case "projects":
                setCurrentPage(page);
                setInfoContainer(false);
                setTeamContainer(false);
                setContactContainer(false);
                setProjectsContainer(true);
                setServicesContainer(false);
                break;
            case "services":
                setCurrentPage(page);
                setInfoContainer(false);
                setTeamContainer(false);
                setContactContainer(false);
                setProjectsContainer(false);
                setServicesContainer(true);
                break;
            default:
                break;
        }
    };

    return (
        <nav ref={navRef} className="bg-gray-900 bg-opacity-90 backdrop-blur-sm fixed w-full z-50">
            <div className="px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className="h-8 w-auto" />
                    </div>

                    <div ref={linksRef} className="hidden md:flex space-x-8">
                        <button
                            onClick={() => handleNavigation("start")}
                            className={`text-white hover:text-purple-400 transition-colors ${currentPage === "start" ? "text-purple-400" : ""
                                }`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => handleNavigation("team")}
                            className={`text-white hover:text-purple-400 transition-colors ${currentPage === "team" ? "text-purple-400" : ""
                                }`}
                        >
                            Team
                        </button>
                        <button
                            onClick={() => handleNavigation("projects")}
                            className={`text-white hover:text-purple-400 transition-colors ${currentPage === "projects" ? "text-purple-400" : ""
                                }`}
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => handleNavigation("services")}
                            className={`text-white hover:text-purple-400 transition-colors ${currentPage === "services" ? "text-purple-400" : ""
                                }`}
                        >
                            Services
                        </button>
                        <button
                            onClick={() => handleNavigation("contact")}
                            className={`text-white hover:text-purple-400 transition-colors ${currentPage === "contact" ? "text-purple-400" : ""
                                }`}
                        >
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