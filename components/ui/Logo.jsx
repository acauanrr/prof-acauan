import { Box, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
const logo = "/logo.svg";

export default function Logo(props) {
  return (
    <Box {...props}>
      <NextLink href="/" passHref>
        <Link>
          <Image src={logo} size="100%" alt="logo" />
        </Link>
      </NextLink>
    </Box>
  );
}
