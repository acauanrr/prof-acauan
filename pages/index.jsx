import NextLink from "next/link";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  UnorderedList,
  ListItem,
  Link,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import Head from "next/head";
import { ChevronRightIcon } from "@chakra-ui/icons";

const imgAca = "/images/aca.jpg";

export default function Index() {
  return (
    <>
      <Head>
        <title>Prof. Acauan Ribeiro</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex
        justifyContent="center"
        // flexDir={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        mb={2}
        minW="full"
      >
        <Grid
          gridTemplateColumns={{
            base: "1fr ",
            md: "4fr 2fr",
          }}
          gridTemplateRows={{
            base: "auto",
            md: "auto auto ",
          }}
          gridTemplateAreas={{
            base: `'foto' 'text' 'devs' `,
            md: `'text foto' 'devs foto'  `,
          }}
          gap={2}
          maxW={{ base: "100%", md: "80%" }}
          p={2}
        >
          <Box gridArea="foto">
            <Image
              area={"foto"}
              src={imgAca}
              boxSize="250px"
              rounded="1rem"
              shadow="2xl"
              alt="Imagem Acauan"
              marginX="auto"
              // mb={{ base: 2, md: 0 }}
            />
          </Box>
          <Box gridArea="text">
            <Heading
              area={"text"}
              as="h2"
              p={4}
              size={{ base: "xs", md: "sm" }}
              color="primary.800"
              opacity="0.8"
              fontWeight="normal"
              lineHeight={1.5}
              textAlign={["justify", "justify", "left", "left"]}
            >
              <strong>Prof. Acauan</strong> é professor Adjunto vinculado ao
              Departamento de Ciência da Computação da Universidade Federal de
              Roraima (UFRR). Mestre em Ciência da Computação pelo Programa de
              Pós-Graduação do Instituto de Computação da UNICAMP (2017).
              Bacharel em Ciência da Computação pela Universidade Federal de
              Roraima - UFRR (2010). Possui especialização em Engenharia de
              Sistemas pela ESAB (2011). Atua nas disciplinas de Estrutura de
              Dados, Banco de Dados e Desenvolvimento Web. As linhas de pesquisa
              são na área de Sistemas de Informação, Visualização de Dados,
              Visualização de Informações e Mineração Visual de Dados.
            </Heading>
          </Box>
          <Box gridArea="devs">
            <Box
              area={"dev"}
              bg="gray.100"
              border="1px"
              borderColor="gray.200"
              direction="column"
              maxW="450px"
              maxH="500px"
              borderRadius="8px"
              p={8}
              margin="0 auto"
            >
              <Heading as="h2" size="md" mb={1}>
                Sistemas Desenvolvidos
              </Heading>
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
          </Box>
        </Grid>
      </Flex>
    </>
  );
}
