import React from 'react';
import "./pokeCard.css"
import { Box,Image,Heading,Text, Flex, Spacer, Divider, IconButton } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

function PokeCard(props) {
    return <Flex className='pokeCard' flexDirection={'column'}  borderRadius={'10px'} shadow={'xl'} p={'20px'}  height={'65vh'} >
    <Image 
    boxSize={'200px'}
    ml={'40px'}
    pb={'30px'}
    src={props.url} 
    fit={'contain'}
    borderRadius={'10px'}
    />
    <Divider />
    <Heading mt={'30px'} size={'md'} color={'cyan.400'}>{props.num}</Heading>
    <Heading size={'md'} mt={'10px'} pb={'20px'}>
      {props.name}
    </Heading>
    <Spacer />
    <Flex flexDirection={'row'} alignItems={'center'}>
    <Box borderRadius={'10px'}  textAlign={'center'}
    bgColor={'green'} width={'25%'}><Text>{props.type}</Text></Box>
    <Spacer />
    <IconButton icon={<FaArrowRight/>} isRound={'true'}/>
    </Flex>
  </Flex>
}

export default PokeCard;
