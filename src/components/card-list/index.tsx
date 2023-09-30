import { Grid } from "@chakra-ui/react";
import { INews } from "../../interfaces";
import { Card } from "..";

interface IProps {
  items: INews[];
}

export default function CardList({ items }: IProps) {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={6}
    >
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </Grid>
  );
}
