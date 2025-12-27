import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { ...pos };

        const move = () => {
            pos.x += (mouse.x - pos.x) * 0.15;
            pos.y += (mouse.y - pos.y) * 0.15;

            gsap.set(cursor, {
                x: pos.x,
                y: pos.y
            });

            requestAnimationFrame(move);
        };

        move();

        const onMove = e => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    return <div className="cursor" ref={cursorRef} />;
}
