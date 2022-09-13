import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Pesquisa() {
  const router = useRouter();
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
        <Heading>Pesquisa</Heading>
        <Text fontSize="md" color="primary.800">
          Monografia, artigos, orientações de TCCs.
        </Text>

        <Box>
          <Heading as="h5" size="sm" color="primary.800" mb={2}>
            Mestrado - Unicamp (2017)
          </Heading>
          <Link href="http://repositorio.unicamp.br/Acervo/Detalhe/983860">
            <a target="_blank">
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
                <ExternalLinkIcon />
                <Text fontSize="xs" fontWeight="bold" px={1}>
                  Título:
                </Text>
                <Text fontSize="xs">
                  Visualização de mudanças em coleções de textos por árvores de
                  similaridade
                </Text>
              </Box>
            </a>
          </Link>
        </Box>
        <Divider borderColor="primary.600" py={2} />
        <Flex flexDirection="column" gap={1}>
          <Heading as="h5" size="sm" color="primary.800" mb={2}>
            Orientações de TCC - UFRR (2022)
          </Heading>

          <Link href="#">
            <a>
              <Box
                as="button"
                display="flex"
                flexDirection="column"
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
                <HStack>
                  <ExternalLinkIcon />
                  <Text fontSize="xs" fontWeight="bold" px={1}>
                    Título:
                  </Text>
                  <Text fontSize="xs">
                    DS-LEARNING: Uma ferramenta de auxílio ao estudo de
                    Estrutura de Dados I
                  </Text>
                </HStack>
                <HStack pl={6}>
                  <Text fontSize="xs" fontWeight="bold" px={1}>
                    Discente:
                  </Text>
                  <Text fontSize="xs">Matheus Fellype de Moura Silva</Text>
                </HStack>
              </Box>
            </a>
          </Link>

          <Link href="#">
            <a>
              <Box
                as="button"
                display="flex"
                flexDirection="column"
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
                <HStack>
                  <ExternalLinkIcon />
                  <Text fontSize="xs" fontWeight="bold" px={1}>
                    Título:
                  </Text>
                  <Text fontSize="xs">
                    Manipulação de Dados através da combinação de técnicas de
                    Visual Data Mining
                  </Text>
                </HStack>
                <HStack pl={6}>
                  <Text fontSize="xs" fontWeight="bold" px={1}>
                    Discente:
                  </Text>
                  <Text fontSize="xs">Arthur de Melo Gerônimo</Text>
                </HStack>
              </Box>
            </a>
          </Link>
        </Flex>
      </Stack>
    </Flex>
  );
}
