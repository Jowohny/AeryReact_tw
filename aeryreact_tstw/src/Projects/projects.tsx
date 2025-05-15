import { useEffect, useRef } from 'react';
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
        title: "E-commerce Platform",
        description: "A modern e-commerce platform with real-time inventory management and payment processing.",
        image: "/src/assets/images/placeholders/project1.png",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
        title: "AI Chat Application",
        description: "An intelligent chat application powered by machine learning for natural language processing.",
        image: "/src/assets/images/placeholders/project2.png",
        technologies: ["Python", "TensorFlow", "React", "WebSocket"]
    },
    {
        title: "Portfolio Website",
        description: "A responsive portfolio website showcasing creative work and professional experience.",
        image: "/src/assets/images/placeholders/project3.png",
        technologies: ["React", "GSAP", "Tailwind CSS", "TypeScript"]
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
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse"
                    },
                    delay: index * 0.2
                }
            );
        });
    }, []);

    return (
        <div ref={projectsRef} className="min-h-screen py-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={project.title}
                        ref={el => {
                            if (projectCardsRef.current) {
                                projectCardsRef.current[index] = el;
                            }
                        }}
                        className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
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