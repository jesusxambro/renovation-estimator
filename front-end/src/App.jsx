import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ResponsiveAppBar from "./components/ResponsiveAppBar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home.jsx";
import axios from "axios";
import ProjectDetail from "./components/ProjectDetail.jsx";

function App() {
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState({});


    async function getAllProjects() {
        try {
            const res = await axios.get("http://localhost:8080/bathrooms/");
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
                <Route path='details/:id' element={<ProjectDetail  /> }/>
            </Routes>
        </>

    )
}

export default App
