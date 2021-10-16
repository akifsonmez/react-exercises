import React, {useEffect, useState} from "react";
import Hello from "./Hello";

const App = (props) => {

    const [helloVisible, setHelloVisible] = useState(true)
    // component did mount and component will mount
    useEffect(() => {
        console.log("App component did mount")
        return () => console.log("App component will mount")
    }, [])

    // component did mount + component did update
    // useEffect(() => console.log("component did update"), [helloVisible])


    return (
        <div className="div">
            <h1>React Props, States And Hooks</h1>
            <div>
                <button onClick={() => setHelloVisible(helloVisible => !helloVisible)}>
                    React Hooks Test
                </button>
                {helloVisible && <Hello name={props.name}/>}
            </div>
        </div>
    );
}


export default App
