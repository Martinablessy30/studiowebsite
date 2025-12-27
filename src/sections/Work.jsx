import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const projects = [
    {
        title: "Project One",
        images: [

            "/images/work/work5.jpeg",
            "/images/work/work6.jpeg",
            "/images/work/work2.jpeg"
        ],
    },
    {
        title: "Project Two",
        images: [
            "/images/work/work3.jpeg",
            "/images/work/work4.jpeg",
            "/images/work/work1.jpeg"

        ],
    },
];


export default function Work() {
    const itemsRef = useRef([]);
    useEffect(() => {
        itemsRef.current.forEach((item) => {
            const images = item.querySelectorAll(".work-image");
            const title = item.querySelector(".work-title");

            /* SECTION ENTRY — HEAVY PRESENCE */
            gsap.fromTo(
                item,
                { opacity: 0, y: 160 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.6,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 95%",
                        once: true,
                    },
                }
            );

            /* IMAGE PARALLAX — DEEP, CINEMATIC */
            images.forEach((img, i) => {
                gsap.fromTo(
                    img,
                    { y: -80 - i * 16 },
                    {
                        y: 80 + i * 16,
                        ease: "linear",
                        scrollTrigger: {
                            trigger: item,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 2,          // very smooth, heavy feel
                        },
                    }
                );
            });

            /* TITLE REVEAL — CONFIDENT, DELAYED */
            if (title) {
                gsap.fromTo(
                    title,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 88%",
                            once: true,
                        },
                    }
                );
            }
        });
    }, []);

    return (
        <section className="work" id="work">
            <div className="work-list">
                {projects.map((project, i) => (
                    <article
                        className="work-item"
                        key={i}
                        ref={(el) => (itemsRef.current[i] = el)}
                    >
                        <div className="work-images">
                            {project.images.map((src, idx) => (
                                <div
                                    className={`work-image ${idx === 0 ? "large" : ""}`}
                                    key={idx}
                                >
                                    <img src={src} alt={project.title} />
                                </div>
                            ))}
                        </div>

                        <h3 className="work-title">{project.title}</h3>
                    </article>
                ))}
            </div>
        </section>
    );
}
