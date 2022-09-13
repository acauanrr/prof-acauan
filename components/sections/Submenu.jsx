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
import CardSubMenu from "../ui/CardSubMenu";

export default function Submenu() {
  return (
    <SimpleGrid
      columns={{ base: 2, md: 4 }}
      spacingX={5}
      p={3}
      mt={{ base: 4, md: 0 }}
    >
      <CardSubMenu
        link="/ensino"
        imgUrl="/images/ensino.png"
        title="Ensino"
        subTitle="Disciplinas ministradas"
      />
      <CardSubMenu
        link="/pesquisa"
        imgUrl="/images/pesquisa.png"
        title="Pesquisa"
        subTitle="Artigos e Orientações de TCC"
      />
      <CardSubMenu
        link="/extensao"
        imgUrl="/images/extensao.png"
        title="Extensão"
        subTitle="Projetos de Extensão que participo"
      />
      <CardSubMenu
        link="/devs"
        imgUrl="/images/devs.png"
        title="Desenvolvimento"
        subTitle="Sistemas Desenvolvidos"
      />
    </SimpleGrid>
  );
}
