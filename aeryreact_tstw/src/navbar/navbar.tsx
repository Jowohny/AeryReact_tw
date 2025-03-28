import { TypeAnimation } from "react-type-animation";
import { RefObject } from "react";
import logo from "../assets/images/logo2.png";

function Navbar({ triggerAnimation, title, logoRef }: {
    triggerAnimation: boolean;
    title: RefObject<null>;
    logoRef: RefObject<null>;
}) {
    return (
        <div className="flex-col justify-center items-center p-4 text-center h-1/6 relative">
            <div
                ref={title}
                className={`fade-in absolute inset-0 flex items-center justify-center ${triggerAnimation ? 'pointer-events-none' : ''}`}
            >
                {!triggerAnimation && (
                    <TypeAnimation
                        className="text-white text-4xl font-bold"
                        sequence={[
                            3000,
                            "Welcome to AERY",
                            6000,
                            "Personal and Private Email Assistant",
                        ]}
                        speed={15}
                        repeat={Infinity}
                        cursor={false}
                    />
                )}
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                <img
                    ref={logoRef}
                    src={logo}
                    alt="logo"
                    className={`h-full z-10 opacity-0 scale-0`}
                />
            </div>
        </div>
    );
}

export default Navbar;