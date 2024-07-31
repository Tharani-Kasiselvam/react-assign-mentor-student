import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import mentorStudService from "../services/mentorStudService"

const UpdateMentor = () => {
    const navigate = useNavigate()

    const validate = (values) => {
        const errors = {}
        if (!values.student_id)
            errors.student_id = "Enter Student Id"

        if (!values.mentor_id)
            errors.mentor_id = "Enter Mentor Id"

        return errors
    }

    const updateMentorFormik = useFormik({
        initialValues: {
            student_id:"",
            mentor_id: ""
        },
        validate,
        onSubmit: values => {
            
            //Assign or Update Mentor for a Student
            mentorStudService.updateMentor(values.student_id, values.mentor_id)
             .then(response => {
                toast.success(response.data.message)
                updateMentorFormik.resetForm()
                 })
                 .catch(error => {
                     toast.error(error.response.data.message)
                 })
        }
    })

    const error_style = {
        color: "red"
    }

    const handleGoBack = () => {
        navigate("/")
    }
  return (
    <div>
            <form onSubmit={updateMentorFormik.handleSubmit}>
                <div className='updt-mntr-box'><h1>Update Mentor for a Student</h1>
                    <div className='form-div'>
                        <label htmlFor="stud_id_lbl" className='form-inputs'>Student Id</label>
                        <input type="text" placeholder="eg: STDxxx"
                            id="student_id"
                            {...updateMentorFormik.getFieldProps('student_id')} />
                    </div>
                    {updateMentorFormik.errors.student_id ? <div style={error_style}>{updateMentorFormik.errors.student_id}</div> : null}
                    <br />
                    <div className='form-div'>
                        <label htmlFor="mId" className='form-inputs'>Mentor Id</label>
                        <input type="text" placeholder="eg: MNTxxx"
                            id="mentor_id"
                            {...updateMentorFormik.getFieldProps('mentor_id')} />
                    </div>
                    {updateMentorFormik.errors.mentor_id ? <div style={error_style}>{updateMentorFormik.errors.mentor_id}</div> : null}
                    <br />
                    <button type="submit" className='btn btn-primary' id='form-btn'>Submit</button>
                    <button type="button" className='btn btn-primary' id='form-btn' style={{ marginLeft: "10px" }} onClick={handleGoBack}>Go Back</button>
                </div>
            </form>
                <ToastContainer position="top-center" className="p-3 text-align-center" /> 
            </div>
  )
}

export default UpdateMentor