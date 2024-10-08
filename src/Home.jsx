import {React , useState} from "react";
import { NavLink } from "react-router-dom";
import "./Home_02.css";
import Home_nav from "./Home_nav";

function Home() {
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
    <>
    {/* navbar */}
    <Home_nav/>
    {/* navbar */}
    <div className="home-container">

      
      <div className="card-wrapper">
        <div className="client-card">
          <NavLink to="/university">
            <div className="card-content">
              <img src="https://i.ibb.co/DGcvvLK/school-1.png" alt="University" className="card-image" />
              <h3 className="card-title">University</h3>
            </div>
          </NavLink>
        </div>

        <div className="client-card">
          <NavLink to="/student">
            <div className="card-content">
              <img src="https://i.ibb.co/ZL4pPsx/student.png" alt="Student" className="card-image" />
              <h3 className="card-title">Student</h3>
            </div>
          </NavLink>
        </div>

        <div className="client-card">
          <NavLink to="/aicte">
            <div className="card-content">
              <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png" alt="AICTE" className="card-image" />
              <h3 className="card-title">AICTE</h3>
            </div>
          </NavLink>
        </div>

        <div className="client-card">
          <NavLink to="/company">
            <div className="card-content">
              <img src="https://i.ibb.co/nPtpnjs/office-building.png" alt="Company" className="card-image" />
              <h3 className="card-title">Company</h3>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
