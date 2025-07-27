import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ModelResult = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { username, prediction } = location.state || {};

    return (
        <div style={styles.pageContainer}>
            <div style={styles.background}></div>
            <div style={styles.content}>
                <div style={styles.card}>
                    <h1 style={styles.title}>Prediction Result</h1>
                    <p style={styles.text}>
                        <span style={styles.highlight}>{username}</span>, your MNIST prediction is:
                    </p>
                    <div style={styles.predictionBox}>
                        <span style={styles.predictionText}>{prediction}</span>
                    </div>
                    <p style={styles.footer}>Thank you for using our model</p>
                    <button onClick={() => navigate("/test")}>Try again?</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    pageContainer: {
        position: "fixed",  
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden"  
    },
    background: {
        backgroundImage: "url('https://img.freepik.com/premium-photo/zodiac-signs-horoscope-background-concept-fantasy-mystery_521059-8139.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "absolute",  
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        filter: "grayscale(100%) blur(4px)",
        zIndex: -1,
    },
    content: {
        position: "absolute",  
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        overflow: "auto" 
    },
    card: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderRadius: "10px",
        padding: "40px",
        boxShadow: "0 0 30px rgba(0, 0, 0, 0.7)",
        textAlign: "center",
        width: "90%",  
        maxWidth: "600px",
        margin: "20px",
        boxSizing: "border-box"  
    },
    title: {
        fontSize: "2.2rem",
        color: "#222",
        marginBottom: "25px",
        fontWeight: "600",
    },
    text: {
        fontSize: "1.2rem",
        color: "#444",
        marginBottom: "20px",
    },
    highlight: {
        fontWeight: "bold",
        color: "#000",
    },
    predictionBox: {
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: "8px",
        padding: "25px",
        margin: "30px auto",
        width: "120px",
        height: "120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        fontWeight: "bold",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    },
    predictionText: {
        display: "block",
    },
    footer: {
        fontSize: "1rem",
        color: "#666",
        marginTop: "25px",
    },
};

export default ModelResult;