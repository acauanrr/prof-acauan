import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function CardSubMenu(props) {
  return (
    <NextLink href={props.link} passHref>
      <Link>
        <Box textAlign="center">
          <Image
            src={props.imgUrl}
            borderRadius="full"
            boxSize={{ base: "50px", md: "50px" }}
            shadow="2xl"
            alt={props.title}
            marginX="auto"
            marginBottom={0.5}
          />
          <Heading as="h2" size={{ base: "xs", md: "sm" }}>
            {props.title}
          </Heading>
          <Text fontSize={{ base: "xs", md: "xs" }}>{props.subTitle}</Text>
        </Box>
      </Link>
    </NextLink>
  );
}
