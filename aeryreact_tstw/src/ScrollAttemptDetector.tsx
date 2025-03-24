import { useEffect, useState } from "react";

const ScrollTriggerAnimation = () => {
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    useEffect(() => {
        const handleScrollAttempt = () => {
            setTriggerAnimation(true);

            // Optional: Reset animation after some time
            setTimeout(() => setTriggerAnimation(false), 1000);
        };

        window.addEventListener("wheel", handleScrollAttempt);
        window.addEventListener("touchmove", handleScrollAttempt);
        window.addEventListener("keydown", (event) => {
            if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(event.key)) {
                handleScrollAttempt();
            }
        });

        return () => {
            window.removeEventListener("wheel", handleScrollAttempt);
            window.removeEventListener("touchmove", handleScrollAttempt);
            window.removeEventListener("keydown", handleScrollAttempt);
        };
    }, []);

    return (
        <div className="container">
            <p>Try scrolling to trigger the animation!</p>
            <img
                src="./src/assets/images/logo.png"
                alt="Animated"
                className={triggerAnimation ? "animate" : ""}
            />
        </div>
    );
};

export default ScrollTriggerAnimation;
