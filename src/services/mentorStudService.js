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
            student_name,
        })
},
}
export default mentorStudService