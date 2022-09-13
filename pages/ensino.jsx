import {
  Flex,
  Heading,
  Stack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  Box,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function Ensino() {
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
        <Heading>Ensino</Heading>
        <Text fontSize="md" color="primary.800">
          Disciplinas ministradas na UFRR.
        </Text>
        <Box mb={{ base: 4, md: 0 }}>
          <Tabs>
            <TabList>
              <Tab>2022</Tab>
              <Tab>2021</Tab>
              <Tab>2020</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Table variant="simple" colorScheme="blue" size="md">
                  <Thead>
                    <Tr>
                      <Td colspan="3" color="red.800">
                        2022.2
                      </Td>
                    </Tr>
                    <Tr>
                      <Th color="primary.800">Disciplina</Th>
                      <Th color="primary.800">N° Alunos</Th>
                      <Th color="primary.800">Status</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>DCC302 - Estrut. de Dados I</Td>
                      <Td>34 alunos</Td>
                      <Td>Ativa</Td>
                    </Tr>
                    <Tr>
                      <Td>DCC704 - Arq. e Tec. de Sist. Web</Td>
                      <Td>7 alunos</Td>
                      <Td>Ativa</Td>
                    </Tr>
                  </Tbody>
                  <Thead>
                    <Tr>
                      <Td colspan="3" color="red.800">
                        2022.1
                      </Td>
                    </Tr>
                    <Tr>
                      <Th color="primary.800">Disciplina</Th>
                      <Th color="primary.800">N° Alunos</Th>
                      <Th color="primary.800">Status</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>DCC405 - Estrut. de Dados II</Td>
                      <Td>20 alunos</Td>
                      <Td>Closed</Td>
                    </Tr>
                    <Tr>
                      <Td>DCC603 - Banco de Dados II</Td>
                      <Td>15 alunos</Td>
                      <Td>Closed</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TabPanel>
              <TabPanel>
                <p>...</p>
              </TabPanel>
              <TabPanel>
                <p>...</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Stack>
    </Flex>
  );
}
