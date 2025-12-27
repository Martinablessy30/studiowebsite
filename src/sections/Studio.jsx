import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
    { title: "24+", text: "Projects delivered" },
    { title: "Motion-first", text: "Design approach" },
    { title: "3+", text: "Years of design practice" },
    { title: "Design → Dev", text: "End-to-end workflow" },
    { title: "15+", text: "Client collaborations" },
    { title: "Built for", text: "Clarity & performance" },
];

export default function Studio() {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            itemsRef.current,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            }
        );
    }, []);

    return (
        <section className="studio" id="studio" ref={sectionRef}>
            {/* INTRO */}
            <div className="studio-intro">
                <h2 className="mask">
                    <span>Studio</span>
                </h2>

                <p className="studio-description">
                    We are a design-driven studio focused on crafting meaningful,
                    motion-led digital experiences with clarity and purpose.
                </p>
            </div>

            {/* PHILOSOPHY */}
            <div className="studio-philosophy">
                <p>
                    We believe good design is not decoration.
                    It is structure, rhythm, and intention — shaped through
                    process, experimentation, and refinement.
                </p>
            </div>

            {/* METRICS */}
            <div className="studio-metrics">
                {metrics.map((item, i) => (
                    <div
                        className="studio-metric"
                        key={i}
                        ref={(el) => (itemsRef.current[i] = el)}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
