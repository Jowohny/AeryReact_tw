import logo from "../assets/images/logo.png";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useCallback, useRef } from "react";
import gsap from 'gsap';

function Info() {
    const [triggerAnimation, setTriggerAnimation] = useState(false);
    const logoRef = useRef(null);
    const landing1 = useRef(null);
    const landing2 = useRef(null);

    const handleScrollAttempt = useCallback(() => {
        if (triggerAnimation) return;

        setTriggerAnimation(true);

        const t1 = gsap.timeline();

        gsap.fromTo(
            [landing1.current, landing2.current],
            { opacity: 1 },
            { opacity: 0, duration: 0.5 }
        );

        t1.fromTo(
            logoRef.current,
            { scale: 1 },
            {
                scale: 1.1,
                duration: 1,
                ease: "bounce.in()",
            },
        ).to(
            logoRef.current,
            {
                scale: 1,
                duration: 0.5,
                ease: "power1.out",
            }
        ).to(
            logoRef.current,
            {
                scale: 40,
                duration: 3,
                translateX: 1000,
                ease: "power1.out",
            }
        );
    }, [triggerAnimation]);

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            if (["ArrowDown", "PageDown", "End"].includes(event.key)) {
                handleScrollAttempt();
            }
        };

        window.addEventListener("wheel", handleScrollAttempt);
        window.addEventListener("touchmove", handleScrollAttempt);
        window.addEventListener("keydown", handleKeydown);

        return () => {
            window.removeEventListener("wheel", handleScrollAttempt);
            window.removeEventListener("touchmove", handleScrollAttempt);
            window.removeEventListener("keydown", handleKeydown);
        };
    }, [handleScrollAttempt]);

    return (
        <div className="fade-in flex justify-between text-center h-5/6">
            <div className="w-1/3">
                <div ref={landing1} className="w-4/5 mx-auto">
                    <TypeAnimation
                        className="text-white text-lg font-bold"
                        sequence={[5000, "Origin Story"]}
                        speed={15}
                        cursor={false}
                    />
                    <p>
                        <TypeAnimation
                            className="text-white text-xs font-bold"
                            sequence={[
                                6000,
                                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                            ]}
                            speed={90}
                            cursor={false}
                        />
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center w-1/3">
                <img ref={logoRef} src={logo} alt="aery logo" className="h-auto max-h-64 z-0" />
            </div>
            <div className="w-1/3">
                <div ref={landing2} className="w-4/5 mx-auto">
                    <TypeAnimation
                        className="text-white text-lg font-bold"
                        sequence={[7000, "About Us"]}
                        speed={15}
                        cursor={false}
                    />
                    <p>
                        <TypeAnimation
                            className="text-white text-xs font-bold"
                            sequence={[
                                8000,
                                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                            ]}
                            speed={90}
                            cursor={false}
                        />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Info;        