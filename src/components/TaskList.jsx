import { useContext } from "react";
import { NewContext } from "./provider/ProvContext";
import { Box, Heading } from "@chakra-ui/react";

import TaskItem from "./TaskItem";

const TaskList = () => {
  return (
    <Box maxW="30vh">
      <TaskItem />
    </Box>
  );
};

export default TaskList;
