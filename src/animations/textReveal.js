import gsap from "gsap";

export function textReveal(container) {
    const lines = container.querySelectorAll(".line");

    gsap.fromTo(
        lines,
        { yPercent: 120 },
        {
            yPercent: 0,
            duration: 1.3,
            ease: "power4.out",
            stagger: 0.08
        }
    );
}
