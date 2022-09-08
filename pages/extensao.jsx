import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

export default function Ensino() {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      p={8}
      mb={10}
    >
      <Stack spacing={2}>
        <Heading alignSelf="left">Projetos de Extensão</Heading>
        <Text fontSize="md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus aut
          temporibus quidem? Odit hic commodi accusantium soluta doloremque eius
          qui magnam sint. Nihil quis, assumenda cumque id repellendus at est
          saepe voluptates magni iure, ipsam atque ad doloribus cupiditate
          ipsum!
        </Text>
      </Stack>
    </Flex>
  );
}
