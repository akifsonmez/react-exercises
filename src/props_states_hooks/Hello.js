import React, {useEffect} from "react";

const Hello = (props) => {
    useEffect(() => {
        console.log("Hello component did mount")
        return () => console.log("Hello component will mount")
    }, [])

    return (
        <p>Hello {props.name || "Akif"}</p>
    );
}

export default Hello
