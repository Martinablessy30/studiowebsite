import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    // Split text reveal effect
    tl.fromTo(".hero-line span",
      { y: "100%" },
      { y: 0, duration: 1.2, ease: "expo.out", stagger: 0.1 }
    );
  }, []);

  return (
    <section ref={containerRef} className="h-screen flex items-center px-[5vw]">
      <div className="w-full">
        <h1 className="text-[12vw] leading-[0.9] font-bold uppercase tracking-tighter">
          <div className="hero-line overflow-hidden">
            <span className="block">Creative</span>
          </div>
          <div className="hero-line overflow-hidden text-right">
            <span className="block text-accent italic">Collective</span>
          </div>
        </h1>
      </div>
    </section>
  );
}