import { InputGroup,Input,IconButton,InputRightElement } from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchInput() {
    const [value, setValue] = React.useState('')
    const handleClick = () => {}
  
    return (
      <InputGroup size='md' pb={'15px'}>
        <Input
        variant='filled'
        onChange={()=>{setValue(
            value
        )}}
          pr='4.5rem'
          type='text'
          placeholder='Type to search'
          value={value}
        />
        <InputRightElement width='4.5rem'>
          <IconButton  size='sm' isRound={'true'} onClick={handleClick} icon={<FaSearch />} />
        </InputRightElement>
      </InputGroup>
    )
  }

  export default SearchInput;