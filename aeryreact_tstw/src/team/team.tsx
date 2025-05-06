import { useState, useEffect, RefObject } from "react";

import sanskar from "../assets/images/sanskar.png";
import joshua from "../assets/images/joshua.jpg";
import kaelyn from "../assets/images/kaelyn.jpg";
import johny from "../assets/images/johny.jpg";
import peng from "../assets/images/peng.jpg";

function Team({ containerOn, meetRef, profileRef }: {
    containerOn: boolean,
    meetRef: RefObject<null>,
    profileRef: RefObject<null>,
}) {
    const teamMembers = [
        {
            name: "Sanskar",
            image: sanskar,
            description: "Backend specialist focusing on system architecture and API development."
        },
        {
            name: "Joshua",
            image: joshua,
            description: "Full-stack developer skilled in both frontend and backend technologies."
        },
        {
            name: "Kaelyn",
            image: kaelyn,
            description: "Frontend developer with expertise in React and UI/UX design."
        },
        {
            name: "Johny",
            image: johny,
            description: "Webmaster and animator with experience in frontend technologies."
        },
        {
            name: "Peng",
            image: peng,
            description: "Marketing and Research"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    if (!containerOn) return null;

    return (
        <div className="h-screen flex flex-col md:flex-row md:mx-8 lg:mx-16 gap-8 justify-center">
            <div ref={meetRef} className="w-full md:w-2/5 flex-col justify-center ml-12 mr-24 content-start py-44">
                <h1 className="text-4x1 font-bold mb-6">Meet The Team!</h1>
                <p className="text-lg mb-6">
                    Our talented team brings together diverse skills and perspectives to deliver
                    exceptional results. We're passionate about creating innovative solutions and
                    driving success for our clients. We are a group of 6 people gathered by Sanskar
                    over the course of 4 months
                </p>
            </div>

            <div ref={profileRef} className="w-full md:w-2/5 flex flex-col items-center">
                <div className="relative w-full max-w-md mx-auto py-16 mx-8">
                    <div className="h-64 w-64 mx-auto overflow-hidden rounded-full mb-4">
                        <img
                            src={`${teamMembers[currentIndex].image}`}
                            alt={`${teamMembers[currentIndex].name} profile`}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="text-center h-24">
                        <h2 className="text-2xl font-bold mb-2">{teamMembers[currentIndex].name}</h2>
                        <p className="text-gray-700">{teamMembers[currentIndex].description}</p>
                    </div>

                    <div className="flex justify-center mt-2 gap-2">
                        {teamMembers.map((_, index) => (
                            <div
                                key={index}
                                className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                                onClick={() => setCurrentIndex(index)}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;