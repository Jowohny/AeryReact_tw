import logo from "../assets/images/logo2.png";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import InfoSVG from "./InfoSVG";

function Info({ restarted }: {
    restarted: boolean,
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement | null>(null);
    const svgTextRef = useRef<SVGTextPathElement | null>(null);
    const svgTextSpanRefs = useRef<(SVGTSpanElement | null)[]>([]);

    useEffect(() => {

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

        const animateSVGText = () => {
            const t1 = gsap.timeline()
            
            if (!svgTextSpanRefs.current.length) return;
            gsap.set(svgTextSpanRefs.current, { opacity: 0});
            t1.to(
                svgTextSpanRefs.current, 
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.1,
                    ease: "power3.out",
                    stagger: 0.08,
                    delay: 1
                }
            ).to(
                svgTextSpanRefs.current, 
                {
                    y: 30,
                    ease: "power1.inOut",
                    duration: 0.7,
                    stagger: 0.08,
                    yoyo: true,
                    repeat: -1
                }
            );
        };

        animateLogo();
        animateSVGText();
    }, []);

    return (
        <div ref={containerRef} className="relative min-h-screen py-16 overflow-hidden">
 
                <div className={`flex relative z-10 content-start justify-center ${restarted ? "fade-in" : ""}`}>
                    <div className="flex flex-col items-center relative z-10 content-start justify-center">
                        <InfoSVG svgTextSpanRefs={svgTextSpanRefs} ref={svgTextRef} />
                        <img
                            ref={logoRef}
                            src={logo}
                            alt="aery logo"
                            className="w-2/5 z-0 drop-shadow-2xl"
                        />
                    </div>
                </div>
        </div>
    );
}

export default Info;        