import logo from "../assets/images/logo2.png";
import { TypeAnimation } from "react-type-animation";
import { RefObject, useEffect, useRef } from "react";
import gsap from 'gsap';
import styles from './info.module.css';

function Info({ restarted, containerOn, logoRef, side1, side2 }: {
    restarted: boolean,
    containerOn: boolean,
    logoRef: RefObject<HTMLImageElement | null>,
    side1: RefObject<HTMLDivElement | null>,
    side2: RefObject<HTMLDivElement | null>
}) {
    const particlesRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerOn) return;

        const animateLogo = () => {
            const t1 = gsap.timeline()

            if (!logoRef.current) return;

            t1.to(logoRef.current, {
                y: -20,
                rotation: 5,
                duration: 2,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true
            }).to(logoRef.current, {
                y: 20,
                rotation: -5,
                duration: 2,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true
            });
        };

        animateLogo();
    }, [containerOn]);

    if (!containerOn) return null;

    return (
        <div ref={containerRef} className="relative min-h-screen py-16 overflow-hidden">
            <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

            <div className="flex flex-rowjustify-between text-center relative z-10 content-start py-20">
                <div className="w-1/3">
                    <div ref={side1} className="w-4/5 mx-auto">
                        <TypeAnimation
                            className={`text-2xl font-bold ${styles.title}`}
                            sequence={[3000, "Origin Story"]}
                            speed={15}
                            cursor={false}
                        />
                        <p>
                            <TypeAnimation
                                className={`text-s font-bold ${styles.content}`}
                                sequence={[
                                    4000,
                                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                                ]}
                                speed={90}
                                cursor={false}
                            />
                        </p>
                    </div>
                </div>
                <div className={`flex flex-col items-center justify-center w-1/3 ${restarted ? "fade-in" : ""}`}>
                    <img
                        ref={logoRef}
                        src={logo}
                        alt="aery logo"
                        className="h-auto max-h-[500px] z-0 drop-shadow-2xl"
                        onError={(e) => {
                            console.error("Error loading logo:", e);
                            const img = e.target as HTMLImageElement;
                            img.style.display = 'none';
                        }}
                    />
                </div>
                <div className="w-1/3">
                    <div ref={side2} className="w-4/5 mx-auto">
                        <TypeAnimation
                            className={`text-2xl font-bold ${styles.title}`}
                            sequence={[4500, "About Us"]}
                            speed={15}
                            cursor={false}
                        />
                        <p>
                            <TypeAnimation
                                className={`text-s font-bold ${styles.content}`}
                                sequence={[
                                    5000,
                                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                                ]}
                                speed={90}
                                cursor={false}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;        