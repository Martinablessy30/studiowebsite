import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function parallaxImage(wrapper, image, intensity = 40) {
    gsap.fromTo(
        image,
        { y: -intensity },
        {
            y: intensity,
            ease: "none",
            scrollTrigger: {
                trigger: wrapper,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        }
    );
}
