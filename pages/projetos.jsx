import { Box, Flex, Heading, Stack, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";

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
        <Heading alignSelf="left">Sistemas Desenvolvidos</Heading>
        <Box
          mt={10}
          bg="gray.100"
          border="1px"
          borderColor="gray.200"
          direction="column"
          maxW="450px"
          maxH="500px"
          borderRadius="8px"
          p={8}
        >
          <NextLink href="/projetos/quiz" passHref>
            <Link>
              <Box>
                <Heading as="h3" size="sm" color="primary.500">
                  <ChevronRightIcon /> Quiz - Lógica de Programação
                </Heading>
              </Box>
            </Link>
          </NextLink>
        </Box>
      </Stack>
    </Flex>
  );
}
