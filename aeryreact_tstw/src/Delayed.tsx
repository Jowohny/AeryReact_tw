import { useState } from "react";

function DelayedSpawn() {
    const [buttonPressed, setButtonPressed] = useState(false);

    const handleClick = () => {
        if (!buttonPressed) {
            setTimeout(() => {
                setButtonPressed(true);
            }, 3000); // 3-second delay
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <button
                onClick={handleClick}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg"
            >
                Press Me
            </button>

            <div className="mt-5 w-40 h-40 flex items-center justify-center">
                {buttonPressed ? (
                    <div className="w-full h-full bg-green-500 text-white flex items-center justify-center">
                        After Press
                    </div>
                ) : (
                    <div className="w-full h-full bg-red-500 text-white flex items-center justify-center">
                        Before Press
                    </div>
                )}
            </div>
        </div>
    );
}

export default DelayedSpawn;
