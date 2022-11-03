import React from 'react';
import { Project } from '../App';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';
import Image1 from '../assets/one-bathroom.jpg';
import Image2 from '../assets/two-bathroom.jpg';
import Image3 from '../assets/three-bathroom.jpg';
import {Link, useNavigate} from "react-router-dom";




interface ProjectsProps {
    project: Project
    key: number
}

function Projects(props: ProjectsProps){
    const imageArray = [Image1, Image2, Image3];
    let randomIndex = Math.floor(Math.random() * 3);
    const navigate = useNavigate();
    function handleClick() {

        navigate(`/bathrooms/${props.project.id}`)
    }

    return(
        <div>
            <Center py={6}>
                <Box
                    maxW={'445px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    sx={{':hover': {cursor: 'pointer',}}}
                    onClick={handleClick}
                    overflow={'hidden'}>
                    <Box
                        h={'210px'}
                        bg={'gray.100'}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={'relative'}>
                        <Image
                            src={
                                imageArray[randomIndex]
                            }
                            alt='a bathroom in remodel'
                            boxSize='full'
                        />
                    </Box>
                    <Stack>
                        <Text
                            color={'green.500'}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}>
                            ${props.project.total}
                        </Text>
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}>
                            {props.project.title}, Illinois
                        </Heading>
                        <Text color={'gray.500'}>
                            {props.project.description}
                        </Text>
                    </Stack>
                    <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                        <Avatar
                            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}

                        />
                        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                            <Text fontWeight={600}>{props.project.client_FirstName} {props.project.client_LastName}</Text>
                            <Text color={'gray.500'}>{props.project.projectDate} · Completed</Text>
                        </Stack>
                    </Stack>
                </Box>
            </Center>

        </div>

    )

}

export default Projects;