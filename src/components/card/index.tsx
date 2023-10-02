import { INews } from "../../interfaces";
import { useFetchData } from "../../hooks/useFetchData";
import { RenderContent } from "..";
import { colors, formatNumber } from "../../service/utils";
import { ChangeEvent, ReactNode } from "react";
import { Box, Flex, Heading, Select, Text } from "@chakra-ui/react";
import CustomCard from "./custom";
import CardLink from "./link";

export interface ICustomProps {
  color: string;
  backgroundColor: string;
  size: "large" | "medium";
  text: string;
}

interface IProps {
  icon: ReactNode;
  item: INews;
  custom?: ICustomProps;
}

export default function Card({ icon, item, custom }: IProps) {
  const { value, loading, error, fetchData } = useFetchData({
    item,
    initialCodeData: custom ? undefined : item.infos[0],
  });

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    fetchData(newValue);
  };

  if (custom) {
    return <CustomCard icon={icon} item={item} custom={custom} />;
  }

  return (
    <Flex
      color={colors.secondary}
      bg={colors.white}
      direction={"column"}
      justifyContent={"space-between"}
      p={4}
      boxShadow="lg"
      rounded="md"
      w={"auto"}
      minH={220}
      gap={2}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={2}
      >
        {icon}
        <Heading as="h2" size={{ base: "sm", sm: "md" }}>
          {item.title}
        </Heading>

        <Select
          size={"sm"}
          w={"auto"}
          border={"none"}
          color={colors.gray_1}
          fontWeight={"bold"}
          onChange={onChange}
        >
          {item.infos.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </Select>
      </Box>

      <RenderContent loading={loading} error={error} actionError={fetchData}>
        {value && Array.isArray(value.info) ? (
          <Flex direction={"column"} gap={2}>
            {value.info.map((e, index) => (
              <Flex justify={"space-between"} key={index} gap={2}>
                <Text fontWeight={"semibold"} color={colors.gray_2}>
                  {e.text}
                </Text>
                <Text fontWeight={"semibold"}>{e.value}</Text>
              </Flex>
            ))}
          </Flex>
        ) : (
          value && (
            <Text fontSize={"5xl"} fontWeight={"semibold"}>
              {formatNumber(value.info as number)}
            </Text>
          )
        )}
      </RenderContent>

      <CardLink title={item.learn_more.title} href={item.learn_more.href} />
    </Flex>
  );
}
