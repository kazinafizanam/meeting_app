// import meeting from "./meeting.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
    const [username, setUsername] = useState("");

    const zoomMeeting = () => {
        const data = {
            email: "nafiza.aobs@gmail.com",
        };
        console.log(username);
        axios
            .post(`http://localhost:3666/meeting`, data)
            .then((response) => {
                let URL =
                    response.data.join_url.replaceAll(
                        "https://us04web.zoom.us/j/",
                        "http://localhost:9999/?"
                    ) + `?role=1?name=${username}`;
                console.log(URL);
                window.location.replace(`${URL}`);
            })
            .catch((err) => console.error(err));
    };
    return (
        <div className="App">
            <header className="header ">
                <h1>Zoom Meeting</h1>
                <div className="main">
                    <input
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        style={{
                            width: "300px",
                            borderRadius: "5px",
                            padding: "8px 12px",
                            fontSize: "20px",
                        }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button className="btn btn-form" onClick={zoomMeeting}>
                        Join Meeting
                    </button>
                </div>
            </header>
        </div>
    );
}

export default App;
