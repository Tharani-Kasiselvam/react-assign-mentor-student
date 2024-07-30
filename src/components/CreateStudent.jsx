import { useFormik } from "formik"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import mentorStudService from "../services/mentorStudService";

const CreateStudent = () => {

    const navigate = useNavigate()

    const validate = (values) => {
        const errors = {}
    
        if(!values.student_id)
            errors.student_id = "Enter Student Id"
    
        if(!values.student_name)
        errors.student_name = "Enter Student Name"
    
        return errors
    }

    const studentFormik = useFormik({
        initialValues : {
            student_id : "",
            student_name : ""
        },
        validate,
        onSubmit : values => {
            console.log(values.student_id)
            const student_id = values.student_id
            const student_name = values.student_name

            //creates New Student
            mentorStudService.createStudent(student_id, student_name)
            .then(response=>{
                toast.success(response.data.message)
                studentFormik.resetForm()
            })
            .catch(error =>{
                console.log(error.response.data.message)
            })
        }
    })

    const error_style = {
        color : "red"
    }
    
    const handleGoBack = () => {
        navigate("/")
    }

  return (
    <div>
<form onSubmit={studentFormik.handleSubmit}>
            <div className='new-stud-box'><h1>Create New Student</h1>
                <div className='form-div'>
                <label htmlFor="sId" className='form-inputs'>Student Id</label>
                <input type="text"  placeholder="eg: STDxxx" 
                id="student_id"
                {...studentFormik.getFieldProps('student_id')}/>
                </div>
                {studentFormik.errors.student_id ? <div style={error_style}>{studentFormik.errors.student_id}</div> : null}
                <br />
                <div className='form-div'>
                <label htmlFor="sName" className='form-inputs'>Student Name</label>
                <input type="text"  placeholder="Enter Student Name"  
                id="student_name"
                {...studentFormik.getFieldProps('student_name')}/>
            </div>
            {studentFormik.errors.student_name ? <div style={error_style}>{studentFormik.errors.student_name}</div> : null}
                <br />
                <button type="submit" className='btn btn-primary' id='form-btn'>Submit</button>
                <button type="button" className='btn btn-primary' id='form-btn' style={{marginLeft:"10px"}} onClick={handleGoBack}>Go Back</button>
            </div>
        </form>
        <ToastContainer position="top-center" className="p-3 text-align-center"/>    </div>
  )
}

export default CreateStudent