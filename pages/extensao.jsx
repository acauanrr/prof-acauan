import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Extensao() {
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
        <Heading>Extensão</Heading>
        <Text fontSize="md" color="primary.800">
          Projetos de extensão que participo
        </Text>

        <Box>
          <Link href="#">
            <a>
              <Box
                as="button"
                display="flex"
                colorScheme="teal"
                variant="outline"
                size="md"
                py={2}
                px={4}
                borderWidth="1px"
                rounded="md"
                _hover={{ bg: "gray.200" }}
                _focus={{ boxShadow: "outline" }}
              >
                <ExternalLinkIcon color="primary.800" />
                <VStack alignItems="flex-start" pl={1}>
                  <Heading as="h5" size="sm" color="primary.800">
                    JCC 2022
                  </Heading>
                  <Text fontSize="xs">
                    Jornada Ciêntífica da Computação - DCC - UFRR
                  </Text>
                </VStack>
              </Box>
            </a>
          </Link>
        </Box>
      </Stack>
    </Flex>
  );
}
