import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios";
import WithSubnavigation from "./components/NavigationBar";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";
import {z} from "zod";
import EditProject from "./components/EditProject";
import Splash from "./components/Splash";
import Footer from "./components/Footer";
import {Button} from "@chakra-ui/react";
import {SmallCloseIcon} from "@chakra-ui/icons";
import AddNew from "./components/AddNew";


export const ProjectData = z.object(
    {
        id: z.number().min(1),
        title: z.string().min(1),
        length: z.number(),
        height: z.number(),
        client_FirstName: z.string().min(1),
        client_LastName: z.string().min(1),
        projectDate: z.string().min(1),
        total: z.number(),
        vanity: z.boolean(),
        vanity_Comments: z.string().min(1),
        tub: z.boolean(),
        tub_Comments: z.string().min(1),
        sink: z.boolean(),
        sink_Comments: z.string().min(1),
        toilet: z.boolean(),
        toilet_Comments: z.string().min(1),
        description: z.string().min(1),
        address: z.string().min(1),
        zipCode: z.number(),
        city: z.string().min(1),
        state: z.string().min(1),

    }
)
export type Project = z.infer<typeof ProjectData>

function App() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project>();
    const [isFooterOpen, setIsFooterOpen] = useState(true);

    async function getAllProjects() {
        try {
            const result = await axios.get('http://localhost:8080/bathrooms/');
            setProjects(result.data);

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getAllProjects().then();
    }, [])

    return (
        <div>
            <WithSubnavigation/>
            <Routes>
                <Route path='/' element={<Splash/>}/>
                <Route path='/bathrooms' element={<Home list={projects}/>}/>
                <Route path='/bathrooms/:id' element={<ProjectDetail/>}/>
                <Route path='/bathrooms/:id/edit' element={<EditProject/>}/>
                <Route path='/bathrooms/new' element={<AddNew/>}/>

            </Routes>
                <Footer />



        </div>
        // <div className="App">
        //   <div>
        //     <a href="https://vitejs.dev" target="_blank">
        //       <img src="/vite.svg" className="logo" alt="Vite logo" />
        //     </a>
        //     <a href="https://reactjs.org" target="_blank">
        //       <img src={reactLogo} className="logo react" alt="React logo" />
        //     </a>
        //   </div>
        //   <h1>Vite + React</h1>
        //   <div className="card">
        //     <button onClick={() => setCount((count) => count + 1)}>
        //       count is {count}
        //     </button>
        //     <p>
        //       Edit <code>src/App.tsx</code> and save to test HMR
        //     </p>
        //   </div>
        //   <p className="read-the-docs">
        //     Click on the Vite and React logos to learn more
        //   </p>
        // </div>
    )
}

export default App
