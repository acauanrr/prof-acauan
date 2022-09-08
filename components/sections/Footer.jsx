import { Flex, Heading, HStack, Icon } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <Flex
      w="100%"
      mt={10}
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      bg="primary.800"
      py={10}
    >
      <Heading as="h5" size="sm" color="gray.300">
        Prof. Acauan Ribeiro
      </Heading>
      <HStack>
        <Icon color="gray.300" as={MdOutlineEmail} />
        <Heading as="h5" size="sm" color="gray.300">
          acauan.ribeiro@ufrr.br
        </Heading>
      </HStack>
      <Heading as="h5" size="sm" color="gray.300">
        2022
      </Heading>
    </Flex>
  );
}
