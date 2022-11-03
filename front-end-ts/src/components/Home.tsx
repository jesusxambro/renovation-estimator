import React, {useState} from 'react';
import {Project} from "../App";


interface HomeProps{
    list: Project[]
}

function Home(props:HomeProps){
    const [list, setList] = useState(props.list);

    return(
        <>
            I am the home page!
        </>
    )
}

export default Home;