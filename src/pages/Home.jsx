import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()

    return (
        <div style={styles.pageContainer}>
            <div style={styles.background}></div>
            <div style={styles.content}>
                <h1 style={styles.text}>Welcome to the MNIST model implementation</h1>
                <button type="submit" onClick={() => navigate("/test")}>Let's try it out !</button>
            </div>
        </div>
    )
}

export default Home;

const styles = {
    pageContainer: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "auto",
    },
    background: {
        backgroundImage: "url('https://miro.medium.com/v2/resize:fit:4800/format:webp/1*qYjM4kLeyZotqLpkIn1RMA.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "fixed", 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        filter: "blur(3px)",
        zIndex: -1,
    },
    content: {
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: "20px",
    },
    text: {
        color: "#FFFFFF",
        textShadow: "0 0 8px rgba(0,0,0,0.8)",
        backgroundColor: "rgba(0,0,0,0.5)", 
        padding: "20px",
        borderRadius: "10px"
    }
};