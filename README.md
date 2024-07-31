# Assign Mentor-Students System

***Introduction:***
-A Home Page is designed to below modules:   
&emsp;- Create a New Mentor      
&emsp;- Create a New Student   
&emsp;- Update Students for a Mentor   
&emsp;- Update Mentor for a Student   
&emsp;- Get Student List for a Mentor   
&emsp;- Get Existing Mentor for a Student   
- The data are loaded into a Component with Submit and Go Back Button.   
- OnSubmit, the data are saved into the MONGODB via entry point.   
- with Axios, baseUrl is linked with the backend to perform the relevant operations.      
- Go Back will route to the Home Page.   
- Routers are enabled via *BrowserRouter* from reat-router-dom.   
- Service files are configured to link with the backend Countrollers to perform DB operations.   
- Get Student List and Get Existing Mentor List are framed to load within the Home Page. Any one of the options will be enabled to execute an perform the necessary task.   

***Functionality:***
- Axios CRUD operation performed:   
&emsp; a. **CREATE** - on click of *Create a New Mentor/Student* Button a Form will be displyed to keyin new user details. On clicking *Submit* button, data will be loaded via entry point using axios **POST** method.   
&emsp; b. **READ** - From home page, we are getting all Student Details/Existing Mentor Details and loading the data from entrypoint using axios **GET** method.
&emsp; c. **UPDATE** - Update Students/Mentor features are used to modify the details of specific Student/Mentor. Modifed data will be updated using axios **PUT** method.   
   
-Formik is used to capture the Form Data.   
   
-Toast is used to populate the response received from the entrypoint

**Author : Tharani K**