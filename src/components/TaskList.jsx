import { useContext } from 'react'
import { NewContext } from './provider/ProvContext'
import { Box, Heading } from '@chakra-ui/react'

import TaskItem from './TaskItem'

const TaskList = () => {

    return (
        <Box border='2px'>
            <Heading>
                Task list
            </Heading>
            <TaskItem />
        </Box>
    )
}

export default TaskList