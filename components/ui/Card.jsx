import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
// import { customScrollbar } from '../../../styles/styles';
// import { CardType } from './types.d';

export function Card(props) {
  const { title, content, image, publishDate, link } = props;

  return (
    <Link href={link}>
      <a>
      <Flex direction="column" maxW="450px" maxH="500px" borderRadius="8px" bgColor="gray.100">
        {image?.url && (
          <Image
            src={image.url}
            alt={image.alt}
            w="100%"
            maxW="450px"
            h="100%"
            maxH="220px"
            objectFit="cover"
            borderTopRadius="8px"
          />
        )}
        <VStack
          p="16px"
          spacing="16px"
          align="flex-start"
          maxW="450px"
          minW="200px"
          h="100%"
          w="100%"
          overflow="auto"
        >
          {publishDate && <Text variant="subtitle">{publishDate}</Text>}
          <Heading fontSize={['md', '2xl', '2xl', '2xl']}>{title}</Heading>
          <Text overflowY="auto">
            {content}
          </Text>
        </VStack>
      </Flex>
      </a>
    </Link>
  );
}
