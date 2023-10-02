import { colors } from "./service/utils";
import { RESOURCE } from "./hl";
import { useFetchNews } from "./hooks/useFetchNews";
import { Box } from "@chakra-ui/react";
import { Header, Card, CardList, Icon, Icons } from "./components";
import RenderContent from "./components/content";

export const TRUST_PILOT = {
  title: "Trustpilot",
  about: RESOURCE.TRUST_PILOT_ABOUT,
  learn_more: {
    title: RESOURCE.TRUST_PILOT_TITLE,
    href: "#",
  },
  infos: [],
};

function App() {
  const { news, loading, error, fetchData } = useFetchNews();

  return (
    <>
      <Header />
      <Box as="main" maxW={1400} margin={"auto"} my={news ? -12 : 4} p={4}>
        <RenderContent loading={loading} error={error} actionError={fetchData}>
          <CardList>
            {news?.map((item, index) => (
              <Card icon={<Icon id={item.about} />} key={index} item={item} />
            ))}
            <Card
              icon={<Icon id={Icons.Trust} />}
              item={TRUST_PILOT}
              custom={{
                backgroundColor: colors.secondary,
                color: colors.secondary_2,
                size: "medium",
                text: RESOURCE.TRUST_PILOT_DESCRIPTION,
              }}
            />
          </CardList>
        </RenderContent>
      </Box>
    </>
  );
}

export default App;
