export default function LoginModal({ onClose }) {
    return (
        <div
            className="login-overlay"
            onClick={onClose}
            style={{ cursor: "auto" }}
        >
            <div
                className="login-card"
                onClick={(e) => e.stopPropagation()}
                style={{
                    color: "#fff",
                    background: "#151515",
                    opacity: 1,
                    transform: "none",
                }}
            >
                <h2 style={{ marginBottom: "16px" }}>Login</h2>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Login successful (demo)");
                        onClose();
                    }}
                >
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        style={{ color: "#000", background: "#fff" }}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        required
                        style={{ color: "#000", background: "#fff" }}
                    />

                    <button
                        className="login-btn"
                        type="submit"
                        style={{ marginTop: "12px" }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}