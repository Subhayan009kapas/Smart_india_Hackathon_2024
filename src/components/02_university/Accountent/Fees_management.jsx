import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook
import './_fee_management_02.css'; // Importing the CSS file for styling

function FeeManagement() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Initial student fee data (demo)
  const [fees, setFees] = useState([
    { id: 'ST001', name: 'John Doe', isPaid: true },
    { id: 'ST002', name: 'Jane Smith', isPaid: false },
    { id: 'ST003', name: 'Michael Johnson', isPaid: true },
    { id: 'ST004', name: 'Emily Davis', isPaid: false },
    { id: 'ST005', name: 'Robert Brown', isPaid: true },
  ]);

  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query
  const [showAddForm, setShowAddForm] = useState(false); // State to manage the visibility of the add form
  const [newStudent, setNewStudent] = useState({ id: '', name: '', isPaid: false }); // State for new student input

  // Function to update payment status
  const updatePaymentStatus = (id) => {
    setFees(
      fees.map((student) =>
        student.id === id ? { ...student, isPaid: !student.isPaid } : student
      )
    );
  };

  // Filter students based on the search query
  const filteredFees = fees.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close the card and navigate back
  const closeCard = () => {
    navigate(-1); // Navigate back to the previous route
  };

  // Handle form submission for adding a new fee record
  const handleAddStudent = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (newStudent.id && newStudent.name) {
      setFees([...fees, newStudent]); // Add new student to the fees state
      setNewStudent({ id: '', name: '', isPaid: false }); // Reset form
      setShowAddForm(false); // Hide the form
    }
  };

  return (
    <div className="fee_whole-container">
      <div className="fee-management-card">
        {/* Close Button */}
        <span className="close-button" onClick={closeCard}>
          &times;
        </span>

        <h2>Fee Management</h2>

        {/* Search bar for finding students */}
        <input 
          type="text" 
          placeholder="Search by Student ID or Name" 
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
        />

        {/* Table to display student fee details */}
        <table className="fee-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Student ID</th>
              <th>Fee Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredFees.length > 0 ? (
              filteredFees.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.id}</td>
                  <td>{student.isPaid ? "Paid" : "Pending"}</td>
                  <td>
                    <button 
                      className="update-button" 
                      onClick={() => updatePaymentStatus(student.id)}
                    >
                      {student.isPaid ? "Mark as Pending" : "Mark as Paid"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No students found</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Button to add new fee records */}
        <button className="add-fee-button" onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? "Cancel" : "Add Fee Record"}
        </button>

        {/* Add Student Form */}
        {showAddForm && (
          <form onSubmit={handleAddStudent} className="add-student-form">
            <input 
              type="text" 
              placeholder="Student Name" 
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} 
              required 
            />
            <input 
              type="text" 
              placeholder="Student ID" 
              value={newStudent.id}
              onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })} 
              required 
            />
            <button type="submit" className="submit-button">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default FeeManagement;
