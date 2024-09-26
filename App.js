import React from "react"
import Navbar from "./components/Navbar"
import Entry from "./components/Entry"
import data from "./data.js"

export default function App() {
    const entries = data.map((entry) => {
        return (
            <Entry 
                id={entry.id}
                entry={entry}
            />
        )
    });
    return (
        <>
            <Navbar />
            {entries}
        </>
    );
}