import { useContext } from "react";
import {
  Box,
  Flex,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { NewContext } from "./provider/ProvContext";

const TaskForm = () => {
  const { handleChange, handleSubmit, tarea } = useContext(NewContext);

  return (
    <Flex>
      <form onSubmit={handleSubmit}>
        <FormLabel p="20px" as="b" fontSize="4xl" name="textTarea">
          To do list:
        </FormLabel>
        <Flex
          p="10px"
          w="full"
          alignItems="cemter"
          justifyItems="space-between"
        >
          <InputGroup size="md">
            <Input
              borderColor="#EEB1B1"
              focusBorderColor="#EEB1B1"
              pr="4.5rem"
              type="text"
              name="textTarea"
              onChange={handleChange}
            />
            <InputRightElement width="40px">
              <IconButton
                borderRadius="100%"
                bg="#AEC7A8"
                color="white"
                h="2rem"
                size="sm"
                onClick={handleSubmit}
                icon={<AddIcon />}
              ></IconButton>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </form>
    </Flex>
  );
};

export default TaskForm;
