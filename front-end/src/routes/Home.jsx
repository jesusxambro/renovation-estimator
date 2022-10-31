import React from 'react';
import Project from "../components/Project.jsx";


function Home(props) {

    return(
        <div>
            Welcome!

            {props.list.map((project)=>{
                return(
                    <Project key={project.id} project={project}/>
                )
            })}

        </div>
    )
}

export default Home;