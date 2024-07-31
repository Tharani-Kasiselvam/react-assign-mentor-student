import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import mentorStudService from "../services/mentorStudService"

const UpdateStudents = () => {
    const navigate = useNavigate()

    const validate = (values) => {
        const errors = {}
        if (!values.mentor_id)
            errors.mentor_id = "Enter Mentor Id"

        if (!values.stud_list)
            errors.stud_list = "eg:STD01,STD02"

        return errors
    }

    const updateStudFormik = useFormik({
        initialValues: {
            mentor_id: "",
            stud_list: ""
        },
        validate,
        onSubmit: values => {
            const students_list = values.stud_list.split(',')
            
            //Update Students for Mentor
            mentorStudService.updateStudents(values.mentor_id, students_list)
             .then(response => {
                toast.success(response.data.message)
                updateStudFormik.resetForm()
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
            <form onSubmit={updateStudFormik.handleSubmit}>
                <div className='updt-stud-box'><h1>Update Students for Mentor</h1>
                    <div className='form-div'>
                        <label htmlFor="mId" className='form-inputs'>Mentor Id</label>
                        <input type="text" placeholder="eg: MNTxxx"
                            id="mentor_id"
                            {...updateStudFormik.getFieldProps('mentor_id')} />
                    </div>
                    {updateStudFormik.errors.mentor_id ? <div style={error_style}>{updateStudFormik.errors.mentor_id}</div> : null}
                    <br />
                    <div className='form-div'>
                        <label htmlFor="sList" className='form-inputs'>Students Ids</label>
                        <input type="text" placeholder="eg: STDxxx,STDxxx"
                            id="stud_list"
                            {...updateStudFormik.getFieldProps('stud_list')} />
                    </div>
                    {updateStudFormik.errors.stud_list ? <div style={error_style}>{updateStudFormik.errors.stud_list}</div> : null}
                    <br />
                    <button type="submit" className='btn btn-primary' id='form-btn'>Submit</button>
                    <button type="button" className='btn btn-primary' id='form-btn' style={{ marginLeft: "10px" }} onClick={handleGoBack}>Go Back</button>
                </div>
            </form>
                <ToastContainer position="top-center" className="p-3 text-align-center" /> 
            </div>
  )
}

export default UpdateStudents