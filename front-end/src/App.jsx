import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ResponsiveAppBar from "./components/ResponsiveAppBar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home.jsx";
import axios from "axios";

function App() {
    const [projects, setProjects] = useState([]);


    async function getAllProjects() {
        try {
            const res = await axios.get("http://localhost:8080/bathrooms");
            setProjects(res.data);

        } catch (e) {
            console.log(e)
        }

    }
    useEffect(() =>{
        getAllProjects().then();

    }, [])


    return (
        <>
            <ResponsiveAppBar/>
            <Routes>

                <Route path='/' element={<Home list={projects}/>}/>

            </Routes>
        </>

    )
}

export default App
