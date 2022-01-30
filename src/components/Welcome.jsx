import React from 'react';
import { Box, Flex, Heading ,Text} from '@chakra-ui/react';
import SearchInput from './SearchInput';

function Welcome(props) {
  return <Box bg={'#1a212d'} borderRadius={'10px'} position={'absolute'} p={'20px'}
  boxShadow={'1px 1px 10px cyan,1px 1px 10px purple,1px 1px 20px cyan,1px 1px 80px purple;'}

     left={'0'} right={'0'}
     top={'18%'}
     ml={'auto'} mr={'auto'}
     width={props.isNotTablet ? '50%' : '70%'}
  >
    <Flex direction={'column'} pb={'3rem'} >
      <Heading size={'3xl'} textAlign={'center'} pb={'15px'}
       fontWeight={'400'} bgGradient={'linear(to-r,purple,blue,)'} bgClip={'text'}      
      
      >PokéDex</Heading>
      <Text textAlign={'center'} bgGradient={'linear(to-r,cyan.400,blue.500,purple.600)'} bgClip={'text'}
      fontWeight={'400'}>A Hobby project by @cyblogerz</Text>
      </Flex>
     
      <SearchInput />
  </Box>;
}

export default Welcome;
