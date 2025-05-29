import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Service {
    title: string;
    description: string;
    icon: string;
}

const services: Service[] = [
    {
        title: "Artificial Intelligence",
        description: "Providing your own personal and private on-device AI assistant.",
        icon: "🤖"
    },
    {
        title: "Mobile Development",
        description: "Creating NATIVE mobile applications for both iOS and Android.",
        icon: "📱"
    },
    {
        title: "User Interface",
        description: "Beautiful and intuitive user interfaces that makes the app easy to use.",
        icon: "🖥️"
    },
    {
        title: "User Experience",
        description: "Nice and simple animations that make the app more engaging and fun to use.",
        icon: "👨🏻‍💻"
    },
];

function Services({ restarted }: { restarted: boolean; }) {
    const servicesContainerRef = useRef<HTMLDivElement | null>(null);
    const serviceItemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const container = servicesContainerRef.current;
            const items = serviceItemsRef.current.filter(el => el !== null);

  
            gsap.set(
                container, 
                { 
                    opacity: 0, 
                    y: 50 
                }
            );
            gsap.set(
                items, 
                {
                    opacity: 0,
                    x: (index) => (index % 2 === 0 ? -50 : 50),
                    scale: 0.8
                }
            );

            ScrollTrigger.create({
                trigger: container,
                start: "top 60%",
                toggleActions: "play none none none", 

                onEnter: () => {
                    gsap.to(
                        container, 
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0,
                            ease: "power2.out",
                            onComplete: () => {
                                gsap.to(
                                    items, 
                                    {
                                        opacity: 1,
                                        x: 0,
                                        scale: 1,
                                        duration: 1.3,
                                        ease: "elastic.out(1, 0.3)",
                                        stagger: 0.2, 
                                    }
                                );
                        }
                    });
                },
            });

        }, servicesContainerRef); 

        return () => ctx.revert();

    }, [restarted]);

    return (
        <div ref={servicesContainerRef} className="min-h-screen"> 
            <div className="container mx-auto px-4"> 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            ref={el => {
                                serviceItemsRef.current[index] = el;
                            }}
                            className="bg-white/15 rounded-2xl shadow-2xl border border-white/20 p-8"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{service.title}</h3>
                            <p className="text-white">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;