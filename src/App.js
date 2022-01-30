import React from 'react';
import {FaBars,FaMoon,FaSun ,FaTimes} from 'react-icons/fa'
import {VStack,Flex,Heading,Stack,Spacer,Box,Button,useMediaQuery,IconButton,useDisclosure, useColorMode} from '@chakra-ui/react';
import Home from './pages/Home';
import MobileMenu from './components/MobileMenu';

function App() {
  const [isNotTablet]  = useMediaQuery("(min-width:991px)");
  const {colorMode , toggleColorMode} =  useColorMode();
  const {isOpen,onToggle} = useDisclosure();

  const isDark = colorMode === 'dark';
  return <VStack p={'0'}>
    <Flex  p={'5'}width={'100%'} zIndex={'2'} shadow={'lg'}  bg={isDark? 'hsl(220, 26%, 14%)' : 'white'} position={'fixed'}>
      <Heading size={"lg"} color={'cyan.400'} fontWeight={'400'}> Poké-Dex</Heading>
      <Spacer />
      {
        isNotTablet ? <Box>
        <Button colorScheme='gray' mr={8}>Home</Button>
        <Button colorScheme='gray' mr={8}>Pokemon</Button>
        <Button colorScheme={'gray'} mr={8}>About</Button>
        <IconButton isRound={'true'} colorScheme={'cyan'} onClick={toggleColorMode} icon={isDark ? <FaSun /> : <FaMoon />}/> </Box>
 :<Stack direction={'row'}> 
 <IconButton isRound={'true'} colorScheme={'cyan'} onClick={toggleColorMode} icon={isDark ? <FaSun /> : <FaMoon />} mr={'2'}/> 
 <IconButton onClick={onToggle} icon={!isOpen ? <FaBars /> : <FaTimes /> }isRound={'true'}/></Stack>
      }
    
    </Flex>
    {!isNotTablet && <MobileMenu isOpen={isOpen} />}
    <Home isNotTablet={isNotTablet} />
  </VStack>;
}

export default App;
