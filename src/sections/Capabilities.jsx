import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
    "Brand Identity",
    "UI / UX Design",
    "Motion Design",
    "Web Development",
    "Creative Direction",
    "Digital Strategy",
];

export default function Capabilities() {
    const gridRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            gridRef.current.children,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                    once: true,
                },
            }
        );
    }, []);

    return (
        <section className="capabilities" id="studio">
            <h2>Capabilities</h2>

            <div className="capabilities-grid" ref={gridRef}>
                {items.map((item, i) => (
                    <div className="capability" key={i}>
                        {item}
                    </div>
                ))}
            </div>
        </section>
    );
}
