import { useState } from "react";

function VolunteerForm()
{
    const [formValData, setFormValData] = useState({
        nameval: "",
        studentNumber: "",
        emailval: "",
        courseVal: "",
        skills: "",
        availability: "",
        reason: ""        
    });
    //set success and error message
    const[errors, setErrors] = useState({});
    const[successMsg, setSuccessMsg] = useState("");
    
    //handlesubmit
    const handleChangeSubmit = (e) => {
        setFormValData({
            ...formValData,
            [e.target.name]: e.target.value
        });

        setErrors({
            ...errors,
            [e.target.name]: ""
        });
        setSuccessMsg("");
    };

    //validation for the input
    const validateInputForm = () => {
        let newErrorVal = {};
        //name regex
        const nameValRegex = /^[A-Za-z\s]+$/;

        if(!formValData.nameval.trim()){
            newErrorVal.nameval = "Please enter the name";
        }
        else if(!nameValRegex.test(formValData.nameval)) {
            newErrorVal.nameval = "Please enter student number";
        }
        //student number regex
        const studentNumberValRegex = /^[0-9]{8,9}$/;

        if(!formValData.studentNumber.trim()) {
            newErrorVal.studentNumber = "Enter student number";
        }
        else if (!studentNumberValRegex.test(formValData.studentNumber)) {
            newErrorVal.studentNumber = "Enter valid student number";
        }
        //email regex
        const emailRegexVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!formValData.emailval.trim()){
            newErrorVal.emailval = "Please enter valid email";
        } else if (!emailRegexVal.test(formValData.emailval))
        {
            newErrorVal.emailval = "Please enter the valid email";
        }
        //Skill validation
        if(!formValData.courseVal.trim()) {
            newErrorVal.skills = "Enter the skills";
        }
        //Availability validation
        if(!formValData.availability.trim()) {
            newErrorVal.availability = "Enter your availability";
        }
        //Description validation
        if(!formValData.reason.trim()) {
            newErrorVal.reason = "Reason field is required";
        }
        return newErrorVal;
    };

    //handle form submit
    const handleFormSubmit = (val) => {
        val.preventDefault();

        const valErrors = validateInputForm();
        setErrors(valErrors);
        //if no errors then success
        if(Object.keys(valErrors).length === 0)
        {
            setSuccessMsg("Your response is submitted successfully");

            setFormValData({
                nameval: "",
                studentNumber: "",
                emailval: "",
                courseVal: "",
                skills: "",
                availability: "",
                reason: ""
            });
        }
    };

    return(
        <div className= "container mt-4">
            <h3 className="text-center">Student Volunteer Form - 2026</h3>
            <div className="row justify-content-center">
                <div className="card-body">
                    {successMsg && (
                        <div className="alert alert-success">{successMsg}</div>
                    )}
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" name="nameval" className="form-control"
                            value={formValData.nameval} onChange={handleChangeSubmit}
                            />
                            {errors.nameval && <div className="text-danger">{errors.nameval}</div>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Student Number</label>
                            <input type="number" name="studentNumber" placeholder="8-digits" className="form-control"
                            value={formValData.studentNumber} onChange={handleChangeSubmit}
                            />
                            {errors.studentNumber && <div className="text-danger">{errors.studentNumber}</div>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name="emailval" className="form-control"
                            value={formValData.emailval} onChange={handleChangeSubmit}
                            />
                            {errors.emailval && <div className="text-danger">{errors.emailval}</div>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Course</label>
                            <input type="text" name="courseVal" className="form-control"
                            value={formValData.courseVal} onChange={handleChangeSubmit}
                            />
                            {errors.courseVal && <div className="text-danger">{errors.courseVal}</div>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Skills</label>
                            <input type="text" name="skills" className="form-control"
                            value={formValData.skills} onChange={handleChangeSubmit}
                            />
                            {errors.skills && <div className="text-danger">{errors.skills}</div>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Availability</label>
                            <input type="text" name="availability" className="form-control"
                            value={formValData.availability} onChange={handleChangeSubmit}
                            />
                            {errors.availability && <div className="text-danger">{errors.availability}</div>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea rows="3" name="reason" className="form-control"
                            value={formValData.reason} onChange={handleChangeSubmit}
                            />
                            {errors.reason && <div className="text-danger">{errors.reason}</div>}
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default VolunteerForm;