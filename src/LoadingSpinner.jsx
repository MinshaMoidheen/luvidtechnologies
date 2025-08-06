import React from "react";

const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      fontFamily: "Inter, sans-serif",
    }}
  >
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "3px solid #f3f3f3",
          borderTop: "3px solid #000",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          margin: "0 auto 20px",
        }}
      ></div>
      <h2
        style={{
          color: "#333",
          margin: "0",
          fontSize: "1.5rem",
          fontWeight: "600",
        }}
      >
        LUVID Technologies
      </h2>
      <p
        style={{
          color: "#666",
          margin: "10px 0 0",
          fontSize: "1rem",
        }}
      >
        Loading amazing experiences...
      </p>
    </div>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default LoadingSpinner;
