import React from 'react';
import PokeCard from '../../components/pokemon-card/pokeCard';
import { Image,Box, Heading,Button,Stack, SimpleGrid, IconButton, Flex} from '@chakra-ui/react';
import './home.css'
import { FaArrowDown,FaBaseballBall } from 'react-icons/fa';
//'https://www.wallpaperup.com/uploads/wallpapers/2015/10/27/825565/a8f967ede1e1e41abc91787415e3b9ee.jpg'

export default function Home(props) {
  return( 
    
    <Box p={'0'} width={'100%'}>
      <Image width={'100%'} fit={'cover'} height={'90vh'} src={'https://www.wallpaperup.com/uploads/wallpapers/2015/10/27/825565/a8f967ede1e1e41abc91787415e3b9ee.jpg'}/>
    
      
      <Box height={'100vh'} width={'100%'} p={'100px'}>
      <Heading pt={'100px'} textAlign={'center'} mb={'70px'} 
      width={'50%'} mx={'auto'}
      bgGradient={'linear(to-r,cyan.400,blue.500,purple.600)'} bgClip={'text'}
      fontWeight={'400'}
      >POKÉMON GALLERY
</Heading>
      <Stack direction='row' spacing={'10'}  justifyContent={'center'} mb={'150px'}>
  <Button leftIcon={< FaBaseballBall/> } 
  bgGradient={'linear(to-r,cyan.400,blue.500,purple.600)'}
   variant='solid'>
    Normal
  </Button>
  <Button rightIcon={< FaBaseballBall/> }  color={'purple.600'} variant='outline'>
    Compact
  </Button>
</Stack>
      <SimpleGrid columns={'4'}  spacingX={'30px'}  spacing={'45px'}>
      <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
        name={'Bulbasaur'} num={'001'} type={'Green'}
      />
       <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
        name={'Bulbasaur'} num={'001'} type={'Green'}
      />
       <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
        name={'Bulbasaur'} num={'001'} type={'Green'}
      />
      <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
        name={'Bulbasaur'} num={'001'} type={'Green'}
      />
      <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
        name={'Bulbasaur'} num={'001'} type={'Green'}
      />
      <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
        name={'Bulbasaur'} num={'001'} type={'Green'}
      />
      <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
        name={'Bulbasaur'} num={'001'} type={'Green'}
      />
      <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
        name={'Bulbasaur'} num={'001'} type={'Green'}
      />
      <PokeCard url={'https://am1codes.github.io/Poke-Dex/images/Mega%20Charizard%20X.png' }
        name={'Bulbasaur'} num={'001'} type={'Green'}
      />


      </SimpleGrid>

    </Box>
    </Box>
    
    
  );
  
}
