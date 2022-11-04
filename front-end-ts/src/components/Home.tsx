import React, {useState} from 'react';
import {Project} from "../App";
import Projects from "./Projects";
import {Box, SimpleGrid} from "@chakra-ui/react";



interface HomeProps{
    list: Project[]
}

function Home(props:HomeProps){


    return(
        <div>
            <SimpleGrid columns={3} spacing={5} mx={4}>
                {props.list.length > 0?
                    props.list.map((project,index)=>{
                        return(
                            <Box key={index}>
                                <Projects key={index} project={project}/>
                            </Box>
                        )
                    })
                    :
                    <h1>No Current Projects!</h1>
                }
            </SimpleGrid>

        </div>
    )
}

export default Home;