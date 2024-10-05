import React, { useState } from "react";
import "./_upload_certificate_02.css"; // Ensure this path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faUpload } from "@fortawesome/free-solid-svg-icons";

const Upload_certificate = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [confirmCardVisible, setConfirmCardVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };
  const handleOpen = () => {
    setIsVisible(true);
  };

  const [certificateData, setCertificateData] = useState({
    certificateName: "",
    issueDate: "",
    category: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setCertificateData({
      ...certificateData,
      [name]: files ? files[0] : value, // Handle file input
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { certificateName, issueDate, category, file } = certificateData;

    if (
      certificateName === "" ||
      issueDate === "" ||
      category === "" ||
      !file
    ) {
      alert("🚫 Please fill out all fields.😡");
      setConfirmCardVisible(false);
    } else {
      console.log(certificateData); // Handle certificate upload logic
      setCertificateData({
        certificateName: "",
        issueDate: "",
        category: "",
        file: null,
      });
      setConfirmCardVisible(true);
      setIsCardVisible(false);
    }
  };

  return (
    <>
      <div className="upload-certifiacte-icon" onClick={handleOpen}>
        <h3>Upload Certificate</h3>
        <FontAwesomeIcon icon={faUpload} bounce />
      </div>
      {isVisible && (
        <div className="certifiacte-upload-page">
          <div
            className="upload-certificate-container"
            onClick={() => setIsVisible(true)}
          >
            <h1>Upload Certificate</h1>
          </div>
          {isCardVisible && (
            <div className="upload-certificate-card">
              <div className="upload-certificate-form-header">
                <div className="image">
                  <div className="right-arrow">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/6703/6703900.png"
                      border="0"
                    />
                  </div>
                  <div className="right-arrow">
                    <img src="https://i.ibb.co/5c9RpMD/right-arrow.png" />
                  </div>
                  <div className="university">
                    <img src="https://i.ibb.co/1nJZg0T/university-building.png" />
                  </div>
                </div>
                <div className="off_card">
                  <button onClick={handleClose}>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
              </div>
              <hr />

              <form className="upload-certificate-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="certificateName"
                    value={certificateData.certificateName}
                    onChange={handleChange}
                    required
                  />
                  <label>Certificate Name</label>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="issueDate"
                    value={certificateData.issueDate}
                    onChange={handleChange}
                    required
                  />
                  <label>Issue Date (dd-mm-yyyy)</label>
                </div>

                <div className="form-group">
                  <select
                    name="category"
                    value={certificateData.category}
                    onChange={handleChange}
                    required
                    id="upload-certificate-category"
                  >
                    <option value="">Select a category</option>
                    <option value="Academic">Academic</option>
                    <option value="Professional">Professional</option>
                    <option value="Skill-Based">Skill-Based</option>
                    <option value="Workshop">Workshop</option>
                  </select>
                </div>

                <div className="form-group">
                
                  <input
                    type="file"
                    name="file"
                    accept=".pdf, .jpg, .jpeg, .png"
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="certificate-submit-btn">
                  Upload Certificate
                </button>
              </form>

             
            </div>
          )}
           {/* For confirmation of submission */}
           {confirmCardVisible && (
                <div className="upload_certificate-confirm-card-container">
                  <div className="upload_certificate-confirm-card">
                    <div className="upload_certificate-confirm-checkmark-container">
                      <img
                        src="https://img.icons8.com/?size=48&id=Mw4ZtZQHm38P&format=gif"
                        alt="Success"
                        className="upload_certificate-confirm-checkmark-gif"
                      />
                    </div>
                    <div className="upload_certificate-confirm-message">
                      <h2>Success!</h2>
                      <p>Your certificate has been uploaded successfully.</p>
                    </div>
                  </div>
                </div>
              )}
              {/* For confirmation of submission */}
        </div>
      )}
    </>
  );
};

export default Upload_certificate;
