import logo from "../assets/images/logo.png";
import { TypeAnimation } from "react-type-animation";
import { RefObject } from "react";

function Info({ restarted, containerOn, logoRef, side1, side2 }: {
    restarted: boolean,
    containerOn: boolean,
    logoRef: RefObject<null>,
    side1: RefObject<null>,
    side2: RefObject<null>
}) {

    if (!containerOn) return null;

    return (
        <div className="flex justify-between text-center h-5/6">
            <div className="w-1/3">
                <div ref={side1} className="w-4/5 mx-auto">
                    <TypeAnimation
                        className="text-white text-2xl font-bold"
                        sequence={[3000, "Origin Story"]}
                        speed={15}
                        cursor={false}
                    />
                    <p>
                        <TypeAnimation
                            className="text-white text-s font-bold"
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
            <div className={`flex flex-col items-center w-1/3 ${restarted ? "fade-in" : ""}`}>
                <img ref={logoRef} src={logo} alt="aery logo" className="h-auto z-0" />
            </div>
            <div className="w-1/3">
                <div ref={side2} className="w-4/5 mx-auto">
                    <TypeAnimation
                        className="text-white text-2xl font-bold"
                        sequence={[4500, "About Us"]}
                        speed={15}
                        cursor={false}
                    />
                    <p>
                        <TypeAnimation
                            className="text-white text-s font-bold"
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
    );
}

export default Info;        