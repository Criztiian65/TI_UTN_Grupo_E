import { NewContext } from './components/provider/ProvContext'
import { Box, Text } from '@chakra-ui/react'
import TaskItem from './components/TaskItem'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {



  return (
    <Box>
      <TaskForm />
      <TaskList/>
      <Text >APP</Text>
    </Box>
  )
}

export default App
