import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
}

const projects: Project[] = [
    {
        title: "AeryMail",
        description: "A modern e-commerce platform with real-time inventory management and payment processing.",
        image: "../src/assets/images/logo2.png",
        technologies: ["Executorch", "React Native", "Expo", "Expo Router"]
    }
];

function Projects({ projectsRef, projectCardsRef }: {
    projectsRef: React.RefObject<HTMLDivElement | null>,
    projectCardsRef: React.RefObject<(HTMLDivElement | null)[]>
}) {
    useEffect(() => {
        if (projectsRef.current) {
            gsap.fromTo(
                projectsRef.current,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out"
                }
            );
        }

        const cards = projectCardsRef.current;
        if (!cards) return;

        cards.forEach((card, index) => {
            if (!card) return;

            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out",
                    delay: index * 0.2
                }
            );
        });
    }, []);

    return (
        <div ref={projectsRef} className="min-h-screen py-40">
            <div className="grid grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={project.title}
                        ref={el => {
                            if (projectCardsRef.current) {
                                projectCardsRef.current[index] = el;
                            }
                        }}
                        className="bg-white/10 border border-white/20 rounded-lg overflow-hidden shadow-lg"
                    >
                        <div className="relative h-48 overflow-hidden flex items-center justify-center content-center">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-2/3 object-cover"
                            />
                        </div>
                        <div className="px-6 pb-6">
                            <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{project.title}</h3>
                            <p className="text-white mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map(tech => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects; 