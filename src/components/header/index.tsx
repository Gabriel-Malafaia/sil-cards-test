import Logo from "../../assets/logo.svg";
import { Center, Flex, Image } from "@chakra-ui/react";
import { colors } from "../../service/utils";

export default function Header() {
  return (
    <Flex as="header" bg={colors.primary} w="100%" p={4} height={"3xs"}>
      <Center
        w={"100%"}
        maxW={1600}
        p={4}
        justifyContent={"flex-start"}
        margin={"auto"}
      >
        <Image maxW={{ base: 250, sm: 400, md: 500 }} src={Logo} alt="Logo" />
      </Center>
    </Flex>
  );
}
