import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
    const ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            ref.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                    once: true
                }
            }
        );
    }, []);

    return (
        <section className="intro">
            <p ref={ref}>
                We partner with brands and teams to design and build thoughtful digital
                products that feel intuitive, purposeful, and human.
            </p>
        </section>
    );
}
