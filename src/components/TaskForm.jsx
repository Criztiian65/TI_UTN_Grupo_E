import { useContext } from 'react'
import {Box, FormLabel, IconButton, Input} from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'
import { NewContext } from './provider/ProvContext'

const TaskForm = () => {

    const {handleChange, handleSubmit} = useContext(NewContext)

  return (
    <Box>
        <FormLabel>Label task form</FormLabel>
        <Input onSubmit={handleSubmit} onChange={handleChange}/>
        <IconButton icon={<AddIcon/>}></IconButton>
    </Box>
  )
}

export default TaskForm