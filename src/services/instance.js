import axios from 'axios'

// define the base url for the API
const baseURL = 'https://node-assign-mentor-vqus.onrender.com';

    // create an axios instance
    const instance = axios.create({
        baseURL,
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json',
        },
    })

    export { instance}    