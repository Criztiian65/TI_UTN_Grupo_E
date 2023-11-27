import { useContext } from "react";
import { NewContext } from "./provider/ProvContext";
import { Box, Button, Text, IconButton, Flex, Divider } from "@chakra-ui/react";
import { DeleteIcon, CheckCircleIcon } from "@chakra-ui/icons";

const TaskItem = () => {
  const { listaTareas, handleDeleted, handleCompleted } =
    useContext(NewContext);

  return (
    <Box>
      {listaTareas.map((tarea) => {
        return (
          <Flex
            key={tarea.id}
            w="full"
            m="15px"
            justifyContent="space-between"
            mx="20px"
          >
            <Box
              display="flex"
              alignItems="center"
              borderBottom="1px"
              borderColor="#F0F0F0"
              border
            >
              <Box>
                <CheckCircleIcon
                  mx="2"
                  mb="2"
                  sx={{
                    height: "20px",
                    width: "20px",
                    backgroundColor: tarea.completed
                      ? "transparent"
                      : "pink.300",
                    color: tarea.completed ? "pink" : "white",
                    borderRadius: "100%",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleCompleted(tarea.id);
                  }}
                />
              </Box>
              <Text wordBreak="break-word" me="2">
                {tarea.nombre}
              </Text>
              <DeleteIcon
                ml="14"
                isDisabled={!tarea.completed}
                onClick={() => {
                  handleDeleted(tarea.id);
                }}
              >
                Borrar
              </DeleteIcon>
            </Box>
          </Flex>
        );
      })}
    </Box>
  );
};

export default TaskItem;
