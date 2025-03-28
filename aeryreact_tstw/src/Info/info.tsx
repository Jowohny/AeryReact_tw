import logo from "../assets/images/logo.png";
import { TypeAnimation } from "react-type-animation";
import { RefObject } from "react";

function Info({ logoRef, side1, side2 }: {
    logoRef: RefObject<null>,
    side1: RefObject<null>,
    side2: RefObject<null>
}) {

    return (
        <div className="fade-in flex justify-between text-center h-5/6">
            <div className="w-1/3">
                <div ref={side1} className="w-4/5 mx-auto">
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
                <div ref={side2} className="w-4/5 mx-auto">
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