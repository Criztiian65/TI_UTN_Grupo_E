import { Box, Text, Badge } from '@chakra-ui/react'
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
