import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const fieldsRef = useRef([]);
    const socialRef = useRef(null);
    const buttonRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);

        const payload = {
            name: data.get("name"),
            email: data.get("email"),
            phone: data.get("phone"),
            type: data.get("type"),
            message: data.get("message"),
        };

        console.log("FORM SUBMITTED:", payload);

        alert("Thank you! Your request has been sent.");
        e.target.reset();
    };

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=200%",
                scrub: true,
                pin: true,
                anticipatePin: 1,
            },
        });

        // LEFT CONTENT
        tl.fromTo(
            leftRef.current.children,
            { opacity: 1, y: 60 },
            { y: 0, stagger: 0.15, ease: "power3.out" }
        );

        // FORM FIELDS
        tl.fromTo(
            fieldsRef.current,
            { opacity: 1, y: 80 },
            { y: 0, stagger: 0.12, ease: "power3.out" },
            0.1
        );

        // SOCIAL ICONS
        tl.fromTo(
            socialRef.current.children,
            { opacity: 1, y: 20 },
            { opacity: 1, y: 0, stagger: 0.12, ease: "power3.out" },
            0.2
        );

        // EXIT ANIMATION
        tl.to(
            sectionRef.current,
            { opacity: 0 },
            1.4
        );

        // MAGNETIC BUTTON
        const btn = buttonRef.current;
        const strength = 18;

        const move = (e) => {
            const r = btn.getBoundingClientRect();
            gsap.to(btn, {
                x: (e.clientX - (r.left + r.width / 2)) / strength,
                y: (e.clientY - (r.top + r.height / 2)) / strength,
                ease: "power3.out",
            });
        };

        const reset = () => {
            gsap.to(btn, { x: 0, y: 0, ease: "power3.out" });
        };

        btn.addEventListener("mousemove", move);
        btn.addEventListener("mouseleave", reset);

        // FIELD FOCUS ANIMATION
        fieldsRef.current.forEach((field) => {
            const input = field.querySelector("input, textarea, select");
            if (!input) return;

            input.addEventListener("focus", () =>
                gsap.to(field, { y: -4, duration: 0.3, ease: "power2.out" })
            );
            input.addEventListener("blur", () =>
                gsap.to(field, { y: 0, duration: 0.3, ease: "power2.out" })
            );
        });
    }, []);

    return (
        <section className="contact" id="contact" ref={sectionRef}>
            <div className="contact-layout">

                {/* LEFT */}
                <div className="contact-left" ref={leftRef}>
                    <h2>Let’s work together</h2>
                    <p>
                        Tell us about your idea, project, or challenge.
                        We’ll help you bring it to life.
                    </p>

                    <div className="contact-address">
                        <p>StudioX</p>
                        <p>Chennai, India</p>
                        <p>contact@studiox.com</p>
                    </div>
                    <div className="contact-social" ref={socialRef}>
                        <a href="#" aria-label="Instagram">
                            <svg viewBox="0 0 24 24">
                                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9zM17.8 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                            </svg>
                        </a>

                        <a href="#" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24">
                                <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96zM3 8.98h3.96V21H3zM9.02 8.98H13v1.64h.06c.55-1.04 1.9-2.14 3.9-2.14 4.18 0 4.95 2.75 4.95 6.32V21h-3.96v-5.7c0-1.36-.03-3.12-1.9-3.12-1.9 0-2.2 1.48-2.2 3.02V21H9.02z" />
                            </svg>
                        </a>

                        <a href="#" aria-label="Twitter">
                            <svg viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8.09v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                        </a>
                    </div>

                </div>

                {/* RIGHT */}
                <form className="contact-form" onSubmit={handleSubmit}>

                    {[
                        <input placeholder="Your name" />,
                        <input type="email" placeholder="Email address" />,
                        <input type="tel" placeholder="Phone number" />,
                        <select>
                            <option>Project type</option>
                            <option>Branding</option>
                            <option>Website</option>
                            <option>Product Design</option>
                        </select>,
                        <textarea placeholder="Tell us about your project" rows="4" />,
                        <button ref={buttonRef} type="submit">
                            Send request
                        </button>,
                    ].map((field, i) => (
                        <div
                            className="contact-field"
                            key={i}
                            ref={(el) => (fieldsRef.current[i] = el)}
                        >
                            {field}
                        </div>
                    ))}
                </form>

            </div>
        </section>
    );
}
