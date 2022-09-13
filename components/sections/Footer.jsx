import { Flex, Heading, HStack, Icon } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      bg="paletaCool.bg"
      py={5}
    >
      <Heading as="h5" size="xs" color="gray.300">
        acauan.ribeiro@ufrr.br
      </Heading>

      <Heading as="h5" size="xs" color="gray.300">
        2022
      </Heading>
    </Flex>
  );
}
