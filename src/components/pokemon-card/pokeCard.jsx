import React from 'react';
import "./pokeCard.css"
import { Box,Image,Heading,Text } from '@chakra-ui/react';

function PokeCard(props) {
    return <Box borderRadius={'10px'} shadow={'xl'} p={'20px'} border={'1px'} height={'50vh'}>
    <Image 
    pb={'30px'}
    src={props.url} 
    fit={'contain'}
    borderRadius={'10px'}
    />
    <Heading size={'md'}>{props.num}</Heading>
    <Heading size={'md'} pb={'20px'}>
      {props.name}
    </Heading>
    <Box borderRadius={'10px'} pl={'10px'} bgColor={'green'} ><Text>{props.type}</Text></Box>
  </Box>
}

export default PokeCard;
