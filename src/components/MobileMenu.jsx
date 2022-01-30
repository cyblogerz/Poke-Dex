import React from 'react';
import { Collapse ,Box, SimpleGrid,Button } from '@chakra-ui/react';

function MobileMenu(props) {
  return (
    <Collapse in={props.isOpen} animateOpacity >
    <Box
    

    position={'fixed'}
    zIndex={'1'}
    
    width={'100vw'}
    top={'5%'}
    left={'0'}
      p='40px'
      color='white'
      mt='4'
      bg='hsl(220, 26%, 14%)'
      rounded='md'
      shadow='lg'
    >
      <SimpleGrid columns={'2'} spacing={'10px'} >
          <Button colorScheme={'teal'}> Home </Button>
          <Button colorScheme={'teal'}>Pokemon</Button>
          <Button colorScheme={'teal'}>About</Button>
      </SimpleGrid>
    </Box>
  </Collapse>
  );
}

export default MobileMenu;
