import "./LoadingIndicator.css";
import React from 'react';

function LoadingIndicator() {
    return (
        <div className="spinner-container">
            <div className="spinner">
                {/* <p style={{ marginLeft: "10px" }}>Loading...</p> */}
            </div>
        </div>
    );
}

export default LoadingIndicator
