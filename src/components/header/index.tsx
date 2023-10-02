import Logo from "../../assets/logo.svg";
import { Center, Flex, Image } from "@chakra-ui/react";
import { colors } from "../../service/utils";

export default function Header() {
  return (
    <Flex as="header" bg={colors.primary} w="100%" height={"3xs"}>
      <Center
        w={"100%"}
        maxW={1400}
        justifyContent={"flex-start"}
        m={"auto"}
        p={4}
      >
        <Image maxW={{ base: 250, sm: 400, md: 500 }} src={Logo} alt="Logo" />
      </Center>
    </Flex>
  );
}
