import { useNavigate } from "react-router-dom";
import mentorStudService from "../services/mentorStudService";
import { useState } from "react";

const HomePage = () => {

    const [studList, setStudList] = useState()
    const [studContent, setStudContent] = useState("")

    const [mntrName, setMntrName] = useState("")
    const [mntrContent, setMntrContent] = useState("")


const navigate = useNavigate()

    const handleMentorCreation = () => {
        navigate("/createMentor")
    }

    const handleStudentCreation = () => {
        navigate("/createStudent")
    }

    const handleStudentUpdate = () => {
        navigate("/updateStudentForMentor")
    }

    const handleMentorUpdate = () => {
        navigate("/updateMentorForStudent")
    }

    const handleShowStudents = (e) => {
        e.preventDefault()
        console.log(e)
        setStudList("")
        setStudContent("")
        setMntrName("")
        setMntrContent("")

        const mentor_id = e.target[0].value
        const student_id = e.target[2].value

        if(mentor_id!=""){
            e.target[2].disabled=true
            e.target[3].disabled=true
        console.log("Mentor ID:", mentor_id)

        //Get Students List for the Mentor
        mentorStudService.getAllStudents(mentor_id)
        .then(response => {
            console.log(response.data.message,response.data.mentor_id,response.data.mentor_name,response.data.students_name)
            setStudContent(response.data.message+response.data.mentor_id+" - "+response.data.mentor_name)
            if(response.data.students_name){
            const stud_list = (response.data.students_name).join(',')
            setStudList(stud_list)
            }
            e.target[0].value = ""
             }).catch(error => {
                console.log(error.response.data.message)
                setStudContent(error.response.data.message)
            })
        }
        else{
            e.target[0].disabled=true
            e.target[1].disabled=true
        console.log("Student ID:", student_id)

        //Get Previous Mentor tagged for the student
        mentorStudService.getExMentor(student_id)
        .then(response => {
           console.log(response.data.message,response.data.student_id,response.data.student_name,response.data.ex_mentor_id,response.data.ex_mentor_name)
           setMntrContent(response.data.message+response.data.student_id+" - "+response.data.student_name)
           if(response.data.ex_mentor_id){
                const mentorName = response.data.ex_mentor_id+" - "+response.data.ex_mentor_name
                setMntrName(mentorName)
            }
           e.target[2].value = ""
            })
            .catch(error => {
                console.log(error.response.data.message)
                setMntrContent(error.response.data.message)
            })
        }
    }


  return (
    <div>
    <div className="home"><h1>Assign Mentor-Student</h1>
    <br />
    <div className="home-contents">
        <button id='nw-mntr-btn' onClick={handleMentorCreation}>Create a New Mentor</button>
        <button id='nw-stud-btn' onClick={handleStudentCreation}>Create a New Student</button>
        <button id='updt-stud-btn' onClick={handleStudentUpdate} style={{fontSize:"13px"}}>Update Students for Mentor</button>
        <button id='updt-mntr-btn' onClick={handleMentorUpdate} style={{fontSize:"13px"}}>Update Mentor for a Student</button>
        <form onSubmit={handleShowStudents}>
        <input type="text" id="cmn-txt" placeholder="Enter Mentor id eg: MNTxxx"
        /> 
        <button type='submit' id="studList_btn" style={{fontSize:"13px"}}>Get Students List</button>
        <br/> 
        <div className="students_list" style={{fontSize:"13px"}}>
        <p className="card-body">{studContent}</p>
        <p className="card-text">{studList}</p>
        </div>
        <br />
        <input type="text" id="cmn-txt" placeholder="Enter Student id eg: STDxxx"
        /> 
        <button type="submit" id="prevMntr_btn" style={{fontSize:"13px"}}>Get Previous Mentor</button>
        <br />
        <div className="ex_mentor_info" style={{fontSize:"13px"}}>
        <p className="card-body">{mntrContent}</p>
        <p className="card-text">{mntrName}</p>
        </div>
        </form>

        </div>
    </div>
</div>
  )
}

export default HomePage