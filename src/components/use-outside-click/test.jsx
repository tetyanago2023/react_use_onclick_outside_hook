import {useState} from "react";

const UseOnclickOutsideTest = () => {
const [showContent, setShowContent] = useState(false);
    return (
        <div>
            {
                showContent
                    ? (<div>
                        <h1>This is a random content</h1>
                        <p>Click outside to hide content</p>
                    </div>)
                    : (<button onClick={() => setShowContent(true)}>Show content</button>)
            }
        </div>)
};

export default UseOnclickOutsideTest;