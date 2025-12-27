import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Clients() {
    const ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            ref.current.children,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 85%",
                    once: true,
                },
            }
        );
    }, []);

    return (
        <section className="clients">
            <h2>Trusted by teams worldwide</h2>

            <div className="clients-grid" ref={ref}>
                {["Alpha", "Nova", "Orbit", "Pulse", "Vertex", "Echo"].map((c, i) => (
                    <div className="client" key={i}>
                        {c}
                    </div>
                ))}
            </div>
        </section>
    );
}
