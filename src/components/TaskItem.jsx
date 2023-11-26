import { useContext } from 'react'
import { NewContext } from './provider/ProvContext'
import { Box, Button, Text, IconButton, Flex } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

const TaskItem = () => {

    const { listaTareas, nombre, completed, handleDeleted } = useContext(NewContext)

    return (

        <Box >
            {listaTareas.map((tarea) => {

                return (
                    <Flex border='1px'>

                        <Box>
                            <Box>
                                {tarea.completed ? <IconButton
                                    colorScheme='pink'
                                    aria-label='Call Segun'
                                    isRound
                                    size='sm'
                                    icon={<CheckIcon />}
                                /> : 'incompleto'}
                            </Box>

                            <Text>{tarea.nombre}</Text>


                            <Button id={tarea.id} onClick={handleDeleted}>Borrar</Button>
                        </Box>

                    </Flex>
                )
            })}
        </Box>

    )
}

export default TaskItem