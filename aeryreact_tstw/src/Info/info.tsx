import logo from "../assets/images/logo2.png";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InfoSVG from "./InfoSVG";

gsap.registerPlugin(ScrollTrigger);

function Info({ restarted }: {
    restarted: boolean,
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement | null>(null);
    const svgTextRef = useRef<SVGTextPathElement | null>(null);
    const svgTextSpanRefs = useRef<(SVGTSpanElement | null)[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const animateLogo = () => {
            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: logoRef.current,
                    start: "top bottom",
                    toggleActions: "play pause resume reverse"
                }
            });

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
                y: 20,
                    rotation: -5,
                    duration: 1.2,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true
                },
                "-=1"
            );
        };

        const animateSVGText = () => {
            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: svgTextRef.current,
                    start: "top bottom",
                    toggleActions: "play pause resume none"
                }
            });
            
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
            );
        };

        animateLogo();
        animateSVGText();
    }, []);

    return (
        <div ref={containerRef} className="relative min-h-screen pt-16 md:pb-16 overflow-hidden">
 
                <div className={`flex relative z-10 content-start justify-center ${restarted ? "fade-in" : ""}`}>
                    <div className="flex flex-col items-center relative z-10 content-start justify-center">
                        <InfoSVG svgTextSpanRefs={svgTextSpanRefs} ref={svgTextRef} />
                        <img
                            ref={logoRef}
                            src={logo}
                            alt="aery logo"
                            className="lg:w-2/5 w-3/5 z-0 drop-shadow-2xl"
                        />
                    </div>
                </div>
        </div>
    );
}

export default Info;        