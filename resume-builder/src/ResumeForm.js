import React, { useState } from 'react';
import './ResumeForm.css'; // Create this CSS file later

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    professionalSummary: '',
    education: '',
    skills: '',
    careerObjective: '',
    experience: '',
    achievements: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      professionalSummary: '',
      education: '',
      skills: '',
      careerObjective: '',
      experience: '',
      achievements: '',
    });
  };

  return (
    <div className="resume-form-container">
      <h2>Resume Builder</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Professional Summary</label>
          <textarea 
            name="professionalSummary" 
            value={formData.professionalSummary} 
            onChange={handleInputChange} 
            required
          />
        </div>

        <div className="form-field">
          <label>Education Qualifications</label>
          <input 
            type="text" 
            name="education" 
            value={formData.education} 
            onChange={handleInputChange} 
            required
          />
        </div>

        <div className="form-field">
          <label>Skills</label>
          <input 
            type="text" 
            name="skills" 
            value={formData.skills} 
            onChange={handleInputChange} 
            required
          />
        </div>

        <div className="form-field">
          <label>Career Objective</label>
          <input 
            type="text" 
            name="careerObjective" 
            value={formData.careerObjective} 
            onChange={handleInputChange} 
            required
          />
        </div>

        <div className="form-field">
          <label>Experience and Internships</label>
          <input 
            type="text" 
            name="experience" 
            value={formData.experience} 
            onChange={handleInputChange} 
            required
          />
        </div>

        <div className="form-field">
          <label>Skills and Achievements</label>
          <input 
            type="text" 
            name="achievements" 
            value={formData.achievements} 
            onChange={handleInputChange} 
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Resume:</h3>
          <p><strong>Professional Summary:</strong> {submittedData.professionalSummary}</p>
          <p><strong>Education Qualifications:</strong> {submittedData.education}</p>
          <p><strong>Skills:</strong> {submittedData.skills}</p>
          <p><strong>Career Objective:</strong> {submittedData.careerObjective}</p>
          <p><strong>Experience and Internships:</strong> {submittedData.experience}</p>
          <p><strong>Skills and Achievements:</strong> {submittedData.achievements}</p>
        </div>
      )}
    </div>
  );
};

export default ResumeForm;
