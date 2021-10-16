import React from "react";

const App = () => {

    return (
        <div className="div" onClick={(e) => {
            e.stopPropagation();
            console.log("div clicked");
        }}>
            <h1>Event Handling</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log("form submitted");
            }}>
                <label className="label">Name</label>
                <input
                    onChange={(e) => console.log(e.target.value)}
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log("input clicked");
                    }}
                    onBlur={(e) => {
                        if (e.target.value.length > 10) {
                            console.log("Entered value has more than 10 char.")
                        }
                    }}
                    onFocus={() => console.log("input focused")}
                    className="input"/>
                <button onClick={(e) => e.stopPropagation()}>Submit</button>
            </form>
        </div>
    );
}

export default App

