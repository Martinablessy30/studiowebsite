import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // TEXT REVEAL
        const lines = textRef.current.querySelectorAll(".mask span");

        gsap.to(lines, {
            y: "0%",
            duration: 1.4,
            stagger: 0.12,
            ease: "power4.out",
            delay: 0.2
        });

        // IMAGE SLOW REVEAL
        gsap.fromTo(
            imageRef.current,
            { scale: 1.15 },
            {
                scale: 1,
                duration: 1.8,
                ease: "power3.out",
                delay: 0.3
            }
        );
    }, []);

    return (
        <section className="hero" id="hero">
            <div className="hero-text" ref={textRef}>
                <h1>
                    <span className="mask intro">
                        <span>We design</span>
                    </span>

                    <span className="mask">
                        <span>visual</span>
                    </span>

                    <span className="mask">
                        <span>experiences</span>
                    </span>
                </h1>
            </div>

            <div className="hero-image">
                <img
                    ref={imageRef}
                    src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
                    alt="Hero Visual"
                />
            </div>
        </section>
    );
}
