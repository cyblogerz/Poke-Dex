import React from 'react';
import { Box,Image,Heading,Text, Flex, Spacer, Divider, IconButton } from '@chakra-ui/react';
import { FaArrowRight,FaLeaf } from 'react-icons/fa';

function PokeCard(props) {
  
    return <Flex 

     transition={'transform 0.2s'}
    _hover={{
      transform: 'scale(1.05)'
    }}
    
    boxShadow={'1px 1px 10px cyan,1px 1px 10px cyan,1px 1px 10px cyan,1px 1px 40px cyan;'}
     flexDirection={'column'}  borderRadius={'10px'}  p={props.isCompact ?'30px' : '20px' }   >
    <Image 
    // boxSize={props.isNotTablet ? null : '300px'}
    boxSize={'70%'}
    mx={'auto'}
    // m={!props.isCompact ? (props.isNotTablet ? '10px' : '30px') : '20px'}
    // m={'20px/'}
    
    pb={'30px'}
    src={props.url} 
    fit={'contain'}
    borderRadius={'10px'}
    />
    {   !props.isCompact ?
    <Flex direction={'column'} height={'100%'}>
    <Divider />
    <Heading mt={'30px'} size={'md'} color={'cyan.400'}>{props.num}</Heading>
    <Heading size={'md'} mt={'10px'} pb={'20px'}>
      {props.name}
    </Heading>
    <Spacer />
    
    <Flex flexDirection={'row'} alignItems={'center'}>
    <IconButton 
    isRound={'true'}
    colorScheme={'green'}
      icon={<FaLeaf />}
      />
    <Spacer />
    <IconButton icon={<FaArrowRight/>} isRound={'true'}/>
    </Flex>
    </Flex> : null
    }
  </Flex>
}

export default PokeCard;
