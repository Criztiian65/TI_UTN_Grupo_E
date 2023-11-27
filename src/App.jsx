import { Text, HStack, Flex, Box } from "@chakra-ui/react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <HStack
      w="full"
      h="100vh"
      alignItems="center"
      flexDirection="column"
      p="10px"
      bg="#E69696"
    >
      <Box mt="20" boxShadow="dark-lg" rounded="md" p="1">
        <Flex w="35vh" flexDirection="column" bg="white">
          <TaskForm />
          <TaskList />
        </Flex>
      </Box>
    </HStack>
  );
}

export default App;
