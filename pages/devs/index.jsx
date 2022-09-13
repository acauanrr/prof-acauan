import { Box, Flex, Heading, Stack, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";

export default function Devs() {
  return (
    <Flex
      justifyContent="center"
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      mb={2}
      minW="full"
    >
      <Stack
        minW="80%"
        spacing={4}
        border="2px"
        borderStyle="dashed"
        borderColor="gray.200"
        py={{ base: 2, md: 4 }}
        px={{ base: 4, md: 8 }}
      >
        <Heading>Sistemas Desenvolvidos</Heading>
        <Text fontSize="md" color="primary.800">
          Exemplos feitos em sala
        </Text>

        <Box
          area={"dev"}
          bg="gray.100"
          border="1px"
          borderColor="gray.200"
          direction="column"
          maxW="450px"
          maxH="500px"
          borderRadius="8px"
          p={4}
          margin="0 auto"
        >
          <NextLink href="/devs/quiz" passHref>
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
