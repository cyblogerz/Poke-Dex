import React from 'react';
import PokeCard from '../../components/pokemon-card/pokeCard';
import { Image,Box, Heading,Container,Text, SimpleGrid} from '@chakra-ui/react';
import './home.css'
//'https://www.wallpaperup.com/uploads/wallpapers/2015/10/27/825565/a8f967ede1e1e41abc91787415e3b9ee.jpg'

export default function Home(props) {
  return( 
    
    <Box p={'0'} width={'100%'}>
      <Image width={'100%'} fit={'cover'} height={'100vh'} src={'https://www.wallpaperup.com/uploads/wallpapers/2015/10/27/825565/a8f967ede1e1e41abc91787415e3b9ee.jpg'}/>
      <Heading position={'absolute'} top={'20%'}>Poke-Dex</Heading>
      <Box height={'100vh'} width={'100%'} p={'100px'}>
      <Heading pt={'100px'} textAlign={'center'} mb={'100px'}>Pokemon Gallery</Heading>
      <SimpleGrid columns={'4'} spacingX={'30px'} width={'100%'} spacingY={'35px'}>
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
