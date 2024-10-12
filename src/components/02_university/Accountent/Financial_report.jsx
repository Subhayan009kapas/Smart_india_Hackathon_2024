import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './_financial_report_02.css'; // CSS file for styling
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function FinancialReport() {
  const navigate = useNavigate(); // For navigation

  // Sample financial data (demo)
  const [reports, setReports] = useState([
    { id: 'FR001', reportName: 'Quarterly Report Q1', date: '2024-01-15', status: 'Approved', revenue: '50,000', expenditure: '30,000', profit: '20,000' },
    { id: 'FR002', reportName: 'Quarterly Report Q2', date: '2024-04-20', status: 'Pending', revenue: '60,000', expenditure: '35,000', profit: '25,000' },
    { id: 'FR003', reportName: 'Annual Financial Statement', date: '2024-12-30', status: 'Approved', revenue: '200,000', expenditure: '120,000', profit: '80,000' },
  ]);

  const [newReport, setNewReport] = useState({
    id: '',
    reportName: '',
    date: new Date().toISOString().split('T')[0], // Automatically set to current date
    status: 'Pending', // Default status
    revenue: '',
    expenditure: '',
    profit: '',
  });

  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // State for the search input

  // Function to download report as a PDF
  const downloadReport = (report) => {
    const doc = new jsPDF();
    doc.text(report.reportName, 10, 10);
    doc.autoTable({
      head: [['Field', 'Value']],
      body: [
        ['Date', report.date],
        ['Status', report.status],
        ['Revenue', report.revenue],
        ['Expenditure', report.expenditure],
        ['Profit', report.profit],
      ],
    });
    doc.save(`${report.reportName}.pdf`);
  };

  // Function to add a new financial report
  const addNewReport = () => {
    if (newReport.reportName && newReport.revenue && newReport.expenditure) {
      setReports([...reports, { ...newReport, id: `FR${reports.length + 1}`, profit: newReport.revenue - newReport.expenditure }]);
      setShowForm(false);
      setNewReport({ id: '', reportName: '', date: new Date().toISOString().split('T')[0], status: 'Pending', revenue: '', expenditure: '', profit: '' });
    }
  };

  // Handle card close (navigates back)
  const closeCard = () => {
    navigate(-1);
  };

  // Filter reports based on search term
  const filteredReports = reports.filter(report =>
    report.reportName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="financial-report-container">
      <div className="financial-report-card">
        <span className="close-card" onClick={closeCard}>&times;</span> {/* Close button */}

        <h2>Financial Reports</h2>

        {/* Search bar for filtering reports */}
        <input
          type="text"
          placeholder="Search by Report Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar" // Add a class for styling
        />

        {/* Table to display financial reports */}
        <table className="financial-report-table">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Revenue</th>
              <th>Expenditure</th>
              <th>Profit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr key={report.id}>
                <td>{report.reportName}</td>
                <td>{report.date}</td>
                <td>{report.status}</td>
                <td>${report.revenue}</td>
                <td>${report.expenditure}</td>
                <td>${report.profit}</td>
                <td>
                  <button className="download-button" onClick={() => downloadReport(report)}>
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add New Report Button */}
        <button className="add-report-button" onClick={() => setShowForm(true)}>
          Add New Report
        </button>

        {/* Form to add new report */}
        {showForm && (
          <div className="add-report-form">
            <h3>Add New Report</h3>
            <input
              type="text"
              placeholder="Report Name"
              value={newReport.reportName}
              onChange={(e) => setNewReport({ ...newReport, reportName: e.target.value })}
            />
            <input
              type="date"
              value={newReport.date}
              readOnly // Current date set automatically
            />
            <select
              value={newReport.status}
              onChange={(e) => setNewReport({ ...newReport, status: e.target.value })}
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
            <input
              type="number"
              placeholder="Revenue"
              value={newReport.revenue}
              onChange={(e) => setNewReport({ ...newReport, revenue: parseFloat(e.target.value) })}
              style={{ color: "black" }}
            />
            <input
              type="number"
              placeholder="Expenditure"
              value={newReport.expenditure}
              onChange={(e) => setNewReport({ ...newReport, expenditure: parseFloat(e.target.value) })}
              style={{ color: "black" }}
            />
            <button className="submit-report-button" onClick={addNewReport}>
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FinancialReport;
