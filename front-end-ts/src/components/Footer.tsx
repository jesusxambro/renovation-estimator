import {SmallCloseIcon, StarIcon} from "@chakra-ui/icons";
import {
    Box, Container, Image, Text, VStack,
} from "@chakra-ui/react";
import React from "react";


function Footer() {
    const property = {
        rating: 4,
    };



    return (
        <div >
            <VStack>
                <Container style={{
                    padding: "45px 0px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: "space-evenly"
                }} maxW='1090px' color='#262626'>

                    <Box>

                        <Text fontSize='2xl'>Hanydman's Renovations Estimator</Text>
                        {Array(5)
                            .fill("")
                            .map((_, i) => (
                                <StarIcon style={{width: "21px", height: "35px"}}
                                          key={i}
                                          color={i < property.rating ? "teal.500" : "gray.300"}
                                />
                            ))}

                        <Text fontSize="sm"> <span style={{fontWeight: "bold"}}>2,872</span> reviews </Text>
                        <div style={{display: "flex", alignItems: "center", width: "20px"}}>
                            <img src="https://cdn-icons-png.flaticon.com/512/20/20837.png" alt=""/>
                            <img src="https://cdn-icons-png.flaticon.com/512/717/717392.png" alt=""/>
                        </div>
                        <div style={{display: "flex", alignItems: "center", width: "250px", marginTop: "10px"}}>
                            {/* <Image src="https://www.freepnglogos.com/uploads/app-store-logo-png/download-on-the-app-store-logo-png-23.png"  alt=""/> */}
                            <Image
                                src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png"
                                alt=""/>
                        </div>
                        <div style={{lineHeight: "20px", marginTop: "15px"}}>
                            <Text><a href="">Learn about the Handyman's Renovations Estimator app for iPhone, iPad and Android.</a></Text>
                            <Text><a href="">© 2022 MVP</a></Text>
                        </div>
                    </Box>


                    <Box>
                        <Text fontSize='2xl'>Locations</Text>
                        <Text fontSize='md'>McHenry - IL</Text>
                        <Text fontSize='md'>Waukegan - IL</Text>

                    </Box>


                    <Box>
                        <Text fontSize='2xl'>HELP AND INFO</Text>
                        <Text fontSize="md">Help center</Text>
                        <Text fontSize="md">About us</Text>
                        <Text fontSize="md">Payments</Text>
                        <Text fontSize="md">Refund policy</Text>
                        <Text fontSize="md">Careers</Text>
                        <Text fontSize="md">Contact</Text>
                        <Text fontSize="md">Terms & conditions</Text>
                        <Text fontSize="md">Privacy & cookie policy</Text>
                    </Box>
                </Container>
            </VStack>


        </div>
    );
}

export default Footer;
