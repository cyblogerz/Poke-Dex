import React from 'react';
import {FaBars,FaMoon,FaSun} from 'react-icons/fa'
import {VStack,Flex,Heading,Spacer,Box,Button,useMediaQuery,IconButton, useColorMode} from '@chakra-ui/react';
import Home from './pages/home/Home'

function App() {
  const [isNotTablet]  = useMediaQuery("(min-width:600px)");
  const {colorMode , toggleColorMode} =  useColorMode();
  const isDark = colorMode === 'dark';
  return <VStack p={'0'}>
    <Flex  p={'5'}width={'100%'} zIndex={'2'} shadow={'lg'}  bg={isDark? 'hsl(220, 26%, 14%)' : 'white'} position={'fixed'}>
      <Heading size={"lg"} color={'cyan.400'} fontWeight={'400'}> Poké-Dex</Heading>
      <Spacer />
      {
        isNotTablet ? <Box>
        <Button colorScheme='gray' mr={8}>Home</Button>
        <Button colorScheme='gray' mr={8}>Pokemon</Button>
        <Button colorScheme={'gray'}mr={8}>About</Button>
        <IconButton isRound={'true'} colorScheme={'cyan'} onClick={toggleColorMode} icon={isDark ? <FaSun /> : <FaMoon />}/> </Box>
 : <IconButton icon={<FaBars />}isRound={'true'}/>
      }
    
    </Flex>
    <Home />
  </VStack>;
}

export default App;
