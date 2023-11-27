import { useContext } from 'react'
import { NewContext } from './provider/ProvContext'
import { Box, Button, Text, IconButton, Flex } from '@chakra-ui/react'
import { CheckIcon, CheckCircleIcon } from '@chakra-ui/icons'

const TaskItem = () => {

    const { listaTareas, handleDeleted, handleCompleted } = useContext(NewContext)

    return (

        <Box >
            {listaTareas.map((tarea) => {

                return (
                    <Flex key={tarea.id} border='1px'>

                        <Box>
                            <Box>
                                <CheckCircleIcon
                                    sx={{
                                        height: "20px",
                                        width: "20px",
                                        backgroundColor: tarea.completed ? "transparent" : "pink.300",
                                        color: tarea.completed ? "pink" : "white",
                                        borderRadius: "100%",
                                        cursor: "pointer",
                                    }}
                                onClick={()=>{handleCompleted(tarea.id)}} 
                                />
                                {/* {tarea.completed ? 
                                <IconButton
                                    colorScheme='pink'
                                    aria-label='Call Segun'
                                    isRound
                                    size='sm'
                                    icon={<CheckIcon />}
                                /> : 
                                <Box 
                                w='27px' 
                                borderRadius='full' 
                                p='3' border='2px' 
                                borderColor='pink' 
                                bgColor='white'> }*/}
                           
                        </Box>

                        <Text>{tarea.nombre}</Text>


                        <Button isDisabled={!tarea.completed} onClick={() => { handleDeleted(tarea.id) }}>Borrar</Button>
                    </Box>

                    </Flex>
    )
})}
        </Box >

    )
}

export default TaskItem