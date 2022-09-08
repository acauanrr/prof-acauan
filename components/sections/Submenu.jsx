import {
  Box,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import NextLink from "next/link";

export default function Submenu() {
  return (
    <SimpleGrid
      columns={{ base: 2, md: 4 }}
      spacingX={5}
      border="1px"
      borderColor="gray.200"
      p={3}
      mt={{ base: 4, md: 0 }}
    >
      <NextLink href="/ensino" passHref>
        <Link>
          <Box textAlign="center">
            <Image
              src="/images/ensino.png"
              borderRadius="full"
              boxSize={{ base: "60px", md: "100px" }}
              shadow="2xl"
              alt="Ensino"
              margin="0 auto"
            />
            <Heading as="h2" size={{ base: "sm", md: "md" }}>
              Ensino
            </Heading>
            <Text fontSize={{ base: "sm", md: "xs" }}>
              Disciplinas ministradas
            </Text>
          </Box>
        </Link>
      </NextLink>

      <NextLink href="/pesquisa" passHref>
        <Link>
          <Box textAlign="center">
            <Image
              src="/images/pesquisa.png"
              borderRadius="full"
              boxSize={{ base: "60px", md: "100px" }}
              shadow="2xl"
              alt="Ensino"
              margin="0 auto"
            />
            <Heading as="h2" size={{ base: "sm", md: "md" }}>
              Pesquisa
            </Heading>
            <Text fontSize={{ base: "sm", md: "xs" }}>
              Artigos e Orientações de TCC
            </Text>
          </Box>
        </Link>
      </NextLink>

      <NextLink href="/extensao" passHref>
        <Link>
          <Box textAlign="center">
            <Image
              src="/images/extensao.png"
              borderRadius="full"
              boxSize={{ base: "60px", md: "100px" }}
              shadow="2xl"
              alt="Ensino"
              margin="0 auto"
            />
            <Heading as="h2" size={{ base: "sm", md: "md" }}>
              Extensão
            </Heading>
            <Text fontSize={{ base: "sm", md: "xs" }}>
              Projetos de Extensão que participo
            </Text>
          </Box>
        </Link>
      </NextLink>

      <NextLink href="/projetos" passHref>
        <Link>
          <Box textAlign="center">
            <Image
              src="/images/devs.png"
              borderRadius="full"
              boxSize={{ base: "60px", md: "100px" }}
              shadow="2xl"
              alt="Ensino"
              margin="0 auto"
            />
            <Heading as="h2" size={{ base: "sm", md: "md" }}>
              Portfólio
            </Heading>
            <Text fontSize={{ base: "sm", md: "xs" }}>
              Sistemas Desenvolvidos
            </Text>
          </Box>
        </Link>
      </NextLink>
    </SimpleGrid>
  );
}
