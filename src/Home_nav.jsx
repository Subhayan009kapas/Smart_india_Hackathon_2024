import React, { useState } from "react";
import "./home_nav_02.css"; // Import the CSS file

function Home_nav() {
  const [isConnected, setIsConnected] = useState(false);

  // Function to handle MetaMask connection
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setIsConnected(true); // Set the connection state
        console.log("Connected account:", accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    } else {
      alert("MetaMask not found! Please install it.");
    }
  };

  return (
    <nav className="home-nav">
      <div className="home-nav-logo">
        {/* Logo of the site */}
        <img src="https://i.ibb.co/92fNkXL/graduation.png" alt="graduation" border="0"/>
      </div>
      <div className="home-nav-menu">
        {/* Connect Button */}
        <button className="home-nav-connect-button" onClick={connectWallet}>
          {isConnected ? "Connected" : "Connect ➡️"}
        </button>
      </div>
    </nav>
  );
}

export default Home_nav;
