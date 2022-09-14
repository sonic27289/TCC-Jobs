import React from "react";
import Header from "./components/Header";
import './style.css'

function Home(){
    return (
        <div>
            <Header></Header>
            <main className="main">
                <div className="navbar">
                    navigation-bar
                </div>
                <div className="feed">
                    feed
                </div>
            </main>
        </div>
    );
}

export default Home;