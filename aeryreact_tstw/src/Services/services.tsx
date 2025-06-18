import { forwardRef, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OurServicesHeaderSVG from './OurServices';

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

interface ServicesProps {}

const Services = forwardRef<HTMLDivElement, ServicesProps>((_props, ref) => {
    const svgHeaderRef = useRef<SVGSVGElement | null>(null);
    const serviceItemsRef = useRef<(HTMLDivElement | null)[]>([]); 
    const serviceCardsContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
            const sectionContainer = (ref as React.RefObject<HTMLDivElement>)?.current;
            const svgElement = svgHeaderRef.current;
            const cardsContainerElement = serviceCardsContainerRef.current;
            const currentServiceItems = serviceItemsRef.current.filter(el => el !== null);

            if (!svgElement || !cardsContainerElement || currentServiceItems.length === 0) return;

            const svgOurText = svgElement.querySelector('#text-our');
            const svgServiceChars = gsap.utils.toArray<SVGTSpanElement>(svgElement.querySelectorAll('#text-services .gsap-char'));
            const svgUnderline = svgElement.querySelector('#title-underline') as SVGPathElement
            const svgDecor = gsap.utils.toArray<SVGElement>(svgElement.querySelectorAll('.birb'));

            gsap.set([svgElement, svgOurText, ...svgServiceChars, svgUnderline, ...svgDecor, cardsContainerElement, ...currentServiceItems].filter(Boolean), { autoAlpha: 0, y: 0 });

            if (svgUnderline) {
                gsap.set(svgUnderline, { strokeDasharray: 425, strokeDashoffset: 425});
            }
            
            ScrollTrigger.create({
                trigger: sectionContainer,
                start: "top 40%",
                end: "bottom",
                toggleActions: "play pause resume reset",
                onEnter: () => {
                    const tl = gsap.timeline({
                        defaults: { ease: "power2.out" }
                    });
                    tl.fromTo(
                        svgElement, 
                        {
                            autoAlpha: 0
                        },
                        { 
                            autoAlpha: 1, 
                            duration: 0.2 
                        }
                    ).fromTo(
                        svgOurText, 
                        {
                            autoAlpha: 0,
                            y: -20
                        },
                        { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.4
                        },
                        "-=0.1"
                    ).fromTo(
                        svgServiceChars, 
                        {
                            autoAlpha: 0,
                            y: 30
                        },
                        { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.2, 
                            stagger: 0.08
                        }, 
                        "-=0.3"
                    ).fromTo(
                        svgUnderline, 
                        {
                            autoAlpha: 0
                        },
                        { 
                            strokeDashoffset: 0, 
                            autoAlpha: 1, 
                            duration: 0.8, 
                            ease: "power1.inOut"
                        }, 
                        "-=0.4"
                    ).to(
                        svgDecor, 
                        { 
                            autoAlpha: 0.3,
                            duration: 0.6, 
                            stagger: 0.08, 
                            ease: "sine.inOut"
                        }, 
                        "-=1.0"
                    ).fromTo(
                        cardsContainerElement, 
                        {
                            autoAlpha: 0
                        },
                        { 
                            autoAlpha: 1, 
                            y: 0, 
                            duration: 0.3, 
                        }, 
                        "-=0.3"
                    ).fromTo(
                        currentServiceItems, 
                        {
                            autoAlpha: 0
                        },
                        { 
                            autoAlpha: 1, 
                            x: 0, 
                            scale: 1, 
                            duration: 0.4, 
                            ease: "power2.out", 
                            stagger: 0.1, 
                        }, 
                        "-=0.3"
                    );
                },
                once: true,
            });
   
    }, [ref]);

    return (
        <div ref={ ref } className="min-h-screen pt-20">
            <OurServicesHeaderSVG ref={svgHeaderRef} />
            <div ref={serviceCardsContainerRef} className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            ref={el => {
                                serviceItemsRef.current[index] = el;
                            }}
                            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-purple-400/30"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{service.title}</h3>
                            <p className="text-gray-200">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default Services;