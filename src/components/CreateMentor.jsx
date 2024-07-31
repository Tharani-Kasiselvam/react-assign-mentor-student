import { useFormik } from "formik"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import mentorStudService from "../services/mentorStudService";
import '../App.css'

import React from 'react'
import { useNavigate } from "react-router-dom";

const CreateMentor = () => {

    const navigate = useNavigate()

    const validate = (values) => {
        const errors = {}
    
        if(!values.mentor_id)
            errors.mentor_id = "Enter Mentor id"
    
        if(!values.mentor_name)
        errors.mentor_name = "Enter Mentor Name"
    
        return errors
    }
    
        const mentorFormik = useFormik({
            initialValues : {
                mentor_id : "",
                mentor_name : ""
            },
            validate,
            onSubmit : values => {
                const mentor_id = values.mentor_id
                const mentor_name = values.mentor_name
    
                //creates New Mentor
                mentorStudService.createMentor(mentor_id, mentor_name)
                .then(response=>{
                    toast.success(response.data.message)
                    mentorFormik.resetForm()
                })
                .catch(error =>{
                    toast.error(error.response.data.message)
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
        <form onSubmit={mentorFormik.handleSubmit}>
            <div className='new-mentor-box'><h1>Create New Mentor</h1>
                <div className='form-div'>
                <label htmlFor="mId" className='form-inputs'>Mentor Id</label>
                <input type="text"  placeholder="eg: MNTxxx" 
                id="mentor_id"
                {...mentorFormik.getFieldProps('mentor_id')}/>
                </div>
                {mentorFormik.errors.mentor_id ? <div style={error_style}>{mentorFormik.errors.mentor_id}</div> : null}
                <br />
                <div className='form-div'>
                <label htmlFor="mName" className='form-inputs'>Mentor Name</label>
                <input type="text"  placeholder="Enter Mentor Name"  
                id="mentor_name"
                {...mentorFormik.getFieldProps('mentor_name')}/>
            </div>
            {mentorFormik.errors.mentor_name ? <div style={error_style}>{mentorFormik.errors.mentor_name}</div> : null}
                <br />
                <button type="submit" className='btn btn-primary' id='form-btn'>Submit</button>
                <button type="button" className='btn btn-primary' id='form-btn' style={{marginLeft:"10px"}} onClick={handleGoBack}>Go Back</button>
            </div>
        </form>
        <ToastContainer position="top-center" className="p-3 text-align-center"/>
    </div>
  )
}

export default CreateMentor