import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios";
import WithSubnavigation from "./components/NavigationBar";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";

export interface Project {
    id: number
    title: string
    length: number
    height: number
    client_FirstName: string
    client_LastName: string
    projectDate: string
    total: number
    vanity: boolean
    vanity_Comments: string
    tub: boolean
    tub_Comments: string
    sink: boolean
    sink_Comments: string
    toilet: boolean
    toilet_Comments: string
    description: string
}

function App() {
    const [projects, setProjects] = useState<Project[]>([]);

    async function getAllProjects() {
        try{
            const result = await axios.get('http://localhost:8080/bathrooms/');
            setProjects(result.data);

        }catch (e) {
            console.log(e)
        }
    }

    useEffect(() =>{
        getAllProjects().then();
    },[])

  return (
      <div>
          <WithSubnavigation/>
            <Routes>
                <Route path='/' element={<Home list={projects}/>}/>
            </Routes>

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
