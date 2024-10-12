import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './_academic_calender_02.css'; // Import the CSS file for styling

function AcademicCalendar() {
  const [academicCalendar, setAcademicCalendar] = useState([
    {
      academicYear: '2023-2024',
      semester: 'Fall',
      startDate: '2023-08-15',
      endDate: '2023-12-15',
      examStartDate: '2023-12-20',
      examEndDate: '2023-12-30',
      holidays: [
        { name: 'Diwali', reason: 'Festival', date: '2023-11-12' },
        { name: 'Christmas', reason: 'Holiday', date: '2023-12-25' },
      ],
    },
    {
      academicYear: '2024-2025',
      semester: 'Spring',
      startDate: '2024-01-15',
      endDate: '2024-05-15',
      examStartDate: '2024-05-20',
      examEndDate: '2024-05-30',
      holidays: [],
    },
  ]);
  const [newRecord, setNewRecord] = useState({
    academicYear: '',
    semester: '',
    startDate: '',
    endDate: '',
    examStartDate: '',
    examEndDate: '',
    holidays: [],
  });
  const [holidayDetails, setHolidayDetails] = useState({
    name: '',
    reason: '',
    date: '',
  });
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate(); // Create navigate function for routing

  // Handle adding a new record
  const handleAddRecord = (e) => {
    e.preventDefault();
    setAcademicCalendar([...academicCalendar, { ...newRecord }]);
    setNewRecord({
      academicYear: '',
      semester: '',
      startDate: '',
      endDate: '',
      examStartDate: '',
      examEndDate: '',
      holidays: [],
    });
    setShowForm(false);
  };

  // Handle adding a holiday
  const handleAddHoliday = (e) => {
    e.preventDefault();
    if (holidayDetails.name && holidayDetails.reason && holidayDetails.date) {
      const updatedHolidays = [...newRecord.holidays, holidayDetails];
      setNewRecord({ ...newRecord, holidays: updatedHolidays });
      setHolidayDetails({ name: '', reason: '', date: '' }); // Clear holiday input fields
    }
  };

  // Toggle form visibility
  const toggleFormVisibility = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="academic-calendar-container">
      <div className="card" style={{ backgroundColor: '#15172b', position: 'relative' }}>
        <div className="card-header">
          <h2 style={{ textAlign: 'center', color: 'white' }}>Academic Calendar</h2>
          <button
            className="close-icon"
            style={{ backgroundColor: 'red', position: 'absolute', top: '10px', right: '10px' }}
            onClick={() => navigate(-1)} // Route back to the previous page when the close button is clicked
          >
            ✖
          </button>
        </div>

        {showForm ? (
          <form onSubmit={handleAddRecord} className="add-academic-form" style={{ width: '100%' }}>
            <input
              type="text"
              placeholder="Academic Year (e.g., 2024-2025)"
              value={newRecord.academicYear}
              onChange={(e) => setNewRecord({ ...newRecord, academicYear: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Semester (e.g., Fall, Spring)"
              value={newRecord.semester}
              onChange={(e) => setNewRecord({ ...newRecord, semester: e.target.value })}
              required
            />
            <label>Start Date</label>
            <input
              type="date"
              value={newRecord.startDate}
              onChange={(e) => setNewRecord({ ...newRecord, startDate: e.target.value })}
              required
            />
            <label>End Date</label>
            <input
              type="date"
              value={newRecord.endDate}
              onChange={(e) => setNewRecord({ ...newRecord, endDate: e.target.value })}
              required
            />
            <label>Exam Start Date</label>
            <input
              type="date"
              value={newRecord.examStartDate}
              onChange={(e) => setNewRecord({ ...newRecord, examStartDate: e.target.value })}
              required
            />
            <label>Exam End Date</label>
            <input
              type="date"
              value={newRecord.examEndDate}
              onChange={(e) => setNewRecord({ ...newRecord, examEndDate: e.target.value })}
              required
            />

            {/* Holiday Input Section */}
            <h3>Add Holidays</h3>
            <input
              type="text"
              placeholder="Holiday Name"
              value={holidayDetails.name}
              onChange={(e) => setHolidayDetails({ ...holidayDetails, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Reason"
              value={holidayDetails.reason}
              onChange={(e) => setHolidayDetails({ ...holidayDetails, reason: e.target.value })}
            />
            <input
              type="date"
              value={holidayDetails.date}
              onChange={(e) => setHolidayDetails({ ...holidayDetails, date: e.target.value })}
            />
            <button type="button" onClick={handleAddHoliday}>
              Add Holiday
            </button>

            <button type="submit" className="submit-button">
              Add Record
            </button>
          </form>
        ) : (
          <table className="academic-calendar-table">
            <thead>
              <tr>
                <th>Academic Year</th>
                <th>Semester</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Exam Start Date</th>
                <th>Exam End Date</th>
                <th>Holidays</th>
              </tr>
            </thead>
            <tbody>
              {academicCalendar.map((record, index) => (
                <tr key={index}>
                  <td>{record.academicYear}</td>
                  <td>{record.semester}</td>
                  <td>{record.startDate}</td>
                  <td>{record.endDate}</td>
                  <td>{record.examStartDate}</td>
                  <td>{record.examEndDate}</td>
                  <td>
                    {record.holidays.length > 0 ? (
                      <ul className="holiday-list">
                        {record.holidays.map((holiday, i) => (
                          <li key={i}>
                            <strong>{holiday.name}</strong>: {holiday.reason} on {holiday.date}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No holidays added.</p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <button className="toggle-form-button" onClick={toggleFormVisibility}>
          {showForm ? 'Close Form' : 'Add Academic Year Details'}
        </button>
      </div>
    </div>
  );
}

export default AcademicCalendar;
