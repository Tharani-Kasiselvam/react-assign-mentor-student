import { instance } from "./instance"

// define the mentor services
const mentorStudService = {
    // create a new Mentor
    createMentor: async (mentor_id, mentor_name) => {
        // make a POST request to the mentor endpoint
        return await instance.post('/createMentor', {
            mentor_id,
            mentor_name,
        })
    },
    // create a new Student
    createStudent: async (student_id, student_name) => {
        // make a POST request to the student endpoint
        return await instance.post('/createStudent', {
            student_id,
            student_name
        })
    },

    updateStudents: async (mId,stud_list) => {
        console.log("Inside Service:",mId, stud_list)
        return await instance.put('/updateStudentForMentor',
            {
                mentor_id : mId,
                students_list : stud_list
            }
        )
    },

    updateMentor: async (stud_id,mId) => {
        console.log("Inside Service:",mId, stud_id)
        return await instance.put('/updateMentorForStudent',
            {
                student_id : stud_id,
                mentor_id : mId,
            }
        )
    },

    getAllStudents: async (mentor_id) =>{
        console.log("INsdie service:", mentor_id)
        return await instance.get(`/showStudentsForMentor/${mentor_id}`)
    },

    getExMentor: async (student_id) =>{
        console.log("INsdie ex service:", student_id)
        return await instance.get(`/showExistingMentor/${student_id}`)
    }
}
export default mentorStudService