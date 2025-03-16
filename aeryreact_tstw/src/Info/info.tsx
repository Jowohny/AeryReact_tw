import logo from "../assets/images/logo.png";
import { TypeAnimation } from "react-type-animation";

function Info() {
    return (
        <div className="fade-in flex justify-between text-center h-5/6">
            <div className="w-1/3">
                <div className="w-4/5 mx-auto">
                    <TypeAnimation className="text-white text-lg font-bold"
                        sequence={[
                            5000,
                            "Origin Story",
                        ]}
                        speed={15}
                        cursor={false}
                    />
                    <p>
                        <TypeAnimation className="text-white text-xs font-bold"
                            sequence={[
                                6000,
                                "Lorem ipsum odor amet, consectetuer adipiscing elit. At ullamcorper blandit habitasse pulvinar,cubilia maximus semper. Molestie hendrerit vitae vulputate habitant; facilisi sit lectus mollis amet. Duis integer potenti in massa auctor tristique natoque sociosqu. Magnis lacinia tempus aliquam ullamcorper, ridiculus condimentum sapien. Quisque rutrum orci proin senectus, commodo habitant augue. Integer eleifend non efficitur libero himenaeos inceptos velit lectus. Quisque conubia integer magnis iaculis magna amet.",
                            ]}
                            speed={90}
                            cursor={false}
                        />
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center w-1/3">
                <img src={logo} alt="aery logo" className="h-1/1" />
            </div>
            <div className="w-1/3">
                <div className="w-4/5 mx-auto">
                    <TypeAnimation className="text-white text-lg font-bold"
                        sequence={[
                            9000,
                            "About Us",
                        ]}
                        speed={15}
                        cursor={false}
                    />
                    <p>
                        <TypeAnimation className="text-white text-xs font-bold"
                            sequence={[
                                10000,
                                "Lorem ipsum odor amet, consectetuer adipiscing elit. At ullamcorper blandit habitasse pulvinar, cubilia maximus semper. Molestie hendrerit vitae vulputate habitant; facilisi sit lectus mollis amet. Duis integer potenti in massa auctor tristique natoque sociosqu. Magnis lacinia tempus aliquam ullamcorper, ridiculus condimentum sapien. Quisque rutrum orci proin senectus, commodo habitant augue. Integer eleifend non efficitur libero himenaeos inceptos velit lectus. Quisque conubia integer magnis iaculis magna amet.",
                            ]}
                            speed={90}
                            cursor={false}
                        />
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Info;