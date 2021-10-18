import React, { useState } from 'react';

const App = () => {
    const [userName, setUserName] = useState('');
    const [newChirp, setNewChirpMsg] = useState('');

    const [chirps, setChirps] = useState([
        {
            username: "Shaggy",
            message: "Zoinks!",
        },
        {
            username: "Freddy",
            message: "Let's split up, gang!",
        },
        {
            username: "Scooby",
            message: "Ruh-roh--RAGGY",
        },
    ]);

    const handleButtonSubmit = (e) => {
        setChirps([
            ...chirps,
            {
                username: userName,
                message: newChirp,
            },
        ]);

        setUserName('');
        setNewChirpMsg('');
    };

    return (
        <div className="container">
            <p>
                <label for="user-name">User Name:</label>
                <input
                    value={userName}
                    id="user-name"
                    placeholder="@username"
                    onChange={(e) => setUserName(e.target.value)}
                />
            </p>
            <p>
                <label for="chirp-msg">Message:</label>
                <textarea
                    id="chirp-msg"
                    placeholder="Tell us your thoughts..."
                    onChange={(e) => setNewChirpMsg(e.target.value)}
                    value={newChirp}>
                </textarea>
            </p>
            <button onClick={handleButtonSubmit}>Send Chirp</button>
            <div>
                <p id="display-chirp">
                    {chirps.map(chirp => (
                        <>
                            <div>{chirp.username}</div>
                            <div>{chirp.message}</div>
                        </>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default App;