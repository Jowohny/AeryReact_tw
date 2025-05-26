import logo from "../assets/images/logo2.png";
import { RefObject, useEffect, useRef } from "react";
import gsap from 'gsap';

function Info({ restarted, containerOn, logoRef}: {
    restarted: boolean,
    containerOn: boolean,
    logoRef: RefObject<HTMLImageElement | null>,
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerOn) return;

        const animateLogo = () => {
            const t1 = gsap.timeline()

            if (!logoRef.current) return;

            t1.fromTo(
                logoRef.current,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 1
                }
            ).to(
                logoRef.current, 
                {
                    y: -20,
                    rotation: 5,
                    duration: 2,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true
                },
                "-=1"
           ).to(
                logoRef.current, 
                {
                y: 20,
                    rotation: -5,
                    duration: 2,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true
                }
            );
        };

        animateLogo();
    }, [containerOn]);

    if (!containerOn) return null;

    return (
        <div ref={containerRef} className="relative min-h-screen py-16 overflow-hidden">
 
            <div className="flex relative z-10 content-start justify-center py-20">
                <div className={`${restarted ? "fade-in" : ""}`}>
                    <img
                        ref={logoRef}
                        src={logo}
                        alt="aery logo"
                        className="w-full max-w-1/3 z-0 drop-shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default Info;        