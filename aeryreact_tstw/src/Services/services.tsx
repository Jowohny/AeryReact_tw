import { useEffect } from 'react';
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

function Services({ servicesRef, serviceItemsRef }: {
    servicesRef: React.RefObject<HTMLDivElement | null>,
    serviceItemsRef: React.RefObject<(HTMLDivElement | null)[]>
}) {
    useEffect(() => {
        if (servicesRef.current) {
            gsap.fromTo(
                servicesRef.current,
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

        const items = serviceItemsRef.current;
        if (!items) return;

        items.forEach((item, index) => {
            if (!item) return;

            gsap.fromTo(
                item,
                {
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 1,
                    ease: "elastic.out(1, 0.3)",
                    delay: index * 0.2
                }
            );
        });
    }, []);

    return (
        <div ref={servicesRef} className="min-h-screen py-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={service.title}
                        ref={el => {
                            if (serviceItemsRef.current) {
                                serviceItemsRef.current[index] = el;
                            }
                        }}
                        className="bg-white rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:scale-105"
                    >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services; 