import React from 'react';
import { Box, Flex, Heading ,Text} from '@chakra-ui/react';
import SearchInput from './SearchInput';

function Welcome(props) {
  return <Box bg={'#1a212d'} borderRadius={'10px'} position={'absolute'} p={'20px'}
  boxShadow={'1px 1px 10px cyan,1px 1px 10px cyan,1px 1px 20px cyan,1px 1px 40px cyan;'}

     left={'0'} right={'0'}
     top={'18%'}
     ml={'auto'} mr={'auto'}
     width={props.isNotTablet ? '50%' : '70%'}
  >
    <Flex direction={'column'} pb={'3rem'} >
      <Heading size={'3xl'} textAlign={'center'} pb={'15px'}
       fontWeight={'400'}
      
      >PokéDex</Heading>
      <Text textAlign={'center'}>A Hobby project by @cyblogerz</Text>
      </Flex>
     
      <SearchInput />
  </Box>;
}

export default Welcome;
