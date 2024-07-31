import { createBrowserRouter, Link, RouterProvider } from "react-router-dom"
import HomePage from "./components/HomePage.jsx"
import CreateMentor from "./components/CreateMentor.jsx"
import CreateStudent from "./components/CreateStudent.jsx"
import UpdateStudents from "./components/UpdateStudents.jsx"
import UpdateMentor from "./components/UpdateMentor.jsx"

const router = createBrowserRouter([
    {
        path : "/",
        element : <HomePage />
    },
    {
        path : "/createMentor",
        element : <CreateMentor />
    },
    {
        path : "/createStudent",
        element : <CreateStudent />
    },
    {
        path : "/updateStudentForMentor",
        element : <UpdateStudents />
    },
    {
        path : "/updateMentorForStudent",
        element : <UpdateMentor />
    }
])

const App = () => {
  return <RouterProvider router = {router} />
}

export default App