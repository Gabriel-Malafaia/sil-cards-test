import styles from "./error.module.css";
import { Button, Center, Flex, Text } from "@chakra-ui/react";
import { BiErrorAlt } from "react-icons/bi";
import { colors } from "../../service/utils";

interface IProps {
  text: string;
  actionLabel: string;
  action?: () => void;
}

export default function Error({ text, actionLabel, action }: IProps) {
  return (
    <Flex
      background={colors.error}
      borderRadius={5}
      p={5}
      w={"100%"}
      maxW={420}
    >
      <Center gap={4} justifyContent={"space-between"} w={"100%"}>
        <BiErrorAlt className={styles.error} />
        <Text fontWeight={"bold"}>{text}</Text>
        <Button onClick={action} background={colors.white}>
          {actionLabel}
        </Button>
      </Center>
    </Flex>
  );
}
