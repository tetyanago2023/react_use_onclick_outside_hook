import { useRef, useState } from "react";
import useOutsideClick from "./index";
import "./styles.css";

const UseOutsideClickTest = () => {
    const [showContent, setShowContent] = useState(false);
    const contentRef = useRef(); // Renamed ref to contentRef for clarity
    useOutsideClick(contentRef, () => setShowContent(false));

    return (
        <div>
            {showContent ? (
                <div ref={contentRef} className="content-container">
                    <h1>This is a random content</h1>
                    <p>Click outside to hide content</p>
                </div>
            ) : (
                <button onClick={() => setShowContent(true)}>Show content</button>
            )}
        </div>
    );
};

export default UseOutsideClickTest; // Renamed the component for consistency
