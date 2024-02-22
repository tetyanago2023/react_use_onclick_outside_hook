import {useRef, useState} from "react";
import useOutsideClick from "./index";

const UseOnclickOutsideTest = () => {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    useOutsideClick(ref, () => setShowContent(false));

    return (
        <div>
            {
                showContent
                    ? (<div ref={ref}
                            style={{ border: '2px solid black',
                                padding: '10px',
                                background: "#008080",
                                color: "#FFC300" }}>
                        <h1>This is a random content</h1>
                        <p>Click outside to hide content</p>
                    </div>)
                    : (<button onClick={() => setShowContent(true)}>Show content</button>)
            }
        </div>)
};

export default UseOnclickOutsideTest;