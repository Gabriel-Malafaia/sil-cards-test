import { INews } from "../../../interfaces";
import { colors } from "../../../service/utils";
import { ReactNode } from "react";
import { ICustomProps } from "..";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import CardLink from "../link";

interface IProps {
  icon: ReactNode;
  item: INews;
  custom: ICustomProps;
}

const CUSTOM_SIZE = {
  large: 220,
  medium: 180,
};

export default function CustomCard({ icon, item, custom }: IProps) {
  return (
    <Flex
      color={colors.white}
      bg={custom.backgroundColor}
      direction={"column"}
      justifyContent={"space-between"}
      p={4}
      boxShadow="lg"
      rounded="md"
      w={"auto"}
      maxH={CUSTOM_SIZE[custom.size]}
      gap={2}
    >
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Box color={custom.color}>{icon}</Box>
        <Heading as="h2" size={{ base: "sm", sm: "md" }}>
          {item.title}
        </Heading>
      </Box>

      <Text>{custom.text}</Text>

      <CardLink
        color={custom.color}
        title={item.learn_more.title}
        href={item.learn_more.href}
      />
    </Flex>
  );
}
