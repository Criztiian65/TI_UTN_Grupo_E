import { useContext } from 'react'
import {Box, FormLabel, IconButton, Input} from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'
import { NewContext } from './provider/ProvContext'

const TaskForm = () => {

    const {handleChange, handleSubmit,tarea } = useContext(NewContext)

  return (
    <Box>
        <form onSubmit={handleSubmit}>

        <FormLabel name='textTarea' >Label task form</FormLabel>
        <Input type='text' name='textTarea' onChange={handleChange}/>
        <IconButton onClick={handleSubmit} icon={<AddIcon/>}></IconButton>

        </form>
    </Box>
  )
}

export default TaskForm