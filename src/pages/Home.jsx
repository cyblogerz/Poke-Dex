import React, { useState } from 'react';
import PokeCard from '../components/pokeCard';
import { Image,Box, Heading,Button,Stack, SimpleGrid, Spacer, Divider} from '@chakra-ui/react';
import { FaArrowDown,FaBaseballBall } from 'react-icons/fa';
import Welcome from '../components/Welcome';

export default function Home(props) {
  const [isCompact , setCompact] = useState(false)
  return( 
    <Box p={'0'}  m={'0'} >

      <Box width={'100%'} 
       height={'100vh'} 
      

      />
      <Welcome isNotTablet={props.isNotTablet} />
    
      <Divider />
      <Box height={'100vh'} width={'100%'} >
      <Heading pt={'100px'} textAlign={'center'} mb={'70px'} 
      width={'50%'} mx={'auto'}
      bgGradient={'linear(to-r,cyan.400,blue.500,purple.600)'} bgClip={'text'}
      fontWeight={'400'}
      >POKÉMON GALLERY
</Heading>
      <Stack direction='row' spacing={'10'}  justifyContent={'center'} mb={'150px'}>
  <Button 
  onClick={()=>{
    setCompact(
      false
    );
  }}
  leftIcon={< FaBaseballBall/> } 
  bgGradient={'linear(to-r,cyan.400,blue.500,purple.600)'}
   variant='solid'>
    Normal
  </Button>
  <Button onClick={()=>{
    setCompact(
      true
    );
  }} rightIcon={< FaBaseballBall/> }  color={'purple.600'} variant='outline'>
    Compact
  </Button>
</Stack>

      <SimpleGrid columns={isCompact ? (props.isNotTablet ? '6' : '2' ) : (props.isNotTablet ? '4' : '1' )} 
      pb={'100px'}  px={'5%'}
       spacingX={'50px'}  spacingY={'60px'}>
      <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
      isCompact={isCompact} 
        name={'Bulbasaur'} num={'001'} type={'Green'}
      />
       <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
       isCompact={isCompact}
        name={'Bulbasaur'} num={'001'} type={'Green'}
      />
       <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
       isCompact={isCompact}
        name={'Bulbasaur'} num={'001'} type={'Green'}
      />
      <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
      isCompact={isCompact}
        name={'Bulbasaur'} num={'001'} type={'Green'}
      />
      <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
      isCompact={isCompact}
        name={'Bulbasaur'} num={'001'} type={'Green'}
      />
      <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
      isCompact={isCompact}
        name={'Bulbasaur'} num={'001'} type={'Green'}
      />
      <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
        name={'Bulbasaur'} num={'001'} type={'Green'} isCompact={isCompact}
      />
      <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
      isCompact={isCompact}
        name={'Bulbasaur'} num={'001'} type={'Green'}
      />
      <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
      isCompact={isCompact}
        name={'Bulbasaur'} num={'001'} type={'Green'}
      />

   

      </SimpleGrid>
      
      <Button display={'block'} marginX={'auto'}  bgGradient={'linear(to-r,cyan.400,blue.500,purple.600)'}
     
      >View more</Button>
      <Spacer height={'50px'} />


    </Box>
    
    
    
    </Box>
    
    
  );
  
}
