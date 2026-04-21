import { useState } from "react";
import "../css/App.css";

function VolunteerForm() {
  const [formValData, setFormValData] = useState({
    nameval: "",
    studentNumber: "",
    emailval: "",
    courseVal: "",
    skills: "",
    availability: "",
    reason: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const handleChangeSubmit = (e) => {
    setFormValData({ ...formValData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccessMsg("");
  };

  const validateInputForm = () => {
    let newErrorVal = {};
    const nameValRegex = /^[A-Za-z\s]+$/;

    if (!formValData.nameval.trim()) {
      newErrorVal.nameval = "Please enter your name";
    } else if (!nameValRegex.test(formValData.nameval)) {
      newErrorVal.nameval = "Name can only contain letters";
    }

    const studentNumberValRegex = /^[0-9]{8,9}$/;
    if (!formValData.studentNumber.trim()) {
      newErrorVal.studentNumber = "Enter student number";
    } else if (!studentNumberValRegex.test(formValData.studentNumber)) {
      newErrorVal.studentNumber = "Must be 8–9 digits";
    }

    const emailRegexVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValData.emailval.trim()) {
      newErrorVal.emailval = "Please enter your email";
    } else if (!emailRegexVal.test(formValData.emailval)) {
      newErrorVal.emailval = "Please enter a valid email";
    }

    if (!formValData.courseVal.trim()) {
      newErrorVal.courseVal = "Please enter your course";
    }

    if (!formValData.skills.trim()) {
      newErrorVal.skills = "Please enter your skills";
    }

    if (!formValData.availability.trim()) {
      newErrorVal.availability = "Please enter your availability";
    }

    if (!formValData.reason.trim()) {
      newErrorVal.reason = "Please enter a description";
    }

    return newErrorVal;
  };

  const handleFormSubmit = (val) => {
    val.preventDefault();
    const valErrors = validateInputForm();
    setErrors(valErrors);

    if (Object.keys(valErrors).length === 0) {
      setSuccessMsg("Your response has been submitted successfully!");
      setFormValData({
        nameval: "",
        studentNumber: "",
        emailval: "",
        courseVal: "",
        skills: "",
        availability: "",
        reason: "",
      });
    }
  };

  return (
    <div className="volunteer-page">
      <div className="volunteer-wrapper">

        <div className="volunteer-header">
          <h1>Student Volunteer Form</h1>
          <p>Apply to volunteer for the 2026 academic year.</p>
        </div>

        <div className="volunteer-card">
          {successMsg && (
            <div className="vol-success">{successMsg}</div>
          )}

          <form onSubmit={handleFormSubmit} noValidate>

            <div className="vol-field">
              <label>Name</label>
              <input
                type="text"
                name="nameval"
                className={errors.nameval ? "input-error" : ""}
                value={formValData.nameval}
                onChange={handleChangeSubmit}
                placeholder="Full name"
              />
              {errors.nameval && <div className="vol-error">{errors.nameval}</div>}
            </div>

            <div className="vol-field">
              <label>Student Number</label>
              <input
                type="text"
                name="studentNumber"
                className={errors.studentNumber ? "input-error" : ""}
                value={formValData.studentNumber}
                onChange={handleChangeSubmit}
                placeholder="8–9 digit number"
              />
              {errors.studentNumber && <div className="vol-error">{errors.studentNumber}</div>}
            </div>

            <div className="vol-field">
              <label>Email</label>
              <input
                type="email"
                name="emailval"
                className={errors.emailval ? "input-error" : ""}
                value={formValData.emailval}
                onChange={handleChangeSubmit}
                placeholder="you@example.com"
              />
              {errors.emailval && <div className="vol-error">{errors.emailval}</div>}
            </div>

            <div className="vol-field">
              <label>Course</label>
              <input
                type="text"
                name="courseVal"
                className={errors.courseVal ? "input-error" : ""}
                value={formValData.courseVal}
                onChange={handleChangeSubmit}
                placeholder="e.g. Computer Programming"
              />
              {errors.courseVal && <div className="vol-error">{errors.courseVal}</div>}
            </div>

            <div className="vol-field">
              <label>Skills</label>
              <input
                type="text"
                name="skills"
                className={errors.skills ? "input-error" : ""}
                value={formValData.skills}
                onChange={handleChangeSubmit}
                placeholder="e.g. React, communication, leadership"
              />
              {errors.skills && <div className="vol-error">{errors.skills}</div>}
            </div>

            <div className="vol-field">
              <label>Availability</label>
              <input
                type="text"
                name="availability"
                className={errors.availability ? "input-error" : ""}
                value={formValData.availability}
                onChange={handleChangeSubmit}
                placeholder="e.g. Weekdays 9am–5pm"
              />
              {errors.availability && <div className="vol-error">{errors.availability}</div>}
            </div>

            <div className="vol-field">
              <label>Description</label>
              <textarea
                rows="3"
                name="reason"
                className={errors.reason ? "input-error" : ""}
                value={formValData.reason}
                onChange={handleChangeSubmit}
                placeholder="Why do you want to volunteer?"
              />
              {errors.reason && <div className="vol-error">{errors.reason}</div>}
            </div>

            <button type="submit" className="vol-submit">
              Submit Application
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default VolunteerForm;