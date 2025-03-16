import { TypeAnimation } from "react-type-animation";

function Navbar() {
    return (
        <div className="fade-in flex-col justify-center items-center p-4 text-center h-1/6">
            <TypeAnimation className="text-white text-4xl font-bold"
                sequence={[
                    3000,
                    "Welcome to AERY",
                    6000,
                    "Your Smart Email Assistant",
                ]}
                speed={15}
                repeat={Infinity}
                cursor={false}
            />
        </div>
    )
}

export default Navbar;