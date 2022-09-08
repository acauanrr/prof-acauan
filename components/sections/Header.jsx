import { useState } from "react";
import { Box, Button, Flex, Icon, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { CloseIcon, HamburgerIcon, Home } from "@chakra-ui/icons";
import Logo from "../ui/Logo";
import { AiFillHome, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";

// Componente local
const MenuItems = (props) => {
  const { children, isLast, to, isExternal, iconName, ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <NextLink href={to} passHref>
        <Link
          isExternal={isExternal}
          display="inline-flex"
          alignItems="center"
        >
          <Icon as={iconName} w={5} h={5} mr={1}/>
          {children}
        </Link>
      </NextLink>
    </Text>
  );
};

export default function Header(props) {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={4}
      bg={["primary.300", "primary.300", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="250px"
          color={["white", "white", "primary.500", "primary.500"]}
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon w={7} h={7}/>}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/" isExternal={false} iconName={AiFillHome}>
            Inicio
          </MenuItems>
          <MenuItems
            to="https://www.youtube.com/channel/UCFEBaU0TCLsHTqKY5RPK-9g"
            isExternal={true}
            iconName={AiFillYoutube}
          >
            Canal do Youtube{" "}
          </MenuItems>
          <MenuItems
            to="https://www.linkedin.com/in/acauan-ribeiro-280a89b4"
            isExternal={true}
            iconName={AiFillLinkedin}
          >
            LinkedIn
          </MenuItems>
        </Flex>
      </Box>
    </Flex>
  );
}
