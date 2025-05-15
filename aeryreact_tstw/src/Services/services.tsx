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
        title: "Web Development",
        description: "Custom web applications built with modern technologies and best practices.",
        icon: "💻"
    },
    {
        title: "Mobile Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        icon: "📱"
    },
    {
        title: "UI/UX Design",
        description: "Beautiful and intuitive user interfaces that enhance user experience.",
        icon: "🎨"
    },
    {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and deployment solutions.",
        icon: "☁️"
    },
    {
        title: "AI & Machine Learning",
        description: "Intelligent solutions powered by cutting-edge AI and ML technologies.",
        icon: "🤖"
    },
    {
        title: "DevOps",
        description: "Streamlined development and deployment processes with modern DevOps practices.",
        icon: "🔄"
    }
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
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse"
                    },
                    delay: index * 0.2
                }
            );
        });
    }, []);

    return (
        <div ref={servicesRef} className="min-h-screen py-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Services</h2>
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