import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Featured() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=120%",
                scrub: true,
                pin: true,
            },
        });

        tl.fromTo(
            imageRef.current,
            { scale: 1.2 },
            { scale: 1, ease: "none" }
        ).fromTo(
            textRef.current,
            { opacity: 0, y: 80 },
            { opacity: 1, y: 0, ease: "power3.out" },
            0
        );
    }, []);
}