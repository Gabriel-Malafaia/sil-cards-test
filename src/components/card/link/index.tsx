import { Link } from "@chakra-ui/react";
import { BiRightArrowAlt } from "react-icons/bi";
import { colors } from "../../../service/utils";

interface IProps {
  color?: string;
  title: string;
  href?: string;
}

export default function CardLink({
  title,
  href,
  color = colors.primary,
}: IProps) {
  return (
    <Link
      href={href || "#"}
      color={color}
      fontWeight={"semibold"}
      textDecoration={"underline"}
      display={"flex"}
      alignItems={"center"}
      gap={2}
    >
      {title}
      {href && <BiRightArrowAlt />}
    </Link>
  );
}
