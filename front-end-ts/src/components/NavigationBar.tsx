import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import {IoConstructOutline} from "react-icons/all";


export default function WithSubnavigation() {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{base: 2}}
                px={{base: 4}}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
            >
                <Flex
                    flex={{base: 1}} justify={{base: 'center', md: 'start'}}
                >

                     <Text
                         textAlign={useBreakpointValue({base: 'center', md: 'left'})}
                         fontFamily={'heading'}
                         fontSize='3xl'
                         as='b'
                         color={useColorModeValue('gray.800', 'white')}>
                         <IoConstructOutline />
                        Renovations Estimator
                    </Text>



                </Flex>
                <Stack direction={'row'} spacing={4}>

                    <Box>
                        <Popover trigger={'hover'} placement={'bottom-start'}>
                            <PopoverTrigger>
                                <Link
                                    p={2}
                                    fontSize={'md'}
                                    fontWeight={500}
                                    color={linkColor}
                                    _hover={{
                                        textDecoration: 'none',
                                        color: linkHoverColor,
                                    }}>
                                    Add New Project
                                </Link>
                            </PopoverTrigger>
                        </Popover>
                    </Box>
                </Stack>

            </Flex>
        </Box>
    )
};





