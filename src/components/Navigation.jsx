import { useState } from "react";
import LoginModal from "./LoginModal";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Navigation() {
    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        gsap.to(window, {
            duration: 1.2,
            ease: "power3.inOut",
            scrollTo: {
                y: id,
                offsetY: 80, // navbar height
            },
        });
    };

    return (
        <>
            <nav className="nav">
                <div className="nav-logo">StudioX</div>

                <div className="nav-links">
                    <button type="button" onClick={() => scrollToSection("#studio")}>
                        Studio
                    </button>

                    <button type="button" onClick={() => scrollToSection("#work")}>
                        Work
                    </button>

                    <button type="button" onClick={() => scrollToSection("#contact")}>
                        Contact
                    </button>

                    <button
                        type="button"
                        className="nav-login"
                        onClick={() => setOpen(true)}
                    >
                        Login
                    </button>
                </div>
            </nav>

            {open && <LoginModal onClose={() => setOpen(false)} />}
        </>
    );
}
