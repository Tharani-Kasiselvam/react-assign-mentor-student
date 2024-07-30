import { useNavigate } from "react-router-dom";

const HomePage = () => {

const navigate = useNavigate()

    const handleMentorCreation = () => {
        navigate("/createMentor")
    }

    const handleStudentCreation = () => {
        navigate("/createStudent")
    }

  return (
    <div>
    <div className="home"><h1>Assign Mentor-Student</h1>
    <br />
    <div className="home-contents">
        <button id='nw-mntr-btn' onClick={handleMentorCreation}>Create a New Mentor</button>
        <button id='nw-stud-btn' onClick={handleStudentCreation}>Create a New Student</button>
        </div>
    </div>
</div>
  )
}

export default HomePage