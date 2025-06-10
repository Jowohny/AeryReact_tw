import { forwardRef, useEffect, useRef } from 'react';
import gsap from 'gsap';
import logo from "../assets/images/logo2.png";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CurrentProjectsHeaderSVG from './CurrentProjects'; 

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
        image: logo,
        technologies: ["Executorch", "React Native", "Expo", "Expo Router"]
    }
];

interface ProjectsProps {}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>((_props, ref) => {
    const svgHeaderRef = useRef<SVGSVGElement | null>(null);
    const projectItemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const projectCardsContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const sectionContainer = (ref as React.RefObject<HTMLDivElement>)?.current;
        const svgElement = svgHeaderRef.current;
        const cardsContainerElement = projectCardsContainerRef.current;
        const currentProjectItems = projectItemsRef.current.filter(el => el !== null);

        if (!sectionContainer || !svgElement || !cardsContainerElement || currentProjectItems.length === 0) return;

        const svgCurrentText = svgElement.querySelector('#text-our');
        const svgProjectChars = gsap.utils.toArray<SVGTSpanElement>(svgElement.querySelectorAll('#text-services .gsap-char'));
        const svgUnderline = svgElement.querySelector('#title-underline') as SVGPathElement;
        const svgDecor = gsap.utils.toArray<SVGElement>(svgElement.querySelectorAll('.birb'));

        gsap.set([svgElement, svgCurrentText, ...svgProjectChars, svgUnderline, ...svgDecor, cardsContainerElement, ...currentProjectItems].filter(Boolean), { autoAlpha: 0, y:0 });

        if (svgUnderline) {
            gsap.set(svgUnderline, { strokeDasharray: 465, strokeDashoffset: 465});
        }

        gsap.set(cardsContainerElement, { y: 50 });
        gsap.set(currentProjectItems, {
            y: 50,
            scale: 0.8
        });

        ScrollTrigger.create({
            trigger: sectionContainer,
            start: "top 60%",
            onEnter: () => {
                const tl = gsap.timeline({
                    defaults: { ease: "power2.out" }
                });
                tl.to(
                    svgElement,
                    {
                        autoAlpha: 1,
                        duration: 0.2
                    }
                ).to(
                    svgCurrentText,
                    { 
                        autoAlpha: 1, 
                        duration: 0.6 
                    },
                    "-=0.1"
                ).to(
                    svgProjectChars,
                    { 
                        autoAlpha: 1,
                        duration: 0.1, 
                        stagger: 0.06 
                    },
                    "-=0.4"
                ).to(
                    svgUnderline,
                    { 
                        strokeDashoffset: 0, 
                        autoAlpha: 1, 
                        duration: 1.5, 
                        ease: "power1.inOut"
                    }
                ).to(
                    svgDecor,
                    {
                        autoAlpha: 0.3, 
                        duration: 1,
                        stagger: 0.1,
                        ease: "sine.inOut",
                        onComplete: () => {
                            let index = 0;
                            svgDecor.forEach((element) => {
                                const t1 = gsap.timeline();
                                if(index == 0 || index == 1) { 
                                    t1.to(
                                        element,
                                        {   
                                            y: 10,
                                            rotation: 185,
                                            transformOrigin: "center",
                                            duration: 1.4,
                                            ease: "sine.inOut",
                                            yoyo: true, 
                                            repeat: -1,
                                            delay: index*0.2
                                        }
                                    );
                                } else {
                                    t1.to(
                                        element,
                                        {    
                                            y: 10,
                                            rotation: -5,
                                            transformOrigin: "center",
                                            duration: 1.4,
                                            ease: "sine.inOut",
                                            yoyo: true, 
                                            repeat: -1,
                                            delay: index*0.2
                                        }
                                    );
                                }

                                index += 1;
                            });
                        }
                    },
                    "-=1.5"
                ).to(
                cardsContainerElement,
                { 
                    autoAlpha: 1,  
                    y: 0, 
                    duration: 0.3 
                },
                "-=0.5"
            ).fromTo(
                currentProjectItems,
                { 
                    autoAlpha: 0, 
                    y: 50, 
                    scale: 0.8 
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "power2.out", 
                    stagger: 0.25,
                },
                    "-=0.2"
                );
            },
            once: true,
        });
    }, []);

    return (
        <div ref={ref} className="min-h-screen pt-20"> 
            <CurrentProjectsHeaderSVG ref={svgHeaderRef} />
            <div ref={projectCardsContainerRef} className="container mx-auto px-4"> 
                <div className="flex flex-wrap justify-center gap-8"> 
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            ref={el => {
                                projectItemsRef.current[index] = el;
                            }}
                            className="w-full sm:w-1/2 lg:w-1/3 bg-white/10 border border-white/20 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-purple-400/30"
                        >
                            <div className="relative h-56  overflow-hidden flex items-center justify-center content-center bg-black/20"> {/* Increased height, added bg for placeholder */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="max-h-full w-auto object-contain p-4" 
                                />
                            </div>
                            <div className="p-6"> 
                                <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{project.title}</h3>
                                <p className="text-gray-200 mb-4 text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-purple-600/30 text-purple-200 border border-purple-400/50 rounded-full text-xs"
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
        </div>
    );
});

export default Projects;